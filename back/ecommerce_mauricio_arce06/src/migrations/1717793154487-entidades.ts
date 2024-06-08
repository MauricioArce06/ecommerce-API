import { MigrationInterface, QueryRunner } from 'typeorm';

export class Entidades1717793154487 implements MigrationInterface {
  name = 'Entidades1717793154487';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(60) NOT NULL, "phone" character varying NOT NULL, "country" character varying(50) NOT NULL, "address" character varying NOT NULL, "city" character varying(50) NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" character varying NOT NULL DEFAULT '7/6/2024', "total" numeric(10,2) NOT NULL DEFAULT '0', "user_id" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" numeric(10,2) NOT NULL, "order_id" uuid, CONSTRAINT "PK_278a6e0f21c9db1653e6f406801" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "description" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "stock" integer NOT NULL, "imgUrl" character varying NOT NULL DEFAULT 'default.jpg', "categoryId" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order_detail_product" ("order_detail_id" uuid NOT NULL, "product_id" uuid NOT NULL, CONSTRAINT "PK_68178f6b2978bc96ae36e89a5cc" PRIMARY KEY ("order_detail_id", "product_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c4d70c9c6ca89ab7ebd71f4d50" ON "order_detail_product" ("order_detail_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_929c82733f69d67dca6cedd085" ON "order_detail_product" ("product_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "order_detail" ("product_id" uuid NOT NULL, "order_id" uuid NOT NULL, CONSTRAINT "PK_0549c58327951c9f9a82ae6197e" PRIMARY KEY ("product_id", "order_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_985d5f728e1eebe4a3eabc43aa" ON "order_detail" ("product_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a6ac5c99b8c02bd4ee53d3785b" ON "order_detail" ("order_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_a922b820eeef29ac1c6800e826a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_details" ADD CONSTRAINT "FK_3ff3367344edec5de2355a562ee" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail_product" ADD CONSTRAINT "FK_c4d70c9c6ca89ab7ebd71f4d503" FOREIGN KEY ("order_detail_id") REFERENCES "order_details"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail_product" ADD CONSTRAINT "FK_929c82733f69d67dca6cedd0858" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail" ADD CONSTRAINT "FK_985d5f728e1eebe4a3eabc43aac" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail" ADD CONSTRAINT "FK_a6ac5c99b8c02bd4ee53d3785be" FOREIGN KEY ("order_id") REFERENCES "order_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order_detail" DROP CONSTRAINT "FK_a6ac5c99b8c02bd4ee53d3785be"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail" DROP CONSTRAINT "FK_985d5f728e1eebe4a3eabc43aac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail_product" DROP CONSTRAINT "FK_929c82733f69d67dca6cedd0858"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail_product" DROP CONSTRAINT "FK_c4d70c9c6ca89ab7ebd71f4d503"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_details" DROP CONSTRAINT "FK_3ff3367344edec5de2355a562ee"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_a922b820eeef29ac1c6800e826a"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a6ac5c99b8c02bd4ee53d3785b"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_985d5f728e1eebe4a3eabc43aa"`,
    );
    await queryRunner.query(`DROP TABLE "order_detail"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_929c82733f69d67dca6cedd085"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c4d70c9c6ca89ab7ebd71f4d50"`,
    );
    await queryRunner.query(`DROP TABLE "order_detail_product"`);
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "order_details"`);
    await queryRunner.query(`DROP TABLE "orders"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "categories"`);
  }
}
