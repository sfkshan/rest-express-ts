import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn() id: string;

  @Column() password: string;

  @Column() created_at: Date;

  @Column() updated_at: Date;
}
