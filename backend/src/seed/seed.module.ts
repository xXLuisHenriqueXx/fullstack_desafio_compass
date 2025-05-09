import { Module } from "@nestjs/common";
import { SeedController } from "./seed.controller";
import { SeedService } from "./seed.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "src/products/products.entity";
import { ProductsModule } from "src/products/products.module";

@Module({
  imports: [TypeOrmModule.forFeature([Products]), ProductsModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
