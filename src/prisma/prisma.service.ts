import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { Prisma, PrismaClient } from '../../generated/prisma/client.js';

console.log('🎃 DB URL:', process.env.DATABASE_URL);

const options = {
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
  log: [
    { emit: 'event', level: 'query' } as const,
    'info' as const,
    'warn' as const,
    'error' as const,
  ],
} satisfies Prisma.PrismaClientOptions;

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super(options);
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
