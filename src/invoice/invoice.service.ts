import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
import { UpdateInvoiceDto } from './dto/update-invoice.dto.js';
import { Status } from './types/invoice.types.js';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto, userId: string) {
    try {
      if (!userId) {
        throw Error('user id is required to create an invoice');
      }
      const invoice = await this.prisma.invoice.create({
        data: {
          userId,
          billFrom: createInvoiceDto.billFrom,
          billTo: createInvoiceDto.billTo,
          items: createInvoiceDto.items,
          code: createInvoiceDto.code,
          date: createInvoiceDto.date,
          paymentTerm: createInvoiceDto.paymentTerm,
          status: createInvoiceDto.status,
          description: createInvoiceDto.description,
        },
      });
      return invoice;
    } catch (error: unknown) {
      return { message: 'Faild to create invoice', error };
    }
  }

  async findAll(userId: string, cursor: string, limit: string, status: Status) {
    try {
      if (!userId) {
        throw Error('user id is required to create an invoice');
      }
      const total = await this.prisma.invoice.count()
      const take = parseInt(limit) || 6;
      const invoices = await this.prisma.invoice.findMany({
        take,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        where: { userId, status: status ? status : undefined },
      });

      const nextCursor = invoices[invoices.length - 1]?.id ?? null;
      return { nextCursor, invoices, total };
    } catch (error: unknown) {
      return { message: 'Faild to get all invoices', error };
    }
  }

  async findOne(id: string) {
    try {
      if (!id) {
        throw Error('invoice id is required to create an invoice');
      }
      const invoice = await this.prisma.invoice.findFirst({
        where: { id },
      });

      return invoice;
    } catch (error: unknown) {
      return { message: 'Faild to get all invoices', error };
    }
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    try {
      if (!id) {
        throw Error('invoice id is required to update the invoice');
      }
      const invoice = await this.prisma.invoice.update({
        where: { id },
        data: updateInvoiceDto,
      });
      return invoice;
    } catch (error: unknown) {
      return { message: 'Faild to update invoice', error };
    }
  }

  async remove(id: string) {
    try {
      if (!id) {
        throw Error('invoice id is required to update the invoice');
      }
      const invoice = await this.prisma.invoice.delete({
        where: { id },
      });
      return invoice;
    } catch (error: unknown) {
      return { message: 'Faild to delete invoice', error };
    }
  }
}
