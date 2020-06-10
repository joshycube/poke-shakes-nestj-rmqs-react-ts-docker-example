import { HttpModule, DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ISettings } from './interfaces/ISettings';

import { Pokemon, PokemonSchema } from './schemas/pokemon.schema';

export class AppModule {
  static forRoot(settings: ISettings): DynamicModule {
    return {
      module: AppModule,
      imports: [
        HttpModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(settings.MONGO_HOST),
        MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
      ],
      controllers: [AppController],
      providers: [AppService],
    }
  }
}
