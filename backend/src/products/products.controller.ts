import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ProductsService } from "./products.service";
import { GetAllProductsDTO } from "./dtos/get-all-products.dto";
import { UpdateProductDTO } from "./dtos/update-product.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ProductsDTO } from "./dtos/products.dto";
import { petsData } from "../data/pets";
import { productsData } from "src/data/products";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({
    summary: "Return all products with query params from a DTO",
  })
  @ApiResponse({
    status: 200,
    description: "Return a products array",
    isArray: true,
    type: ProductsDTO,
  })
  getAllProducts(@Query() query: GetAllProductsDTO): Promise<ProductsDTO[]> {
    return this.productsService.getAllProducts(query);
  }

  @Get(":id")
  @ApiOperation({
    summary: "Return a product who has the provided id",
  })
  @ApiResponse({
    status: 200,
    description: "Return a product",
    type: ProductsDTO,
  })
  @ApiResponse({
    status: 404,
    description: "Product not found",
  })
  async getProductById(@Param("id") id: string): Promise<ProductsDTO> {
    const product = await this.productsService.getProductById(parseInt(id));
    if (!product) throw new NotFoundException("Product not found");

    return product;
  }

  @Post("create")
  @ApiOperation({
    summary: "Create a product",
  })
  @ApiResponse({
    status: 201,
    description: "Return the created product",
    type: ProductsDTO,
  })
  async createProduct(@Body() body: CreateProductDTO): Promise<ProductsDTO> {
    const product = await this.productsService.createProduct(body);

    return product;
  }

  @Post("create-many")
  @ApiOperation({
    summary: "Create multiple products",
  })
  @ApiResponse({
    status: 201,
    description: "Return the created products",
    type: ProductsDTO,
    isArray: true,
  })
  async createManyProducts(
    @Body() body: CreateProductDTO[]
  ): Promise<ProductsDTO[]> {
    const products = await this.productsService.createManyProducts(body);

    return products;
  }

  @Post("seed/pets")
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

  @Post("seed/products")
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

  @Patch(":id")
  @ApiOperation({
    summary: "Update the info from a product who has the provided id",
  })
  @ApiResponse({
    status: 200,
    description: "Return the updated product",
    type: ProductsDTO,
  })
  updateProduct(
    @Param("id") id: string,
    @Body() body: UpdateProductDTO
  ): Promise<ProductsDTO> {
    return this.productsService.updateProduct(parseInt(id), body);
  }

  @Delete(":id")
  @ApiOperation({
    summary: "Delete a product who has the provided id",
  })
  @ApiResponse({
    status: 200,
    description: "Return the deleted product",
    type: ProductsDTO,
  })
  deleteProduct(@Param("id") id: string): Promise<ProductsDTO> {
    return this.productsService.deleteProduct(parseInt(id));
  }
}
