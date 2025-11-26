/*
  Warnings:

  - You are about to drop the column `posCode` on the `BillFrom` table. All the data in the column will be lost.
  - You are about to drop the column `posCode` on the `BillTo` table. All the data in the column will be lost.
  - Added the required column `postCode` to the `BillFrom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postCode` to the `BillTo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BillFrom" DROP COLUMN "posCode",
ADD COLUMN     "postCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BillTo" DROP COLUMN "posCode",
ADD COLUMN     "postCode" TEXT NOT NULL;
