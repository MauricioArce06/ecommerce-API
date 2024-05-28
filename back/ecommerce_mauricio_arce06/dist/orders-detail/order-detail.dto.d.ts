export interface OrderDetailDto {
    product_id: string;
    order_id: string;
}
export interface OrderDetailDto2 {
    order_id: string;
}
export interface OrderDetailDto3 {
    detail_id: string;
    products_id: {
        name: string;
    }[];
}
