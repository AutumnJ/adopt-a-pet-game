BEGIN TRANSACTION;
CREATE TABLE "schema_migrations" ("version" varchar NOT NULL PRIMARY KEY);
INSERT INTO "schema_migrations" VALUES('20180415023854');
INSERT INTO "schema_migrations" VALUES('20180415023933');
CREATE TABLE "ar_internal_metadata" ("key" varchar NOT NULL PRIMARY KEY, "value" varchar, "created_at" timestamp NOT NULL, "updated_at" timestamp NOT NULL);
INSERT INTO "ar_internal_metadata" VALUES('environment','development','2018-04-15 02:45:53.634851','2018-04-15 02:45:53.634851');
CREATE TABLE "cats" ("id" SERIAL PRIMARY KEY NOT NULL, "name" varchar, "age" varchar, "size" varchar, "sex" varchar, "breed" varchar, "contact_phone" varchar, "contact_email" varchar, "contact_city" varchar, "photo" varchar, "user_id" integer, "description" text, "created_at" timestamp NOT NULL, "updated_at" timestamp NOT NULL);
CREATE TABLE "dogs" ("id" SERIAL PRIMARY KEY NOT NULL, "name" varchar, "age" varchar, "size" varchar, "sex" varchar, "breed" varchar, "contact_phone" varchar, "contact_email" varchar, "contact_city" varchar, "photo" varchar, "user_id" integer, "description" text, "created_at" timestamp NOT NULL, "updated_at" timestamp NOT NULL);
COMMIT;
