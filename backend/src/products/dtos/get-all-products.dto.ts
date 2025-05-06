import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { ProductType } from "../../common/enum/ProductType.enum";

export class GetAllProductsDTO {
  @ApiProperty()
  @Transform(({ value }) => (value !== undefined ? parseInt(value) : undefined))
  @IsOptional()
  @IsNumber()
  limit?: number;

  @ApiProperty()
  @Transform(({ value }) => (value !== undefined ? parseInt(value) : undefined))
  @IsOptional()
  @IsNumber()
  offset?: number;

  @ApiProperty()
  @IsOptional()
  @IsEnum(ProductType)
  type?: ProductType;

  @ApiProperty()
  @Transform(({ value }) =>
    Array.isArray(value)
      ? value
      : value !== undefined
        ? value.split(",")
        : undefined
  )
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  gender: string[];

  @ApiProperty()
  @Transform(({ value }) =>
    Array.isArray(value)
      ? value
      : value !== undefined
        ? value.split(",")
        : undefined
  )
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  color: string[];

  @ApiProperty()
  @Transform(({ value }) =>
    value !== undefined ? parseFloat(value) : undefined
  )
  @IsOptional()
  @IsNumber()
  minPrice?: number;

  @ApiProperty()
  @Transform(({ value }) =>
    value !== undefined ? parseFloat(value) : undefined
  )
  @IsOptional()
  @IsNumber()
  maxPrice?: number;

  @ApiProperty()
  @Transform(({ value }) =>
    Array.isArray(value)
      ? value
      : value !== undefined
        ? value.split(",")
        : undefined
  )
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  size: string[];
}
