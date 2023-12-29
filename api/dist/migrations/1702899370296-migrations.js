"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1702899370296 = void 0;
class Migrations1702899370296 {
    constructor() {
        this.name = 'Migrations1702899370296';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD "description" text`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP COLUMN "description"`);
    }
}
exports.Migrations1702899370296 = Migrations1702899370296;
//# sourceMappingURL=1702899370296-migrations.js.map