import { Controller, BaseController } from "../../libs/rest-framework";

@Controller("Product")
export class ProductController extends BaseController {
  /**
   * Initializes a new instance of the BaseController class.
   */
  constructor() {
    super("Product");
  }
}
