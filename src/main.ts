import { ValidationPipe, HttpException, HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
    cors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (error) => {
        const objError = error[0].constraints;
        throw new HttpException(
          objError[Object.keys(objError)[0]],
          HttpStatus.BAD_REQUEST,
        );
      },
    }),
  );

  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('API NTF5')
    .setDescription('The NTF5 API description')
    .setVersion('1.0')
    .addTag('NTF5')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes();
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
