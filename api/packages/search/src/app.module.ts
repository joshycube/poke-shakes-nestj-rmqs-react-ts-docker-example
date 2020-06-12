import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { Transport, ClientsModule } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ISettings } from './interfaces/ISettings';

import { Pokemon, PokemonSchema } from './schemas/pokemon.schema';

export class AppModule {
  static forRoot(settings: ISettings): DynamicModule {
    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(settings.MONGO_HOST),
        MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
        ClientsModule.register([
          {
            name: 'TranslationService',
            transport: Transport.RMQ,
            options: {
              urls: [settings.MQ_LINK],
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
    };
  }
}
