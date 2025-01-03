/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Article` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    MODIFY `content` TEXT NOT NULL;
