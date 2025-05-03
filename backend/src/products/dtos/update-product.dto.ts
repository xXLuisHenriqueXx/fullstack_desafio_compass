import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class UpdateProductDTO {
  @IsOptional()
  @IsNumber()
  sku: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  @IsString()
  age: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  color: string[];

  @IsOptional()
  @IsBoolean()
  vaccinated: boolean;

  @IsOptional()
  @IsBoolean()
  dewormed: boolean;

  @IsOptional()
  @IsString()
  certified: string;

  @IsOptional()
  @IsBoolean()
  microchip: boolean;

  @IsOptional()
  @IsString()
  location: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  addInfo: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsOptional()
  @IsString()
  gift: string;
}
