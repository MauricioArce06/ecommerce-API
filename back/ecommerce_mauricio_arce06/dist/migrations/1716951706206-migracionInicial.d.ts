import { MigrationInterface, QueryRunner } from "typeorm";
export declare class MigracionInicial1716951706206 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
