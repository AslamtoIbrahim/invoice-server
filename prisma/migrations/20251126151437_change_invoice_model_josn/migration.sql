/*
  Warnings:

  - You are about to drop the column `billFromId` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `billToId` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the `BillFrom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BillTo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code,userId]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `billFrom` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billTo` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `items` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_billFromId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_billToId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_invoiceId_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "billFromId",
DROP COLUMN "billToId",
ADD COLUMN     "billFrom" JSONB NOT NULL,
ADD COLUMN     "billTo" JSONB NOT NULL,
ADD COLUMN     "items" JSONB NOT NULL;

-- DropTable
DROP TABLE "BillFrom";

-- DropTable
DROP TABLE "BillTo";

-- DropTable
DROP TABLE "Item";

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_code_userId_key" ON "Invoice"("code", "userId");
