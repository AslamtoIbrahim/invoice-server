-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PAID', 'PENDING');

-- CreateTable
CREATE TABLE "BillFrom" (
    "id" UUID NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "posCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "BillFrom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillTo" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "posCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "BillTo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "paymentTerm" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "billToId" UUID NOT NULL,
    "billFromId" UUID NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "invoiceId" UUID,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_billToId_fkey" FOREIGN KEY ("billToId") REFERENCES "BillTo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_billFromId_fkey" FOREIGN KEY ("billFromId") REFERENCES "BillFrom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
