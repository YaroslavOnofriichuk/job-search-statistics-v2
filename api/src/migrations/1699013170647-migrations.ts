import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1699013170647 implements MigrationInterface {
    name = 'Migrations1699013170647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP COLUMN "noterId"`);
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e"`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ALTER COLUMN "noteId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e" FOREIGN KEY ("noteId") REFERENCES "note"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e"`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ALTER COLUMN "noteId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e" FOREIGN KEY ("noteId") REFERENCES "note"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD "noterId" integer NOT NULL`);
    }

}
