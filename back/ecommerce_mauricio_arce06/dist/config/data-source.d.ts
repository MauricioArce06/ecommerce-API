import { DataSource } from 'typeorm';
declare const _default: (() => {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    entities: string[];
    migrations: string[];
    autoLoadEntities: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    entities: string[];
    migrations: string[];
    autoLoadEntities: boolean;
}>;
export default _default;
export declare const connectionSource: DataSource;
