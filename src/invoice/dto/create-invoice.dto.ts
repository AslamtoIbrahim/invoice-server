import { BillFrom, BillTo, Item } from '../types/invoice.types.js';

export class CreateInvoiceDto {
  billFrom: BillFrom;
  billTo: BillTo;
  items: Item[];
  code: string;
  date: Date;
  paymentTerm: Date;
  status: 'DRAFT' | 'PAID' | 'PENDING';
  description: string;
}
