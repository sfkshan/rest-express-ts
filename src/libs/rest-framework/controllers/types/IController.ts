import * as express from "express";

export interface ICrudController {
  Get(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void;

  Post(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void;

  Del(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void;

  Put(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void;
}

export type ICrudControllerBase = ICrudController;
