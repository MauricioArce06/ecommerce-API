"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialRepository = void 0;
class CredentialRepository {
    constructor() {
        this.credentials = [
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
    }
    getCredentials() {
        return this.credentials;
    }
    getCredentialById(id) {
        return this.credentials.find((credential) => credential.id === id);
    }
    postCredential(credential) {
        this.credentials.push(credential);
    }
    updateCredential(id, toUpdate) {
        const credential = this.credentials.find((credential) => credential.id === id);
        if (credential) {
            Object.assign(credential, toUpdate);
        }
        return this.credentials;
    }
}
exports.CredentialRepository = CredentialRepository;
//# sourceMappingURL=credentialRepository.js.map