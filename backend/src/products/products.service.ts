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

  createProduct(createProductDTO: CreateProductDTO): Promise<Products> {
    const product = this.productsRepository.create(createProductDTO);

    return this.productsRepository.save(product);
  }

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

    if (type) {
      query.andWhere("product.type = :type", { type });
    }

    if (gender && gender.length > 0) {
      query.andWhere("product.gender IN (:...gender)", { gender });
    }

    if (color && color.length > 0) {
      query.andWhere("product.color IN (:...color)", { color });
    }

    if (breed && breed.length > 0) {
      query.andWhere("product.breed IN (:...breed)", { breed });
    }

    if (minPrice !== undefined) {
      query.andWhere("product.price >= :minPrice", { minPrice });
    }

    if (maxPrice !== undefined) {
      query.andWhere("product.price <= :maxPrice", { maxPrice });
    }

    if (limit !== undefined) {
      query.take(limit);
    }

    if (offset !== undefined) {
      query.skip(offset);
    }

    return query.getMany();
  }

  getProductById(id: number): Promise<Products | null> {
    return this.productsRepository.findOneBy({ id });
  }
}
