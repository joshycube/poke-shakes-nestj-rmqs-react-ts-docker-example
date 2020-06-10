import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ISettings } from './interfaces/ISettings';

async function bootstrap() {

  dotenv.config();

  const settings: ISettings = dotenv.parse(
    fs.readFileSync(`${process.env.NODE_ENV}.env`),
  );

  const app = await NestFactory.create(AppModule.forRoot(settings));
  app.enableCors();
  await app.listen(5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
