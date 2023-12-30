import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1698922145683 implements MigrationInterface {
    name = 'Migrations1698922145683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "password" text NOT NULL, "email" character varying(128) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note_source" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "name" character varying(128) NOT NULL, CONSTRAINT "PK_671b51badb796d7de84ae06c420" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "tag" character varying(32) NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note_tag" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "noteId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_b827557cdc895fdc766b1633aa1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."note_status_enum" AS ENUM('ACCEPTED', 'REJECTED', 'CONSIDERED', 'SENT', 'TEST_TASK', 'INTERVIEW')`);
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "sourceId" integer NOT NULL, "position" character varying(128) NOT NULL, "company" character varying(128) NOT NULL, "link" character varying(256) NOT NULL, "description" text, "status" "public"."note_status_enum" NOT NULL DEFAULT 'SENT', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."note_status_history_status_enum" AS ENUM('ACCEPTED', 'REJECTED', 'CONSIDERED', 'SENT', 'TEST_TASK', 'INTERVIEW')`);
        await queryRunner.query(`CREATE TABLE "note_status_history" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "noterId" integer NOT NULL, "status" "public"."note_status_history_status_enum" NOT NULL DEFAULT 'SENT', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "noteId" integer, CONSTRAINT "PK_f7e0473da746e753570ce98b28f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "note_source" ADD CONSTRAINT "FK_a41ed790bc56b3e780d15317959" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tag" ADD CONSTRAINT "FK_d0dc39ff83e384b4a097f47d3f5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note_tag" ADD CONSTRAINT "FK_e107d8c7c5e2d53ddc5e6535dd3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note_tag" ADD CONSTRAINT "FK_ddfc0b18dcc060cb8899a249910" FOREIGN KEY ("noteId") REFERENCES "note"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note_tag" ADD CONSTRAINT "FK_0d23f466571ec62e5c103785f06" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_5b87d9d19127bd5d92026017a7b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_bdbc1959a55a59cebf3e8bce39d" FOREIGN KEY ("sourceId") REFERENCES "note_source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD CONSTRAINT "FK_6f4e6a52d680a0de5aa2e0f780e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note_status_history" ADD CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e" FOREIGN KEY ("noteId") REFERENCES "note"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP CONSTRAINT "FK_91f6881ab247e7cbed8360bc71e"`);
        await queryRunner.query(`ALTER TABLE "note_status_history" DROP CONSTRAINT "FK_6f4e6a52d680a0de5aa2e0f780e"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_bdbc1959a55a59cebf3e8bce39d"`);
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_5b87d9d19127bd5d92026017a7b"`);
        await queryRunner.query(`ALTER TABLE "note_tag" DROP CONSTRAINT "FK_0d23f466571ec62e5c103785f06"`);
        await queryRunner.query(`ALTER TABLE "note_tag" DROP CONSTRAINT "FK_ddfc0b18dcc060cb8899a249910"`);
        await queryRunner.query(`ALTER TABLE "note_tag" DROP CONSTRAINT "FK_e107d8c7c5e2d53ddc5e6535dd3"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP CONSTRAINT "FK_d0dc39ff83e384b4a097f47d3f5"`);
        await queryRunner.query(`ALTER TABLE "note_source" DROP CONSTRAINT "FK_a41ed790bc56b3e780d15317959"`);
        await queryRunner.query(`DROP TABLE "note_status_history"`);
        await queryRunner.query(`DROP TYPE "public"."note_status_history_status_enum"`);
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TYPE "public"."note_status_enum"`);
        await queryRunner.query(`DROP TABLE "note_tag"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "note_source"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
