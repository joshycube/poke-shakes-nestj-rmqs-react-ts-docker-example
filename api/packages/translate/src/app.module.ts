import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Pokemon, PokemonSchema } from './schemas/pokemon.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://database:27017/pokeshakes'),
    MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
