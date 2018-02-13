import * as express from "express";
import { ExpressServerArgs } from "./ExpressServerArgs";
import { importFromDirectories } from "../utils";
import {
  getMetadataStorage,
  ControllerMetadataArgs
} from "../rest-framework/storage";
import { BaseController } from "./controllers/BaseController";
import { ICrudController, ICrudControllerBase } from "./controllers/types/IController";

export class ExpressServer {
  private app = express();

  /**
   * Initializes a new instance of the Express server.
   */
  constructor(private args: ExpressServerArgs) {}

  createServer(): any {
    this.loadControllers();
    this.injectRoutes();
    return this.app;
  }

  injectRoutes(): void {
    getMetadataStorage().controllers.forEach((item: ControllerMetadataArgs) => {
      const c = item.target as any;
      const inst: ICrudController = new c();
      this.app.get("/", inst.Get);
    });
  }

  loadControllers(): void {
    const controllers = importFromDirectories(this.args.controllers);
    const loaded = controllers.map((controller: string) => {
      return require(controller);
    });
  }
}
