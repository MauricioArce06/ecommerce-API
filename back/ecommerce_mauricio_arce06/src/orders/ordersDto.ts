type productsId = {
  id: string;
};

interface ordersDto {
  user_id: string;
  products: productsId[];
  date: Date;
}

export default ordersDto;
