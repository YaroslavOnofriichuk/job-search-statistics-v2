import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702899370296 implements MigrationInterface {
    name = 'Migrations1702899370296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP COLUMN "description"`);
    }

}
