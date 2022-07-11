import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { movieCreateMock } from './mock/movie.mock';
import { token } from './mock/user.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  it('/movies/share (POST)', () => {
    return request(app.getHttpServer())
      .post('/movies/share')
      .set('Authorization', token)
      .expect(201)
      .send(movieCreateMock);
  });
  it('/movies', () => {
    return request(app.getHttpServer()).get('/movies').expect(200);
  });
});
