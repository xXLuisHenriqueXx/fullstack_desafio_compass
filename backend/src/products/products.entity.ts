import { ProductType } from "../common/enum/ProductType.enum";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: number;

  @Column()
  name: string;

  @Column({ type: "float" })
  price: number;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  age: string;

  @Column({ type: "text", array: true, nullable: true })
  color: string[];

  @Column({ nullable: true })
  vaccinated: boolean;

  @Column({ nullable: true })
  dewormed: boolean;

  @Column({ nullable: true })
  certified: string;

  @Column({ nullable: true })
  microchip: boolean;

  @Column({ nullable: true })
  location: string;

  @Column({ type: "text", array: true, nullable: true })
  addInfo: string[];

  @Column({ type: "text", array: true })
  images: string[];

  @Column({ nullable: true })
  gift: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  size: string;

  @Column({ type: "enum", enum: ProductType })
  type: string;

  @CreateDateColumn()
  createdDate: Date;
}
