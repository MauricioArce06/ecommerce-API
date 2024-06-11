import { DataSource, DataSourceOptions, MigrationExecutor } from 'typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from './envCon';
import { registerAs } from '@nestjs/config';

export const AppDataSource = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  // synchronize: true,
  // logging: true,
  dropSchema: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'custom_migration_table',
  migrationsRun: true,
};

//* npm run migration:run

export default registerAs('typeorm', () => AppDataSource);

export const connectionSource = new DataSource(
  AppDataSource as DataSourceOptions,
);
