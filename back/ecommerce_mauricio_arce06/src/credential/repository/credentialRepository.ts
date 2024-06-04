import { credentialEntity } from '../Entities/credential.entity';

export class CredentialRepository {
  private credentials: credentialEntity[] = [
    {
      id: 1,
      name: 'Mauricio Arce',
      password: '123456',
    },
    {
      id: 2,
      name: 'Example User',
      password: 'examplepass',
    },
  ];
  getCredentials() {
    return this.credentials;
  }

  getCredentialById(id: number) {
    return this.credentials.find((credential) => credential.id === id);
  }

  postCredential(credential: credentialEntity) {
    this.credentials.push(credential);
  }

  updateCredential(id: number, toUpdate: number | string | boolean) {
    const credential = this.credentials.find(
      (credential) => credential.id === id,
    );
    if (credential) {
      Object.assign(credential, toUpdate);
    }
    return this.credentials;
  }
}
