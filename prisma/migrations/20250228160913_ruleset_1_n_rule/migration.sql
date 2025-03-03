/*
  Warnings:

  - You are about to drop the `RuleRuleset` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rulesetId` to the `Rule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RuleRuleset" DROP CONSTRAINT "RuleRuleset_ruleId_fkey";

-- DropForeignKey
ALTER TABLE "RuleRuleset" DROP CONSTRAINT "RuleRuleset_rulesetId_fkey";

-- AlterTable
ALTER TABLE "Rule" ADD COLUMN     "rulesetId" UUID NOT NULL;

-- DropTable
DROP TABLE "RuleRuleset";

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_rulesetId_fkey" FOREIGN KEY ("rulesetId") REFERENCES "Ruleset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
