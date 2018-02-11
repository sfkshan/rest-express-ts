export interface IController {
  Get(): void;

  Post(): void;

  Del(): void;

  Put(): void;
}

export type IControllerBase = IController;
