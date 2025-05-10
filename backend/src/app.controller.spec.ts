import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let controller: AppController;

  beforeEach(async () => {
    const mockAppService = {
      checkApiHealth: jest.fn().mockReturnValue({ status: "API is running" }),
      checkDatabaseHealth: jest
        .fn()
        .mockResolvedValue({ status: "Database is connected" }),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: mockAppService }],
    }).compile();

    controller = app.get<AppController>(AppController);
  });

  describe("Initial Tests", () => {
    it("should return API health status", () => {
      expect(controller.checkApi()).toEqual({ status: "API is running" });
    });

    it("should return DB health status", async () => {
      const result = await controller.checkDb();
      expect(result).toEqual({ status: "Database is connected" });
    });
  });
});
