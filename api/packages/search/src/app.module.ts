import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Transport, ClientsModule } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Pokemon, PokemonSchema } from './schemas/pokemon.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database:27017/pokeshakes'),
    MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
    ClientsModule.register([
      {
        name: 'TRANSLATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@rabbitmq:5672/'],
          queue: 'translate',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
