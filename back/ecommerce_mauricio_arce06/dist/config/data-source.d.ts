import { DataSource } from 'typeorm';
export declare const AppDataSource: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    migrationsTableName: string;
    migrationsRun: boolean;
};
declare const _default: (() => {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    migrationsTableName: string;
    migrationsRun: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    migrationsTableName: string;
    migrationsRun: boolean;
}>;
export default _default;
export declare const connectionSource: DataSource;
