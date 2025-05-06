import { ApiProperty } from "@nestjs/swagger";
import { ProductsDTO } from "./products.dto";
import { IsNumber } from "class-validator";

export class GetAllProductsResponseDTO {
  @ApiProperty({ type: [ProductsDTO] })
  items: ProductsDTO[];

  @ApiProperty()
  @IsNumber()
  total: number;
}
