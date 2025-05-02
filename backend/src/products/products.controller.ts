import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDTO } from './dtos/create-product.dto';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post('create')
  async createProduct(@Body() body: CreateProductDTO): Promise<Products> {
    const product = await this.productsService.createProduct(body);

    return product;
  }
}
