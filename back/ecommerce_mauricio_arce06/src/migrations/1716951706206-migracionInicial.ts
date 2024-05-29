import { MigrationInterface, QueryRunner } from "typeorm";

export class MigracionInicial1716951706206 implements MigrationInterface {
    name = 'MigracionInicial1716951706206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "date" SET DEFAULT '29/5/2024'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "date" SET DEFAULT '28/5/2024'`);
    }

}
