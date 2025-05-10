import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { AppService } from "./app.service";

async function bootstrap() {
  const logger = new Logger("Bootstrap");
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const appService = app.get(AppService);

  try {
    const apiHealth = appService.checkApiHealth();
    const databaseHealth = await appService.checkDatabaseHealth();
    logger.log(`API Health: ${apiHealth.status}`);
    logger.log(`DB Health: ${databaseHealth.status}`);

    if (databaseHealth.status !== "Database is connected") {
      throw new Error("Database is not connected. Aborting startup.");
    }
  } catch (err) {
    logger.error("Startup health check failed:", err);
    process.exit(1);
  }

  const configSwagger = new DocumentBuilder()
    .setTitle("Products Pet Shop Backend")
    .setDescription(
      "Project for a fictional Pet Shop with pets and products sales, maded for Compass UOL."
    )
    .setVersion("1.0")
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup("api", app, documentFactory);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  await app.listen(configService.get<number>("PORT") ?? 3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
