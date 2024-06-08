import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { JWT_SECRET } from 'src/config';
import { Role } from '../rolEnum';

async function headerAuthorizationValidation(req, jwtService) {
  const token = req.headers['authorization']?.split(' ')[1] ?? '';

  if (!token) {
    throw new UnauthorizedException('Bearer token not found');
  }

  try {
    const payload = await jwtService.verifyAsync(token, { secret: JWT_SECRET });
    payload.iat = new Date(payload.iat * 1000).toUTCString();
    payload.exp = new Date(payload.exp * 1000).toUTCString();

    req.user = payload;

    return true;
  } catch (error) {
    throw new UnauthorizedException('Invalid token');
  }
}

@Injectable()
export class headerAuthorization implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    return headerAuthorizationValidation(req, this.jwtService);
  }
}
