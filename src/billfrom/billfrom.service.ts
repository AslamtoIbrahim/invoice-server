import { Injectable } from '@nestjs/common';
import { CreateBillfromDto } from './dto/create-billfrom.dto.js';
import { UpdateBillfromDto } from './dto/update-billfrom.dto.js';
import { PrismaService } from 'src/prisma/prisma.service.js';

@Injectable()
export class BillfromService {
  constructor(private prisma: PrismaService) {}

  async create(createBillfromDto: CreateBillfromDto) {
    try {
      const bill = await this.prisma.billFrom.create();
    } catch (error) {
      return { message: 'Failed to create a billfrom', error };
    }
  }

  async findAll() {
    return `This action returns all billfrom`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} billfrom`;
  }

  async update(id: number, updateBillfromDto: UpdateBillfromDto) {
    return `This action updates a #${id} billfrom`;
  }

  async remove(id: number) {
    return `This action removes a #${id} billfrom`;
  }
}
