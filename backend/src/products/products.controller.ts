import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

import { CreateProductDTO } from "./dtos/create-product.dto";
import { ProductsService } from "./products.service";
import { GetAllProductsDTO } from "./dtos/get-all-products.dto";
import { UpdateProductDTO } from "./dtos/update-product.dto";
import { ProductsDTO } from "./dtos/products.dto";
import { GetAllProductsResponseDTO } from "./dtos/get-all-products-response.dto";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({
    summary: "Return all products with query params from a DTO",
  })
  @ApiResponse({
    status: 200,
    description: "Return a products array and total count",
    type: GetAllProductsResponseDTO,
  })
  getAllProducts(
    @Query() query: GetAllProductsDTO
  ): Promise<GetAllProductsResponseDTO> {
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
  async getProductById(
    @Param("id", ParseIntPipe) id: number
  ): Promise<ProductsDTO> {
    const product = await this.productsService.getProductById(id);
    if (!product) throw new NotFoundException("Product not found");

    return product;
  }

  @Post()
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

  @Post("bulk")
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
    @Param("id", ParseIntPipe) id: number,
    @Body() body: UpdateProductDTO
  ): Promise<ProductsDTO> {
    return this.productsService.updateProduct(id, body);
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
  deleteProduct(@Param("id", ParseIntPipe) id: number): Promise<ProductsDTO> {
    return this.productsService.deleteProduct(id);
  }
}
