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
import { Products } from "./products.entity";
import { ProductsService } from "./products.service";
import { GetAllProductsDTO } from "./dtos/get-all-products.dto";
import { UpdateProductDTO } from "./dtos/update-product.dto";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query() query: GetAllProductsDTO): Promise<Products[]> {
    return this.productsService.getAllProducts(query);
  }

  @Get(":id")
  async getProductById(@Param("id") id: string): Promise<Products> {
    const product = await this.productsService.getProductById(parseInt(id));
    if (!product) throw new NotFoundException("Product not found");

    return product;
  }

  @Post("create")
  async createProduct(@Body() body: CreateProductDTO): Promise<Products> {
    const product = await this.productsService.createProduct(body);

    return product;
  }

  @Patch(":id")
  updateProduct(
    @Param("id") id: string,
    @Body() body: UpdateProductDTO
  ): Promise<Products> {
    return this.productsService.updateProduct(parseInt(id), body);
  }

  @Delete(":id")
  deleteProduct(@Param("id") id: string): Promise<Products> {
    return this.productsService.deleteProduct(parseInt(id));
  }
}
