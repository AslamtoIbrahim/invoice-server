import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BillfromService } from './billfrom.service.js';
import { CreateBillfromDto } from './dto/create-billfrom.dto.js';
import { UpdateBillfromDto } from './dto/update-billfrom.dto.js';

@Controller('billfrom')
export class BillfromController {
  constructor(private readonly billfromService: BillfromService) {}

  @Post()
  create(@Body() createBillfromDto: CreateBillfromDto) {
    return this.billfromService.create(createBillfromDto);
  }

  @Get()
  findAll() {
    return this.billfromService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billfromService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBillfromDto: UpdateBillfromDto,
  ) {
    return this.billfromService.update(+id, updateBillfromDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billfromService.remove(+id);
  }
}
