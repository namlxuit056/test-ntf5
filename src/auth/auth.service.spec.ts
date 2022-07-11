import { userTestDto } from '../../test/mock/user.mock';
import { JwtService } from '@nestjs/jwt';
import { ShareService } from 'src/share/share.service';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtAuthGuard,
        UserService,
        PrismaService,
        JwtService,
        ShareService,
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be service login return token', async () => {
    const data = await service.login(userTestDto.email, userTestDto.password);
    const check = await jwtService.verify(data.access_token, {
      secret: process.env.SECRET,
    });
    expect(check.email).toEqual(userTestDto.email);
  });

  it('should be validate the user', async () => {
    const user = await service.validateUser(userTestDto);
    expect(user).toEqual({
      id: expect.any(Number),
      email: expect.any(String),
      status: 'active',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it('should be get profile the user', async () => {
    const dto = {
      id: 1,
    };
    const user = await service.profile(dto);

    expect(user).toEqual({
      id: expect.any(Number),
      email: expect.any(String),
      status: 'active',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});
