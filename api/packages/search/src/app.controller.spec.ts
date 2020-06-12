import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { Transport, ClientsModule } from '@nestjs/microservices';

import { Pokemon, PokemonSchema } from './schemas/pokemon.schema';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appServiceSpy: AppService;

  const settings = {
    MONGO_HOST: 'mongodb://localhost:27017/pokeshakes',
    MQ_LINK: 'amqp://guest:guest@localhost:5672/'
  }

  beforeEach(async () => {

    // TODO: This arrangement is very verbose

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useFactory: () => ({
            getPokemon: jest.fn(() => Promise.resolve(true)),
          }),
        },
      ],
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

    }).compile();

    appController = app.get<AppController>(AppController);
    appServiceSpy = app.get<AppService>(AppService);

  });

  describe('App controller', () => {
    it('should call the getPokemon service', async () => {
      await appController.getPokemon("pikachu");
      expect(appServiceSpy.getPokemon).toHaveBeenCalledWith('pikachu');
    });
  });
});
