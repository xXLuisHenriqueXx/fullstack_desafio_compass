import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateContactDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  fullname: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  phone: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  state: string;
}
