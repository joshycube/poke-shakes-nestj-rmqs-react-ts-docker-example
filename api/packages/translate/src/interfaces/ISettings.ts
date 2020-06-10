import { DotenvParseOutput } from 'dotenv';

export interface ISettings extends DotenvParseOutput {
  MONGO_HOST?: string
  MQ_LINK?: string
} 