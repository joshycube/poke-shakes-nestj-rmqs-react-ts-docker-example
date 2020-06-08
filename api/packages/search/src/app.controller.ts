import { Controller, Param, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { AppService } from './app.service';
import { IPokemon } from './interfaces/IPokemon';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('TRANSLATION_SERVICE') private readonly client: ClientProxy,
  ) {}

  async onApplicationBootstrap(): Promise<any> {
    await this.client.connect();
  }

  @Get('/pokemon/:name')
  async getPokemon(@Param('name') name: string): Promise<IPokemon> {
    try {
      return await this.appService.getPokemon(name);
    } catch (error) {
      throw error;
    }
  }
}
