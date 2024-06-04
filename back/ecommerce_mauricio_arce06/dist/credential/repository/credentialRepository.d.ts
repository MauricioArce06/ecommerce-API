import { credentialEntity } from '../Entities/credential.entity';
export declare class CredentialRepository {
    private credentials;
    getCredentials(): credentialEntity[];
    getCredentialById(id: number): credentialEntity;
    postCredential(credential: credentialEntity): void;
    updateCredential(id: number, toUpdate: number | string | boolean): credentialEntity[];
}
