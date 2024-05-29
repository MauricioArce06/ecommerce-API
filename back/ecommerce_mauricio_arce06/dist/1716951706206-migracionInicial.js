"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigracionInicial1716951706206 = void 0;
class MigracionInicial1716951706206 {
    constructor() {
        this.name = 'MigracionInicial1716951706206';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "date" SET DEFAULT '29/5/2024'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "date" SET DEFAULT '28/5/2024'`);
    }
}
exports.MigracionInicial1716951706206 = MigracionInicial1716951706206;
//# sourceMappingURL=1716951706206-migracionInicial.js.map