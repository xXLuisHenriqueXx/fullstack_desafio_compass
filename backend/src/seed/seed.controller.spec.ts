import { Test, TestingModule } from "@nestjs/testing";
import { SeedController } from "./seed.controller";
import { ProductsService } from "../products/products.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Products } from "../products/products.entity";
import { Repository } from "typeorm";

describe("SeedController", () => {
  let controller: SeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeedController],
      providers: [
        ProductsService,
        { provide: getRepositoryToken(Products), useClass: Repository },
      ],
    }).compile();

    controller = module.get<SeedController>(SeedController);
  });

  describe("Initial Tests", () => {
    it("should be defined", () => {
      expect(controller).toBeDefined();
    });
  });
});
