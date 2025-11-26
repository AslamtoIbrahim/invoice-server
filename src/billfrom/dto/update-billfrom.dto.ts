import { PartialType } from '@nestjs/mapped-types';
import { CreateBillfromDto } from './create-billfrom.dto';

export class UpdateBillfromDto extends PartialType(CreateBillfromDto) {}
