import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { ISettings } from './interfaces/ISettings';

async function bootstrap() {

  dotenv.config();

  const settings: ISettings = dotenv.parse(
    fs.readFileSync(`${process.env.NODE_ENV}.env`),
  );

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule.forRoot(settings),
    {
      transport: Transport.RMQ,
      options: {
        urls: [settings.MQ_LINK],
        queue: 'translate',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen(() => console.log('Translation microservice is listening'));
}
bootstrap();
