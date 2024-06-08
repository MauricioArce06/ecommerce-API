import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  OrderDetailDto,
  OrderDetailDto2,
  OrderDetailDto3,
} from './order-detail.dto';
import { Products } from 'src/product/product.entity';
import { ProductsService } from 'src/product/services/products.service';
import { OrdersDetail } from './orderDetail.entity';
import { Orders } from 'src/orders/order.entity';

@Injectable()
export class OrdersDetailService {
  constructor(
    @InjectRepository(OrdersDetail)
    private ordersDetailRepository: Repository<OrdersDetail>,
    @InjectRepository(Orders) private orderRepository: Repository<Orders>,
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
    private readonly productsRepositoryDB: ProductsService,
  ) {}

  async getOrdersDetail(order: Orders) {
    const ordersDetail = await this.ordersDetailRepository.find({
      where: { order_id: order },
      relations: ['order_id', 'product'],
      select: {
        id: true,
        price: true,
        product: {
          id: true,
          name: true,
          description: true,
          price: true,
          stock: true,
        },
      },
    });

    return ordersDetail;
  }

  async addOrderDetail(orderDetail: OrderDetailDto) {
    const { product_id, order_id } = orderDetail;
    const order = await this.orderRepository.findOne({
      where: { id: order_id },
    });
    if (!order) {
      throw new Error('La orden no existe');
    }
    const product = await this.productsRepositoryDB.getProductById(product_id);

    if (!product) {
      throw new Error('El producto no existe');
    }

    const existingOrderDetail = await this.ordersDetailRepository.findOne({
      where: { order_id: order, product: product },
    });

    if (existingOrderDetail) {
      throw new Error('El producto ya existe');
    }

    if (product.stock <= 0) {
      throw new Error('El producto no tiene stock');
    }
    const newOrderDetail = new OrdersDetail();

    const productArray = [];

    productArray.push(product);
    newOrderDetail.price = product.price;
    newOrderDetail.order_id = order;
    newOrderDetail.product = productArray;

    product.stock -= 1;
    await this.productsRepository.save(product);

    const orderDetailSaved =
      await this.ordersDetailRepository.save(newOrderDetail);

    const orderDetailCreated = await this.ordersDetailRepository.findOne({
      where: { id: orderDetailSaved.id },
      relations: { product: true },
      select: ['id', 'price', 'order_id', 'product'],
    });

    console.log(orderDetailCreated);
    return orderDetailCreated;
  }
}
