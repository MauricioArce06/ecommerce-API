export declare class UserEntity {
    private readonly users;
    getUser(): {
        id: number;
        email: string;
        name: string;
        password: string;
        adress: string;
        phone: string;
        country: string;
        city: string;
    }[];
}
