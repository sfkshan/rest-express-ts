import * as express from "express";
import { IController } from "./types/IController";
import { insertRecord } from "../../../api/repository";

export class BaseController implements IController {
  /**
   * Initializes a new instance of the BaseController class.
   */
  constructor(private modelName?: string) {}

  async Get(req: express.Request, res: express.Response): Promise<void> {
    await insertRecord();
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
