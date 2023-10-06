/*
  Warnings:

  - Made the column `authorId` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `articleId` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_articleId_fkey`;

-- AlterTable
ALTER TABLE `Article` MODIFY `authorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Comment` MODIFY `articleId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `bio` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
