import { Transform } from "class-transformer";
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { ProdcutType } from "src/common/enum/ProductType.enum";

export class GetAllProductsDTO {
  @Transform(({ value }) => (value !== undefined ? parseInt(value) : undefined))
  @IsOptional()
  @IsNumber()
  limit: number;

  @Transform(({ value }) => (value !== undefined ? parseInt(value) : undefined))
  @IsOptional()
  @IsNumber()
  offset: number;

  @IsOptional()
  @IsEnum(ProdcutType)
  type: ProdcutType;

  @Transform(({ value }) =>
    value !== undefined ? value.split(",") : undefined
  )
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  gender: string[];

  @Transform(({ value }) =>
    value !== undefined ? value.split(",") : undefined
  )
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  color: string[];

  @Transform(({ value }) =>
    value !== undefined ? parseFloat(value) : undefined
  )
  @IsOptional()
  @IsNumber()
  minPrice: number;

  @Transform(({ value }) =>
    value !== undefined ? parseFloat(value) : undefined
  )
  @IsOptional()
  @IsNumber()
  maxPrice: number;

  @Transform(({ value }) =>
    value !== undefined ? value.split(",") : undefined
  )
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  breed: string[];
}
