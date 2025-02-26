/*
  Warnings:

  - Added the required column `salt` to the `UserCredential` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserCredential" ADD COLUMN     "salt" TEXT NOT NULL;
