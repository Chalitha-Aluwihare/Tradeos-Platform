import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import pkg from '@prisma/client';

const PrismaClientClass: any = (pkg as any).PrismaClient ?? (pkg as any).default ?? pkg;

@Injectable()
export class PrismaService extends PrismaClientClass implements OnModuleInit, OnModuleDestroy {
  async onModuleInit(): Promise<void> {
    await (this as any).$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await (this as any).$disconnect();
  }
}