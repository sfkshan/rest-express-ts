import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../models/User";

export function insertRecord() {
  createConnection()
    .then(async connection => {
      console.log("Inserting a new user into the database...");
      const user = new User();
      user.id = "Timber";
      user.password = "Timber";
      user.created_at = new Date();
      user.updated_at = new Date();

      await connection.manager.save(user);
      console.log("Saved a new user with id: " + user.id);

      console.log("Loading users from the database...");
      const users = await connection.manager.find(User);
      console.log("Loaded users: ", users);
    })
    .catch(error => console.log(error));
}
