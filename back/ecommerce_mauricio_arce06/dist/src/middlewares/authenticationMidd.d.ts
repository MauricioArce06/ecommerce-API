import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export declare class AuthenticationMiddUser implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
export declare class AuthenticationMiddProduct implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
