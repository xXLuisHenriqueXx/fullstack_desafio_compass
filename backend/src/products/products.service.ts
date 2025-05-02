import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  createProduct(createProductDTO: CreateProductDTO): Promise<Products> {
    const product = this.productsRepository.create(createProductDTO);

    return this.productsRepository.save(product);
  }
}
