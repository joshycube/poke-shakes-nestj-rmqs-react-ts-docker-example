import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxy } from '@nestjs/microservices';

import { Model } from 'mongoose';
import { Pokemon } from './schemas/pokemon.schema';

import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;
  let translateServiceSpy: ClientProxy;
  let pokemonModelSpy: Model<Pokemon>;

  beforeEach(async () => {

    // TODO: This arrangement is very verbose

    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: 'PokemonModel',
          useFactory: () => ({
            findOne: jest.fn(() => ({
              exec: jest.fn(() => Promise.resolve(null)),
            })),
            findById: jest.fn(() => ({
              exec: jest.fn(() => Promise.resolve({
                _id: '1',
                name: 'pikachu',
                description: 'hey ho'
              })),
            })),
          }),
        },
        {
          provide: 'TranslationService',
          useFactory: () => ({
            send: jest.fn(() => ({
              toPromise: jest.fn(() => Promise.resolve("1"))
            }))
          }),
        },
      ],
    }).compile();

    appService = app.get<AppService>(AppService);
    translateServiceSpy = app.get<ClientProxy>('TranslationService');
    pokemonModelSpy = app.get<Model<Pokemon>>('PokemonModel');
  });

  describe('App service', () => {
    it('should call the getPokemon service', async () => {
      await appService.getPokemon("pikachu");
      expect(pokemonModelSpy.findOne).toHaveBeenCalled();
      expect(translateServiceSpy.send).toHaveBeenCalledWith({ cmd: 'translate' }, 'pikachu');
      expect(pokemonModelSpy.findById).toHaveBeenCalledWith("1");
    });
  });
});
