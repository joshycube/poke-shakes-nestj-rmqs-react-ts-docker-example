import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'translate' })
  async handleMessageTranslate(data: string): Promise<string> {
    try {
      return await this.appService.translatePokemon(data);
    } catch (error) {
      throw error;
    }
  }
}
