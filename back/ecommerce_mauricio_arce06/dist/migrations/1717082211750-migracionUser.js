"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigracionUser1717082211750 = void 0;
class MigracionUser1717082211750 {
    constructor() {
        this.name = 'MigracionUser1717082211750';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(60) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(20) NOT NULL`);
    }
}
exports.MigracionUser1717082211750 = MigracionUser1717082211750;
//# sourceMappingURL=1717082211750-migracionUser.js.map