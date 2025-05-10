import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health/api")
  checkApi(): { status: string } {
    return this.appService.checkApiHealth();
  }

  @Get("health/db")
  async checkDb(): Promise<{ status: string }> {
    return this.appService.checkDatabaseHealth();
  }
}
