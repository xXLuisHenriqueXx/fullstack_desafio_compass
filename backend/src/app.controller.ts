import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOperation } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: "Return the health state of api",
  })
  @Get("health/api")
  checkApi(): { status: string } {
    return this.appService.checkApiHealth();
  }

  @ApiOperation({
    summary: "Return the health state of database",
  })
  @Get("health/db")
  async checkDb(): Promise<{ status: string }> {
    return this.appService.checkDatabaseHealth();
  }
}
