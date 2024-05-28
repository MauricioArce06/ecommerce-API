import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'src/entities/order.entity';
import { Repository } from 'typeorm';
import ordersDto from './ordersDto';
import { User } from 'src/user/Entities/user.entity';
import { OrdersDetailService } from 'src/orders-detail/orders-detail.service';
import { Products } from 'src/product/product.entity';
import { OrderDetailDto2 } from 'src/orders-detail/order-detail.dto';
import { OrdersDetail } from 'src/entities/orderDetail.entity';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name); // Logger instance
  constructor(
    @InjectRepository(Orders) private ordersRepository: Repository<Orders>,
    @InjectRepository(User) private userRepository: Repository<User>,
    private ordersDetailService: OrdersDetailService,
    @InjectRepository(OrdersDetail)
    private ordersDetailRepository: Repository<OrdersDetail>,
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async getOrders(OrderDetail: OrderDetailDto2) {
    const { order_id } = OrderDetail;

    const order = await this.ordersRepository.findOne({
      where: { id: order_id },
      relations: ['orderDetail', 'orderDetail.product'],
      select: {
        id: true,
        date: true,
        total: true,
        orderDetail: {
          id: true,
          price: true,
          product: {
            name: true,
          },
        },
      },
    });

    console.log(await this.ordersDetailService.getOrdersDetail(order));

    return order;
  }

  async postOrders(orders: ordersDto) {
    const { user_id, products } = orders;
    let total = 0;
    const user = await this.userRepository.findOne({ where: { id: user_id } });

    if (user) {
      const Hoy = new Date().toLocaleDateString('es-Ar');
      const order = new Orders();

      const orderSaved = await this.ordersRepository.save(order);

      const ordersDetail = [];
      console.log('ID DEL ORDER', order.id);

      orderSaved.date = Hoy;
      orderSaved.user_id = user;

      for (const producto of products) {
        const { id } = producto;
        console.log(id);
        const orderDetail = await this.ordersDetailService.addOrderDetail({
          product_id: id,
          order_id: order.id,
        });
        total = total + Number(orderDetail.price);
        ordersDetail.push(orderDetail);
      }
      console.log('orderSaved por actualizar');

      orderSaved.orderDetail = ordersDetail;
      orderSaved.total = total;

      console.log('orderSaved actualizado');

      const updatedOrder = await this.ordersRepository.save(orderSaved);

      return await this.ordersRepository.findOne({
        where: { id: orderSaved.id },
        relations: ['orderDetail'],
        select: {
          id: true,
          date: true,
          total: true,
          orderDetail: {
            id: true,
          },
        },
      });
    } else throw new Error('El usuario no existe');
  }
}
