import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthenticationMiddUser implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { name, password, email, address, phone, country, city } = req.body;
    if (!name) next({ message: 'Name is required' });
    else if (!password) next({ message: 'Password is required' });
    else if (!email) next({ message: 'Email is required' });
    else if (!address) next({ message: 'Adress is required' });
    else if (!phone) next({ message: 'Phone is required' });
    else if (!country) next({ message: 'Country is required' });
    else if (!city) next({ message: 'City is required' });
    else next();
  }
}

@Injectable()
export class AuthenticationMiddProduct implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { name, description, price, stock } = req.body;
    if (!name) next({ message: 'Name is required' });
    else if (!description) next({ message: 'Description is required' });
    else if (!price) next({ message: 'Price is required' });
    else if (stock != stock) next({ message: 'Stock is required' });
    else if (typeof stock.stock == 'boolean')
      next({ message: 'Invalid Stock' });
    else next();
  }
}
