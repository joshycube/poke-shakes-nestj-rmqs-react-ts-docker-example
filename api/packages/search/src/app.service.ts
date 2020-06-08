import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { Pokemon } from './schemas/pokemon.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Pokemon.name) private pokemonModel: Model<Pokemon>,
    @Inject('TRANSLATION_SERVICE') private client: ClientProxy,
  ) {}

  private translateMsg(name: string): Observable<string> {
    const pattern = { cmd: 'translate' };
    const data = name;
    return this.client.send<string>(pattern, data);
  }

  async getPokemon(name: string): Promise<Pokemon> {
    let pokemonResult = await this.pokemonModel.findOne({ name }).exec();

    if (pokemonResult === null) {
      const msg = this.translateMsg(name);
      const result = await msg.toPromise();
      pokemonResult = await this.pokemonModel.findById(result).exec();
    }

    return pokemonResult;
  }
}
