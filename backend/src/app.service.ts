import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {}

  checkApiHealth(): { status: string } {
    return { status: "API is running" };
  }

  async checkDatabaseHealth(): Promise<{ status: string }> {
    try {
      await this.dataSource.query("SELECT 1");
      return { status: "Database is connected" };
    } catch (error) {
      return { status: "Database connection failed" };
    }
  }
}
