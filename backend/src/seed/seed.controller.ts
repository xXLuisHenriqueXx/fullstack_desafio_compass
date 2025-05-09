import { Controller, Inject, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { petsData } from "../data/pets";
import { productsData } from "../data/products";
import { ProductsService } from "../products/products.service";

@Controller("seed")
export class SeedController {
  constructor(
    @Inject(ProductsService) private readonly productsService: ProductsService
  ) {}

  @Post("pets")
  @ApiOperation({
    summary: "Seed the database with pets informations",
  })
  @ApiResponse({
    status: 201,
    description: "No returns",
  })
  async seedPets(): Promise<void> {
    await this.productsService.createManyProducts(petsData as any);
  }

  @Post("products")
  @ApiOperation({
    summary: "Seed the database with products informations",
  })
  @ApiResponse({
    status: 201,
    description: "No returns",
  })
  async seedProducts(): Promise<void> {
    await this.productsService.createManyProducts(productsData as any);
  }
}
