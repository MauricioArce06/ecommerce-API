import { NextFunction, Request, Response } from 'express';

export function GlobalMidd(req: Request, res: Response, next: NextFunction) {
  console.log(
    `Estas en la ruta ${req.path} haciendo una peticion de tipo ${req.method} el dia ${new Date()}`,
  );
  next();
}
