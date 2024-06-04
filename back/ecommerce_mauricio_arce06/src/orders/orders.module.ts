import { Logger, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersDetailService } from 'src/orders-detail/orders-detail.service';
import { OrdersController } from './orders.controller';
import { Products } from 'src/product/product.entity';
import { ProductsService } from 'src/product/services/products.service';
import { OrdersDetail } from 'src/orders-detail/orderDetail.entity';
import { Orders } from './order.entity';
import { UsersModule } from 'src/user/modules/users.module';
import { User } from 'src/user/entity/user.entity';

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
