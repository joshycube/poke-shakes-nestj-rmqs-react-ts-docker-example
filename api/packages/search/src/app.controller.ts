import { Controller, Param, Get, Inject, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { AppService } from './app.service';
import { IPokemon } from './interfaces/IPokemon';
import SanitizeInterceptor from './interceptors/sanitize';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('TranslationService') private readonly client: ClientProxy,
  ) { }

  async onApplicationBootstrap(): Promise<any> {
    await this.client.connect();
  }

  @Get('/pokemon/:name')
  @UseInterceptors(SanitizeInterceptor)
  public async getPokemon(@Param('name') name: string): Promise<IPokemon> {
    try {
      return await this.appService.getPokemon(name);
    } catch (error) {
      throw error;
    }
  }
}
