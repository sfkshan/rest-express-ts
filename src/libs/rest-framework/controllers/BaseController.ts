import * as express from "express";
import { ICrudController } from "./types/IController";
import { SqlFactory } from "../../../api/repository";

export class BaseController implements ICrudController {
  /**
   * Initializes a new instance of the BaseController class.
   */
  constructor(private modelName?: string) {}

  async Get(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user: any = {};
      user.id = "Timber";
      user.password = "Timber";
      user.created_at = new Date();
      user.updated_at = new Date();
      const rep = SqlFactory.getRepository("User");
      await rep.save(user);
      console.log("Saved a new user with id: " + user.id);

      const users = await SqlFactory.getRepository("User").find();
      console.log("Loaded users: ", users);
    } catch (error) {
      console.log(error);
    }

    res.json({ message: "Hello, World" });
  }

  Post(req: express.Request, res: express.Response): void {
    console.log("Post()");
  }

  Del(req: express.Request, res: express.Response): void {
    console.log("Del()");
  }

  Put(req: express.Request, res: express.Response): void {
    console.log("Put()");
  }
}
