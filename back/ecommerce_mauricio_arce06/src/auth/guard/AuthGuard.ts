import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

function headerAuthorizationValidation(req) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) throw new UnauthorizedException();
  const [type, credentials] = authHeader.split(' ');

  console.log(type, credentials);

  if (type !== 'Basic' || !credentials) throw new UnauthorizedException();

  const [email, password] = credentials.split(':');

  if (!email || !password) throw new UnauthorizedException();
  return true;
}

@Injectable()
export class headerAuthorization implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    return headerAuthorizationValidation(req);
  }
}
