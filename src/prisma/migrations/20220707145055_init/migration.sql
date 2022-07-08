-- AlterTable
ALTER TABLE `Movie` ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `status` VARCHAR(191) NULL DEFAULT 'active';
