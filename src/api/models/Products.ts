import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Products {
  @PrimaryColumn() 
  id: string;

  @Column() 
  description: string;

  @Column({ type: "decimal" })
  price: number;

  @Column() 
  product_type: string;

  @ManyToOne(type => User, user => user.id)
  @Column() 
  user_id: string;

  @Column() 
  created_at: Date;

  @Column() 
  updated_at: Date;
}
