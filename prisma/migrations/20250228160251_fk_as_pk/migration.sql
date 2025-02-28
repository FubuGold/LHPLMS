/*
  Warnings:

  - The primary key for the `UserCredential` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserCredential` table. All the data in the column will be lost.
  - The primary key for the `UserSetting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserSetting` table. All the data in the column will be lost.
  - The primary key for the `UserToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserToken` table. All the data in the column will be lost.
  - You are about to drop the `PermissionRuleset` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PermissionRuleset" DROP CONSTRAINT "PermissionRuleset_ruleId_fkey";

-- DropForeignKey
ALTER TABLE "PermissionRuleset" DROP CONSTRAINT "PermissionRuleset_rulesetId_fkey";

-- DropIndex
DROP INDEX "UserCredential_userId_key";

-- DropIndex
DROP INDEX "UserSetting_userId_key";

-- DropIndex
DROP INDEX "UserToken_userId_key";

-- AlterTable
ALTER TABLE "UserCredential" DROP CONSTRAINT "UserCredential_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserCredential_pkey" PRIMARY KEY ("userId");

-- AlterTable
ALTER TABLE "UserSetting" DROP CONSTRAINT "UserSetting_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("userId");

-- AlterTable
ALTER TABLE "UserToken" DROP CONSTRAINT "UserToken_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserToken_pkey" PRIMARY KEY ("userId");

-- DropTable
DROP TABLE "PermissionRuleset";

-- CreateTable
CREATE TABLE "RuleRuleset" (
    "rulesetId" UUID NOT NULL,
    "ruleId" UUID NOT NULL,

    CONSTRAINT "RuleRuleset_pkey" PRIMARY KEY ("ruleId","rulesetId")
);

-- AddForeignKey
ALTER TABLE "RuleRuleset" ADD CONSTRAINT "RuleRuleset_rulesetId_fkey" FOREIGN KEY ("rulesetId") REFERENCES "Ruleset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RuleRuleset" ADD CONSTRAINT "RuleRuleset_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
