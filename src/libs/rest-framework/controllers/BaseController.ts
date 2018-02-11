import { IController } from "./types/IController";

export class BaseController implements IController {
  /**
   * Initializes a new instance of the BaseController class.
   */
  constructor(private modelName?: string) {}

  Get(): void {
    console.log(`Get is called with model = ${this.modelName}`);
  }

  Post(): void {
    console.log("Post()");
  }

  Del(): void {
    console.log("Del()");
  }

  Put(): void {
    console.log("Put()");
  }
}
