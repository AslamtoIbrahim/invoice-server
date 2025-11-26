import { IsString } from 'class-validator';

export class CreateBillfromDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  street: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  city: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  postCode: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  country: string;
}
