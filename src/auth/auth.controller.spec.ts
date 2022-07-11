import { userTestDto } from '../../test/mock/user.mock';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShareService } from 'src/share/share.service';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('Auth Controller', () => {
  let controller: AuthController;
  let jwtService: JwtService;
  const mockUserService = {
    create: jest.fn((dto: CreateUserDto) => {
      return {
        id: Date.now(),
        email: dto.email,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UserService,
        PrismaService,
        ShareService,
        JwtService,
      ],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<AuthController>(AuthController);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(jwtService).toBeDefined();
  });

  it('should login user success', async () => {
    const data = await controller.login(userTestDto);
    const check = await jwtService.verify(data.access_token, {
      secret: process.env.SECRET,
    });
    expect(check.email).toEqual(userTestDto.email);
  });

  it('shoud login fail', async () => {
    try {
      await controller.login(userTestDto);
    } catch (err) {
      expect(err).toBeInstanceOf(UnauthorizedException);
    }
  });
});
