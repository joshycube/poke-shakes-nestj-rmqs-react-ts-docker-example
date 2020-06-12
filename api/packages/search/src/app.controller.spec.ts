
import { Test, TestingModule } from '@nestjs/testing';

import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { Transport, ClientsModule } from '@nestjs/microservices';

import { Pokemon, PokemonSchema } from './schemas/pokemon.schema';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { debug } from 'console';

describe('AppController', () => {
  let appController: AppController;

  const settings = {
    MONGO_HOST: 'mongo',
    MQ_LINK: 'mqlink'
  }


  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(settings.MONGO_HOST),
        MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
        ClientsModule.register([
          {
            name: 'TRANSLATION_SERVICE',
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

    }).compile();

    appController = app.get<AppController>(AppController);
    debug(appController);
  });

  describe('get pokemon request', () => {
    it('should return a Pokemon description', () => {
      console.log(appController)
      expect(appController.getPokemon("pikachu")).toBe('');
    });
  });
});
