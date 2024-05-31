import { SetMetadata } from '@nestjs/common';
import { Role } from '../rolEnum';

export const Roles = (...roles: Role[]) => {
  return SetMetadata('roles', roles);
};
