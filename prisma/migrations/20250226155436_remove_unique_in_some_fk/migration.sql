/*
  Warnings:

  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Assignment_classId_key";

-- DropIndex
DROP INDEX "Assignment_ownerId_key";

-- DropIndex
DROP INDEX "AssignmentQuestion_assignmentId_key";

-- DropIndex
DROP INDEX "AssignmentQuestionChoice_assignmentQuestionId_key";

-- DropIndex
DROP INDEX "Class_subjectId_key";

-- DropIndex
DROP INDEX "PermissionRuleset_ruleId_key";

-- DropIndex
DROP INDEX "PermissionRuleset_rulesetId_key";

-- DropIndex
DROP INDEX "PolicyClient_clientId_key";

-- DropIndex
DROP INDEX "PolicyClient_policyId_key";

-- DropIndex
DROP INDEX "PolicyGroup_groupId_key";

-- DropIndex
DROP INDEX "PolicyGroup_policyId_key";

-- DropIndex
DROP INDEX "PolicyResource_policyId_key";

-- DropIndex
DROP INDEX "PolicyResource_resourceId_key";

-- DropIndex
DROP INDEX "PolicyRuleset_policyId_key";

-- DropIndex
DROP INDEX "PolicyRuleset_rulesetId_key";

-- DropIndex
DROP INDEX "PolicyUser_policyId_key";

-- DropIndex
DROP INDEX "PolicyUser_userId_key";

-- DropIndex
DROP INDEX "Post_classId_key";

-- DropIndex
DROP INDEX "Post_ownerId_key";

-- DropIndex
DROP INDEX "Question_ownerId_key";

-- DropIndex
DROP INDEX "Question_questionBankId_key";

-- DropIndex
DROP INDEX "QuestionBank_ownerId_key";

-- DropIndex
DROP INDEX "QuestionBank_subjectId_key";

-- DropIndex
DROP INDEX "QuestionChoice_questionId_key";

-- DropIndex
DROP INDEX "Task_assignmentId_key";

-- DropIndex
DROP INDEX "Task_userId_key";

-- DropIndex
DROP INDEX "UserClass_classId_key";

-- DropIndex
DROP INDEX "UserClass_userId_key";

-- DropIndex
DROP INDEX "UserGroup_groupId_key";

-- DropIndex
DROP INDEX "UserGroup_userId_key";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "content" TEXT NOT NULL;
