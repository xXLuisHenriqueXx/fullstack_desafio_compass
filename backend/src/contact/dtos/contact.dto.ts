import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class ContactDTO {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  fullname: string;

  @ApiProperty()
  @IsNumber()
  phone: number;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsDate()
  createdDate: Date;
}
