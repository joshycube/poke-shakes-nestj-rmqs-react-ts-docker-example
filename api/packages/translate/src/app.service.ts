import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Observable } from 'rxjs';

import { Pokemon } from './schemas/pokemon.schema';

const API_LANG = 'en';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    @InjectModel(Pokemon.name) private pokemonModel: Model<Pokemon>,
  ) {}

  private async getPokemonDescription(name: string): Promise<string> {
    const response: Observable<AxiosResponse<any>> = this.httpService.get(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`,
    );

    try {
      const pokeResponse = await response.toPromise();

      if (!!pokeResponse?.data?.flavor_text_entries?.length) {
        const pokemonDescription = pokeResponse?.data?.flavor_text_entries
          .filter((entry: any) => entry.language.name === API_LANG)
          .map((entry: any) => entry.flavor_text)
          .reduce((acc: string, curr: string) => `${acc} ${curr}`, ['']);

        return pokemonDescription;
      }
    } catch (error) {
      throw error;
    }
  }

  private async getFunTranslation(text: string): Promise<string> {
    const response: Observable<AxiosResponse<
      any
    >> = this.httpService.post(
      `https://api.funtranslations.com/translate/shakespeare.json`,
      { text },
    );

    try {
      const funTranslationResponse = await response.toPromise();

      if (funTranslationResponse?.data?.success?.total === 1) {
        return funTranslationResponse?.data?.contents?.translated;
      }
    } catch (error) {
      throw error;
    }
  }

  public async translatePokemon(name: string): Promise<string> {
    try {
      const pokemonDescription = await this.getPokemonDescription(name);
      const funTranslation = await this.getFunTranslation(pokemonDescription);

      if (funTranslation && funTranslation !== '') {
        const pokemon = {
          name,
          description: funTranslation,
        };

        const entry = await this.pokemonModel.create(pokemon);

        return entry._id;
      }
    } catch (error) {
      throw error;
    }
  }
}
