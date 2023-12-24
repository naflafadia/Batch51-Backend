import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703431868454 implements MigrationInterface {
    name = 'MyMigration1703431868454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "province" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4f461cb46f57e806516b7073659" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "province"`);
    }

}
