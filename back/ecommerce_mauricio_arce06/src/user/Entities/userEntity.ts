import { credentialEntity } from '../../credential/Entities/credentialEntity';

export interface UserEntity {
  id: number;
  email: string;
  // credentials: credentialEntity;
  name: string;
  password: string;
  adress: string;
  phone: string;
  country: string;
  city: string;
}
