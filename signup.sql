CREATE EXTENSION citext;
CREATE TABLE "user" (
  "id" SERIAL UNIQUE PRIMARY KEY NOT NULL,
  "username" varchar NOT NULL,
  "email" CITEXT UNIQUE NOT NULL,
  "password" varchar NOT NULL
);