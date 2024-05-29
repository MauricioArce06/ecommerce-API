import {
  Body,
  Controller,
  Get,
  ParseUUIDPipe,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dtos/ordersDto';
import { OrdersInterceptor } from './interceptors/orders.interceptor';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  postOrders(@Body() order: CreateOrdersDto) {
    return this.ordersService.postOrders(order);
  }

  @Get()
  @UseInterceptors(OrdersInterceptor)
  getOrders(@Query('id', ParseUUIDPipe) id: string) {
    return this.ordersService.getOrders({ order_id: id });
  }
}
