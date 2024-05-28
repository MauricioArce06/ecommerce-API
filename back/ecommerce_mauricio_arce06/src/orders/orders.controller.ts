import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import ordersDto from './ordersDto';
import { OrdersInterceptor } from './interceptors/orders.interceptor';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  postOrders(@Body() order: ordersDto) {
    return this.ordersService.postOrders(order);
  }

  @Get()
  @UseInterceptors(OrdersInterceptor)
  getOrders(@Query('id') id: string) {
    return this.ordersService.getOrders({ order_id: id });
  }
}
