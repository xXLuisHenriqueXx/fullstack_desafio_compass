import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class UpdateProductDTO {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sku: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  size: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  age: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  color: string[];

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  vaccinated: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  dewormed: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  certified: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  microchip: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  addInfo: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  gift: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  category: string;
}
