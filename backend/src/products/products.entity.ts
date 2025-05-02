import { ProdcutType } from 'src/common/enum/ProductType.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  gender: string;

  @Column()
  age: string;

  @Column()
  color: string;

  @Column()
  vaccinated: boolean;

  @Column()
  dewormed: boolean;

  @Column()
  certified: string;

  @Column()
  microchip: boolean;

  @Column()
  location: string;

  @Column()
  addInfo: string;

  @Column({ type: 'text', array: true })
  images: string[];

  @Column()
  gift: string;

  @Column({ type: 'enum', enum: ProdcutType })
  type: string;
}
