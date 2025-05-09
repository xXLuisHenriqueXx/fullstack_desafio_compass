import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Products } from "./products.entity";

import { CreateProductDTO } from "./dtos/create-product.dto";
import { GetAllProductsDTO } from "./dtos/get-all-products.dto";
import { GetAllProductsResponseDTO } from "./dtos/get-all-products-response.dto";
import { ProductsDTO } from "./dtos/products.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>
  ) {}

  async getAllProducts({
    limit,
    offset,
    type,
    gender,
    color,
    minPrice,
    maxPrice,
    size,
  }: GetAllProductsDTO): Promise<GetAllProductsResponseDTO> {
    const query = this.productsRepository.createQueryBuilder("products");

    if (type) query.andWhere("products.type = :type", { type });

    if (gender && gender.length > 0)
      query.andWhere("products.gender IN (:...gender)", { gender });

    if (color && color.length > 0)
      query.andWhere("products.color && :color", { color });

    if (size && size.length > 0)
      query.andWhere("products.size IN (:...size)", { size });

    if (minPrice !== undefined)
      query.andWhere("products.price >= :minPrice", { minPrice });

    if (maxPrice !== undefined)
      query.andWhere("products.price <= :maxPrice", { maxPrice });

    if (limit !== undefined) query.take(limit);

    if (offset !== undefined) query.skip(offset);

    const [items, total] = await query.getManyAndCount();

    return { items, total };
  }

  getProductById(id: number): Promise<ProductsDTO | null> {
    return this.productsRepository.findOneBy({ id });
  }

  createProduct(createProductDTO: CreateProductDTO): Promise<ProductsDTO> {
    const product = this.productsRepository.create(createProductDTO);

    return this.productsRepository.save(product);
  }

  createManyProducts(
    createProductDTOs: CreateProductDTO[]
  ): Promise<ProductsDTO[]> {
    const products = this.productsRepository.create(createProductDTOs);

    return this.productsRepository.save(products);
  }

  async updateProduct(
    id: number,
    attrs: Partial<Products>
  ): Promise<ProductsDTO> {
    const product = await this.getProductById(id);
    if (!product) throw new NotFoundException("Product not found");

    Object.assign(product, attrs);

    return this.productsRepository.save(product);
  }

  async deleteProduct(id: number): Promise<ProductsDTO> {
    const product = await this.getProductById(id);
    if (!product) throw new NotFoundException("Product not found");

    return this.productsRepository.remove(product);
  }
}
