import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:bitnami@localhost:5672/hello'],
        queue: 'pokes_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen(() => console.log('Translation microservice is listening'));
}
bootstrap();
