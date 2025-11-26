import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice.dto.js';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}
