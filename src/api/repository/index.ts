import "reflect-metadata";
import { getRepository, createConnection, Repository, Entity } from "typeorm";

export class SqlFactory {
  public static getRepository(entityName: string): Repository<any> {
    return getRepository(entityName);
  }
}
