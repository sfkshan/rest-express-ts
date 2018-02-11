import { ExpressServerArgs } from "./ExpressServerArgs";
import { importFromDirectories } from "../utils";
import {
  getMetadataStorage,
  ControllerMetadataArgs
} from "../rest-framework/storage";
import { BaseController } from "./controllers/BaseController";
import { IController, IControllerBase } from "./controllers/types/IController";

export class ExpressServer {
  /**
   * Initializes a new instance of the Express server.
   */
  constructor(private args: ExpressServerArgs) {}

  createServer(): any {
    this.loadControllers();
    this.getHandlersFromControllers();
  }

  getHandlersFromControllers(): void {
    getMetadataStorage().controllers.forEach((item: ControllerMetadataArgs) => {
      const c = item.target as any;
      const inst: IController = new c();
      inst.Get();
    });
  }

  loadControllers(): void {
    const controllers = importFromDirectories(this.args.controllers);
    const loaded = controllers.map((controller: string) => {
      return require(controller);
    });
  }
}
