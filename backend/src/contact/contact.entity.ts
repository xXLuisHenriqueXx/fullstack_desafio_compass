import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  createdDate: Date;
}
