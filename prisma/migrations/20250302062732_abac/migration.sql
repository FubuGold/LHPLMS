/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `ClassPost` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `QuestionBank` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `Resource` table. All the data in the column will be lost.
  - You are about to drop the column `environment` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PolicyClient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "ClassPost" DROP CONSTRAINT "ClassPost_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "PolicyClient" DROP CONSTRAINT "PolicyClient_clientId_fkey";

-- DropForeignKey
ALTER TABLE "PolicyClient" DROP CONSTRAINT "PolicyClient_policyId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "QuestionBank" DROP CONSTRAINT "QuestionBank_ownerId_fkey";

-- DropIndex
DROP INDEX "ClassPost_classId_ownerId_idx";

-- DropIndex
DROP INDEX "Rule_environment_subject_idx";

-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "ownerId";

-- AlterTable
ALTER TABLE "ClassPost" DROP COLUMN "ownerId";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "ownerId";

-- AlterTable
ALTER TABLE "QuestionBank" DROP COLUMN "ownerId";

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "path",
ADD COLUMN     "ownerId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Rule" DROP COLUMN "environment",
DROP COLUMN "subject";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "PolicyClient";

-- CreateIndex
CREATE INDEX "ClassPost_classId_idx" ON "ClassPost"("classId");

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
