import dotenv from 'dotenv';
import { defineConfig, env } from 'prisma/config';

dotenv.config();

export default defineConfig({
  schema: './src/prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
});