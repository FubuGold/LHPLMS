/*
  Warnings:

  - A unique constraint covering the columns `[ownerId]` on the table `Assignment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classId]` on the table `Assignment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assignmentId]` on the table `AssignmentQuestion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assignmentQuestionId]` on the table `AssignmentQuestionChoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subjectId]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rulesetId]` on the table `PermissionRuleset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ruleId]` on the table `PermissionRuleset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[policyId]` on the table `PolicyClient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clientId]` on the table `PolicyClient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[policyId]` on the table `PolicyGroup` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[groupId]` on the table `PolicyGroup` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[policyId]` on the table `PolicyResource` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[resourceId]` on the table `PolicyResource` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[policyId]` on the table `PolicyRuleset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rulesetId]` on the table `PolicyRuleset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[policyId]` on the table `PolicyUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `PolicyUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[questionBankId]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subjectId]` on the table `QuestionBank` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId]` on the table `QuestionBank` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[questionId]` on the table `QuestionChoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Setting` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assignmentId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserClass` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classId]` on the table `UserClass` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserCredential` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserGroup` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[groupId]` on the table `UserGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Assignment_ownerId_key" ON "Assignment"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Assignment_classId_key" ON "Assignment"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "AssignmentQuestion_assignmentId_key" ON "AssignmentQuestion"("assignmentId");

-- CreateIndex
CREATE UNIQUE INDEX "AssignmentQuestionChoice_assignmentQuestionId_key" ON "AssignmentQuestionChoice"("assignmentQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "Class_subjectId_key" ON "Class"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "PermissionRuleset_rulesetId_key" ON "PermissionRuleset"("rulesetId");

-- CreateIndex
CREATE UNIQUE INDEX "PermissionRuleset_ruleId_key" ON "PermissionRuleset"("ruleId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyClient_policyId_key" ON "PolicyClient"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyClient_clientId_key" ON "PolicyClient"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyGroup_policyId_key" ON "PolicyGroup"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyGroup_groupId_key" ON "PolicyGroup"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyResource_policyId_key" ON "PolicyResource"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyResource_resourceId_key" ON "PolicyResource"("resourceId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyRuleset_policyId_key" ON "PolicyRuleset"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyRuleset_rulesetId_key" ON "PolicyRuleset"("rulesetId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyUser_policyId_key" ON "PolicyUser"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyUser_userId_key" ON "PolicyUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_classId_key" ON "Post"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_ownerId_key" ON "Post"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_questionBankId_key" ON "Question"("questionBankId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_ownerId_key" ON "Question"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionBank_subjectId_key" ON "QuestionBank"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionBank_ownerId_key" ON "QuestionBank"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionChoice_questionId_key" ON "QuestionChoice"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "Setting_userId_key" ON "Setting"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_userId_key" ON "Task"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_assignmentId_key" ON "Task"("assignmentId");

-- CreateIndex
CREATE UNIQUE INDEX "UserClass_userId_key" ON "UserClass"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserClass_classId_key" ON "UserClass"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCredential_userId_key" ON "UserCredential"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserGroup_userId_key" ON "UserGroup"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserGroup_groupId_key" ON "UserGroup"("groupId");
