import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { type UserSession } from '@thallesp/nestjs-better-auth';
import { Session } from '@thallesp/nestjs-better-auth';

import { CreateInvoiceDto } from './dto/create-invoice.dto.js';
import { UpdateInvoiceDto } from './dto/update-invoice.dto.js';
import { InvoiceService } from './invoice.service.js';
import { type Status } from './types/invoice.types.js';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(
    @Body() createInvoiceDto: CreateInvoiceDto,
    @Session() session: UserSession,
  ) {
    return this.invoiceService.create(createInvoiceDto, session.user.id);
  }

  @Get()
  findAll(
    @Session() session: UserSession,
    @Query('cursor') cursor: string,
    @Query('limit') limit: string,
    @Query('status') status: Status,
  ) {
    return this.invoiceService.findAll(session.user.id, cursor, limit, status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceService.update(id, updateInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(id);
  }
}
