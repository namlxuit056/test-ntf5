import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShareService } from 'src/share/share.service';
import { UserService } from 'src/user/user.service';
import { movieCreateMock } from './../../test/mock/movie.mock';
import { userLogin } from './../../test/mock/user.mock';
import { AuthService } from './../auth/auth.service';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

describe('MovieController', () => {
  let controller: MovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        AuthService,
        UserService,
        PrismaService,
        ShareService,
        MovieService,
        JwtService,
      ],
    }).compile();

    controller = module.get<MovieController>(MovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should can share video', async () => {
    const created = await controller.share(movieCreateMock, userLogin);
    expect(created).toEqual({
      id: expect.any(Number),
      url: expect.any(String),
      title: expect.any(String),
      desc: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      author: expect.any(Object),
    });
  });
  it('should get list videos', async () => {
    const data = await controller.getMany({ take: 10, skip: 0 });
    expect(data.data[0]).toEqual({
      id: expect.any(Number),
      url: expect.any(String),
      title: expect.any(String),
      desc: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      author: expect.any(Object),
    });
    expect(data.count).toEqual(expect.any(Number));
  });
});
