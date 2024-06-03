import { MigrationInterface, QueryRunner } from "typeorm";
export declare class MigracionUser1717082211750 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
