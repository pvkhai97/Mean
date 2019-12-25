import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Config Swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Teacher API')
    .setVersion('1.0.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api/docs', app, swaggerDocument);

  // Config CORS
  app.enableCors();

  // Set global prefix router
  app.setGlobalPrefix('api');

  // Enable validation pipe
  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets('upload');
  await app.listen(3001);
}

bootstrap();
