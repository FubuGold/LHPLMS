/*
  Warnings:

  - You are about to drop the column `resource` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Setting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_classId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Setting" DROP CONSTRAINT "Setting_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assignmentId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- DropIndex
DROP INDEX "Rule_resource_environment_subject_idx";

-- DropIndex
DROP INDEX "UserCredential_userId_idx";

-- AlterTable
ALTER TABLE "Rule" DROP COLUMN "resource";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Setting";

-- DropTable
DROP TABLE "Task";

-- CreateTable
CREATE TABLE "ResourcePost" (
    "resourceId" UUID NOT NULL,
    "postId" UUID NOT NULL,

    CONSTRAINT "ResourcePost_pkey" PRIMARY KEY ("resourceId","postId")
);

-- CreateTable
CREATE TABLE "ResourceClass" (
    "resourceId" UUID NOT NULL,
    "classId" UUID NOT NULL,

    CONSTRAINT "ResourceClass_pkey" PRIMARY KEY ("resourceId","classId")
);

-- CreateTable
CREATE TABLE "ResourceAssignment" (
    "resourceId" UUID NOT NULL,
    "assignmentId" UUID NOT NULL,

    CONSTRAINT "ResourceAssignment_pkey" PRIMARY KEY ("resourceId","assignmentId")
);

-- CreateTable
CREATE TABLE "ResourceQuestionBank" (
    "resourceId" UUID NOT NULL,
    "questionBankId" UUID NOT NULL,

    CONSTRAINT "ResourceQuestionBank_pkey" PRIMARY KEY ("resourceId","questionBankId")
);

-- CreateTable
CREATE TABLE "UserSetting" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTask" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "assignmentId" UUID NOT NULL,

    CONSTRAINT "UserTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassPost" (
    "id" UUID NOT NULL,
    "classId" UUID NOT NULL,
    "ownerId" UUID NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "ClassPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSetting_userId_key" ON "UserSetting"("userId");

-- CreateIndex
CREATE INDEX "UserTask_assignmentId_idx" ON "UserTask"("assignmentId");

-- CreateIndex
CREATE INDEX "ClassPost_classId_ownerId_idx" ON "ClassPost"("classId", "ownerId");

-- CreateIndex
CREATE INDEX "Rule_environment_subject_idx" ON "Rule" USING GIN ("environment", "subject");

-- AddForeignKey
ALTER TABLE "ResourcePost" ADD CONSTRAINT "ResourcePost_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourcePost" ADD CONSTRAINT "ResourcePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "ClassPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceClass" ADD CONSTRAINT "ResourceClass_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceClass" ADD CONSTRAINT "ResourceClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAssignment" ADD CONSTRAINT "ResourceAssignment_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAssignment" ADD CONSTRAINT "ResourceAssignment_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceQuestionBank" ADD CONSTRAINT "ResourceQuestionBank_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceQuestionBank" ADD CONSTRAINT "ResourceQuestionBank_questionBankId_fkey" FOREIGN KEY ("questionBankId") REFERENCES "QuestionBank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSetting" ADD CONSTRAINT "UserSetting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTask" ADD CONSTRAINT "UserTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTask" ADD CONSTRAINT "UserTask_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassPost" ADD CONSTRAINT "ClassPost_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassPost" ADD CONSTRAINT "ClassPost_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
