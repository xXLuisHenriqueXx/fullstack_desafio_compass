import { Test, TestingModule } from "@nestjs/testing";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Products } from "./products.entity";
import { Repository } from "typeorm";
import { ProductType } from "../common/enum/ProductType.enum";

describe("Products Controller", () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        { provide: getRepositoryToken(Products), useClass: Repository },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    controller = module.get<ProductsController>(ProductsController);
  });

  describe("Initial Tests", () => {
    it("controller should be defined", () => {
      expect(controller).toBeDefined();
    });

    it("service should be defined", () => {
      expect(service).toBeDefined();
    });
  });

  describe("Get All Tests", () => {
    it("should return a array of products when find them", async () => {
      const mockProducts = [
        {
          id: 1,
          sku: 101,
          name: "Teste de pet 2",
          price: 100,
          gender: "male",
          age: "2 months",
          color: ["Black"],
          vaccinated: true,
          dewormed: false,
          certified: "MKA",
          microchip: true,
          location: "Brazil",
          addInfo: [
            "Pure breed Shih Tzu.",
            "Good body structure.",
            "With MKA cert and Microchip.",
            "Father from champion lineage.",
          ],
          images: [
            "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
          ],
          gift: "One Dollar",
          type: "PET",
        },
        {
          id: 2,
          sku: 101,
          name: "Teste de pet 2",
          price: 100,
          gender: "male",
          age: "2 months",
          color: ["Black"],
          vaccinated: true,
          dewormed: false,
          certified: "MKA",
          microchip: true,
          location: "Brazil",
          addInfo: [
            "Pure breed Shih Tzu.",
            "Good body structure.",
            "With MKA cert and Microchip.",
            "Father from champion lineage.",
          ],
          images: [
            "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
          ],
          gift: "One Dollar",
          type: "PRODUCT",
        },
      ];

      jest.spyOn(service, "getAllProducts").mockResolvedValue(mockProducts);

      const query = {
        limit: 10,
        offset: 0,
        type: undefined,
        gender: [],
        color: [],
        breed: [],
        minPrice: undefined,
        maxPrice: undefined,
      };
      const result = await controller.getAllProducts(query);

      expect(result).toEqual(mockProducts);
      expect(service.getAllProducts).toHaveBeenCalledWith(query);
    });
  });

  describe("Get By ID Tests", () => {
    it("should return a product when find him", async () => {
      const mockProduct = {
        id: 1,
        sku: 101,
        name: "Teste de pet 2",
        price: 100,
        gender: "male",
        age: "2 months",
        color: ["Black"],
        vaccinated: true,
        dewormed: false,
        certified: "MKA",
        microchip: true,
        location: "Brazil",
        addInfo: [
          "Pure breed Shih Tzu.",
          "Good body structure.",
          "With MKA cert and Microchip.",
          "Father from champion lineage.",
        ],
        images: [
          "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
        ],
        gift: "One Dollar",
        type: "PET",
      };
      jest.spyOn(service, "getProductById").mockResolvedValue(mockProduct);

      const result = await controller.getProductById("1");

      expect(result).toEqual(mockProduct);
      expect(service.getProductById).toHaveBeenCalledWith(1);
    });

    it("should return a NotFoundExeception when not find a product", async () => {
      jest.spyOn(service, "getProductById").mockResolvedValue(null);

      await expect(controller.getProductById("1")).rejects.toThrow(
        "Product not found"
      );
      expect(service.getProductById).toHaveBeenCalledWith(1);
    });
  });

  describe("Create Tests", () => {
    it("should create a product", async () => {
      const mockProduct = {
        id: 1,
        sku: 101,
        name: "Teste de pet",
        price: 100,
        gender: "male",
        age: "2 months",
        color: ["Black"],
        vaccinated: true,
        dewormed: false,
        certified: "MKA",
        microchip: true,
        location: "Brazil",
        addInfo: [
          "Pure breed Shih Tzu.",
          "Good body structure.",
          "With MKA cert and Microchip.",
          "Father from champion lineage.",
        ],
        images: [
          "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
        ],
        gift: "One Dollar",
        type: "PET",
      };
      const createdDTO = {
        sku: 101,
        name: "Teste de pet",
        price: 100,
        gender: "male",
        age: "2 months",
        color: ["Black"],
        vaccinated: true,
        dewormed: false,
        certified: "MKA",
        microchip: true,
        location: "Brazil",
        addInfo: [
          "Pure breed Shih Tzu.",
          "Good body structure.",
          "With MKA cert and Microchip.",
          "Father from champion lineage.",
        ],
        images: [
          "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
        ],
        gift: "One Dollar",
        type: ProductType.PET,
      };
      jest.spyOn(service, "createProduct").mockResolvedValue(mockProduct);

      const result = await controller.createProduct(createdDTO);

      expect(result).toEqual(mockProduct);
      expect(service.createProduct).toHaveBeenCalledWith(createdDTO);
    });
  });

  describe("Update Tests", () => {
    it("should update a product", async () => {
      const mockProduct = {
        id: 1,
        sku: 101,
        name: "Teste de pet",
        price: 100,
        gender: "male",
        age: "2 months",
        color: ["Black"],
        vaccinated: true,
        dewormed: false,
        certified: "MKA",
        microchip: true,
        location: "Brazil",
        addInfo: [
          "Pure breed Shih Tzu.",
          "Good body structure.",
          "With MKA cert and Microchip.",
          "Father from champion lineage.",
        ],
        images: [
          "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
        ],
        gift: "One Dollar",
        type: "PET",
      };
      const updatedDTO = {
        sku: 101,
        name: "Teste de pet",
        price: 100,
        gender: "male",
        age: "2 months",
        color: ["Black"],
        vaccinated: true,
        dewormed: false,
        certified: "MKA",
        microchip: true,
        location: "Brazil",
        addInfo: [
          "Pure breed Shih Tzu.",
          "Good body structure.",
          "With MKA cert and Microchip.",
          "Father from champion lineage.",
        ],
        images: [
          "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
        ],
        gift: "One Dollar",
        type: "PET",
      };
      jest.spyOn(service, "updateProduct").mockResolvedValue(mockProduct);

      const result = await controller.updateProduct("1", updatedDTO);

      expect(result).toEqual(mockProduct);
      expect(service.updateProduct).toHaveBeenCalledWith(1, updatedDTO);
    });

    it("should return a NotFoundExeception when not find a product to update", async () => {
      const updatedDTO = {
        sku: 101,
        name: "Teste de pet",
        price: 100,
        gender: "male",
        age: "2 months",
        color: ["Black"],
        vaccinated: true,
        dewormed: false,
        certified: "MKA",
        microchip: true,
        location: "Brazil",
        addInfo: [
          "Pure breed Shih Tzu.",
          "Good body structure.",
          "With MKA cert and Microchip.",
          "Father from champion lineage.",
        ],
        images: [
          "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
        ],
        gift: "One Dollar",
        type: "PET",
      };
      jest
        .spyOn(service, "updateProduct")
        .mockRejectedValue(new Error("Product not found"));

      await expect(controller.updateProduct("1", updatedDTO)).rejects.toThrow(
        "Product not found"
      );
      expect(service.updateProduct).toHaveBeenCalledWith(1, updatedDTO);
    });
  });

  describe("Delete Tests", () => {
    it("should delete a product", async () => {
      const mockProduct = {
        id: 1,
        sku: 101,
        name: "Teste de pet",
        price: 100,
        gender: "male",
        age: "2 months",
        color: ["Black"],
        vaccinated: true,
        dewormed: false,
        certified: "MKA",
        microchip: true,
        location: "Brazil",
        addInfo: [
          "Pure breed Shih Tzu.",
          "Good body structure.",
          "With MKA cert and Microchip.",
          "Father from champion lineage.",
        ],
        images: [
          "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg",
        ],
        gift: "One Dollar",
        type: "PET",
      };

      jest.spyOn(service, "deleteProduct").mockResolvedValue(mockProduct);

      const result = await controller.deleteProduct("1");

      expect(result).toEqual(mockProduct);
      expect(service.deleteProduct).toHaveBeenCalledWith(1);
    });

    it("should return a NotFoundException when not find a product to delete", async () => {
      jest
        .spyOn(service, "deleteProduct")
        .mockRejectedValue(new Error("Product not found"));

      await expect(controller.deleteProduct("1")).rejects.toThrow(
        "Product not found"
      );
      expect(service.deleteProduct).toHaveBeenCalledWith(1);
    });
  });
});
