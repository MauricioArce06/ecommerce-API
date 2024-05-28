import { Logger, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from 'src/entities/order.entity';
import { OrdersDetailService } from 'src/orders-detail/orders-detail.service';
import { OrdersController } from './orders.controller';
import { UsersModule } from 'src/user/modules/users.module';
import { UserRepository } from 'src/user/repository/userRepository';
import { User } from 'src/user/Entities/user.entity';
import { OrdersDetail } from 'src/entities/orderDetail.entity';
import { Products } from 'src/product/product.entity';
import { ProductsService } from 'src/product/services/products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orders]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([OrdersDetail]),
    TypeOrmModule.forFeature([Products]),
    UsersModule,
  ],
  providers: [OrdersService, OrdersDetailService, ProductsService],
  controllers: [OrdersController],
})
export class OrdersModule {
  private readonly logger = new Logger(OrdersModule.name);
  constructor() {
    this.logger.log('OrdersModule initialized');
  }
}
