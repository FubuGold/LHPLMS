/*
  Warnings:

  - You are about to drop the `ResourceAssignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResourceClass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResourcePost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResourceQuestionBank` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `resourceId` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resourceId` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resourceId` to the `ClassPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resourceId` to the `QuestionBank` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ResourceAssignment" DROP CONSTRAINT "ResourceAssignment_assignmentId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceAssignment" DROP CONSTRAINT "ResourceAssignment_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceClass" DROP CONSTRAINT "ResourceClass_classId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceClass" DROP CONSTRAINT "ResourceClass_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "ResourcePost" DROP CONSTRAINT "ResourcePost_postId_fkey";

-- DropForeignKey
ALTER TABLE "ResourcePost" DROP CONSTRAINT "ResourcePost_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceQuestionBank" DROP CONSTRAINT "ResourceQuestionBank_questionBankId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceQuestionBank" DROP CONSTRAINT "ResourceQuestionBank_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "Rule" DROP CONSTRAINT "Rule_rulesetId_fkey";

-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN     "resourceId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "resourceId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "ClassPost" ADD COLUMN     "resourceId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "QuestionBank" ADD COLUMN     "resourceId" UUID NOT NULL;

-- DropTable
DROP TABLE "ResourceAssignment";

-- DropTable
DROP TABLE "ResourceClass";

-- DropTable
DROP TABLE "ResourcePost";

-- DropTable
DROP TABLE "ResourceQuestionBank";

-- CreateTable
CREATE TABLE "UserSubmission" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "assignmentId" UUID NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "submissionTime" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "UserSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSubmissionAnswer" (
    "submissionId" UUID NOT NULL,
    "questionId" UUID NOT NULL,
    "questionChoiceId" UUID NOT NULL,

    CONSTRAINT "UserSubmissionAnswer_pkey" PRIMARY KEY ("submissionId")
);

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_rulesetId_fkey" FOREIGN KEY ("rulesetId") REFERENCES "Ruleset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubmissionAnswer" ADD CONSTRAINT "UserSubmissionAnswer_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "UserSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubmissionAnswer" ADD CONSTRAINT "UserSubmissionAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "AssignmentQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubmissionAnswer" ADD CONSTRAINT "UserSubmissionAnswer_questionChoiceId_fkey" FOREIGN KEY ("questionChoiceId") REFERENCES "AssignmentQuestionChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassPost" ADD CONSTRAINT "ClassPost_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionBank" ADD CONSTRAINT "QuestionBank_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
