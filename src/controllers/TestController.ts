import { Controller, BaseController } from "../libs/rest-framework";

@Controller("Test")
export class TestController extends BaseController {
  /**
   * Initializes a new instance of the BaseController class.
   */
  constructor() {
    super("Test");
  }
}
