import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ProductsModule } from "./products/products.module";
import { SeedModule } from "./seed/seed.module";
import { ContactModule } from "./contact/contact.module";

import { Products } from "./products/products.entity";
import { Contact } from "./contact/contact.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || "5432"),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Products, Contact],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Products, Contact]),
    ProductsModule,
    SeedModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
