import { ProdcutType } from "src/common/enum/ProductType.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: number;

  @Column()
  name: string;

  @Column()
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

  @Column({ type: "enum", enum: ProdcutType })
  type: string;
}
