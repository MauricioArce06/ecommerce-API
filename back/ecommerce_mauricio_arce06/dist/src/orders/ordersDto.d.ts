type productsId = {
    id: string;
};
export interface ordersDto {
    user_id: string;
    products: productsId[];
    date: Date;
}
export declare class CreateOrdersDto {
    user_id: string;
    products: productsId[];
}
export {};
