import { AuthService } from './auth.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShareService } from 'src/share/share.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/user.dto';

describe('Auth Controller', () => {
  let controller: AuthController;
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
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should signup a user', async () => {
    const dto = {
      email: 'foo@bar.com',
      password: 'acb@123',
      passwordConfirm: 'acb@123',
    };
    expect(await controller.create(dto)).toEqual({
      id: expect.any(Number),
      email: dto.email,
      status: 'active',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});
