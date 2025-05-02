import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { Products } from "./products.entity";
import { ProductsService } from "./products.service";
import { GetAllProductsDTO } from "./dtos/get-all-products.dto";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post("create")
  async createProduct(@Body() body: CreateProductDTO): Promise<Products> {
    const product = await this.productsService.createProduct(body);

    return product;
  }

  @Get()
  async getAllProducts(@Query() query: GetAllProductsDTO): Promise<Products[]> {
    return this.productsService.getAllProducts(query);
  }

  @Get(":id")
  async getProductById(@Param("id") id: string): Promise<Products> {
    const product = await this.productsService.getProductById(parseInt(id));

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }
}
