"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envCon_1 = require("./envCon");
const config_1 = require("@nestjs/config");
exports.AppDataSource = {
    type: 'postgres',
    host: envCon_1.DB_HOST,
    port: envCon_1.DB_PORT,
    username: envCon_1.DB_USERNAME,
    password: envCon_1.DB_PASSWORD,
    database: envCon_1.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsTableName: 'custom_migration_table',
    migrationsRun: true,
};
exports.default = (0, config_1.registerAs)('typeorm', () => exports.AppDataSource);
exports.connectionSource = new typeorm_1.DataSource(exports.AppDataSource);
//# sourceMappingURL=data-source.js.map