"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1699013170647 = void 0;
class Migrations1699013170647 {
    constructor() {
        this.name = 'Migrations1699013170647';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP COLUMN "noterId"`);
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e"`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ALTER COLUMN "noteId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e" FOREIGN KEY ("noteId") REFERENCES "note"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e"`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ALTER COLUMN "noteId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e" FOREIGN KEY ("noteId") REFERENCES "note"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD "noterId" integer NOT NULL`);
    }
}
exports.Migrations1699013170647 = Migrations1699013170647;
//# sourceMappingURL=1699013170647-migrations.js.map