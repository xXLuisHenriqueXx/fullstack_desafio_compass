import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { ProductType } from "../../common/enum/ProductType.enum";

export class ProductsDTO {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNumber()
  sku: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gender: string;

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
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  gift: string;

  @ApiProperty({ enum: ProductType, enumName: "ProductType" })
  @IsEnum(ProductType)
  type: string;
}
