import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./products.entity";
import { Repository } from "typeorm";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { GetAllProductsDTO } from "./dtos/get-all-products.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>
  ) {}

  getAllProducts({
    limit,
    offset,
    type,
    gender,
    color,
    minPrice,
    maxPrice,
    breed,
  }: GetAllProductsDTO): Promise<Products[]> {
    const query = this.productsRepository.createQueryBuilder("products");

    if (type) query.andWhere("products.type = :type", { type });

    if (gender) query.andWhere("products.gender = :gender", { gender });

    if (color && color.length > 0)
      query.andWhere("products.color && :color", { color });

    if (breed && breed.length > 0)
      query.andWhere("products.size && :size", { breed });

    if (minPrice !== undefined)
      query.andWhere("products.price >= :minPrice", { minPrice });

    if (maxPrice !== undefined)
      query.andWhere("products.price <= :maxPrice", { maxPrice });

    if (limit !== undefined) query.take(limit);

    if (offset !== undefined) query.skip(offset);

    return query.getMany();
  }

  getProductById(id: number): Promise<Products | null> {
    return this.productsRepository.findOneBy({ id });
  }

  createProduct(createProductDTO: CreateProductDTO): Promise<Products> {
    const product = this.productsRepository.create(createProductDTO);

    return this.productsRepository.save(product);
  }

  createManyProducts(
    createProductDTOs: CreateProductDTO[]
  ): Promise<Products[]> {
    const products = this.productsRepository.create(createProductDTOs);

    return this.productsRepository.save(products);
  }

  async updateProduct(id: number, attrs: Partial<Products>): Promise<Products> {
    const product = await this.getProductById(id);
    if (!product) throw new NotFoundException("Product not found");

    Object.assign(product, attrs);

    return this.productsRepository.save(product);
  }

  async deleteProduct(id: number): Promise<Products> {
    const product = await this.getProductById(id);
    if (!product) throw new NotFoundException("Product not found");

    return this.productsRepository.remove(product);
  }
}
