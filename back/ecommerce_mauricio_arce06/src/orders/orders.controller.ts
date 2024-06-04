import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dtos/ordersDto';
import { OrdersInterceptor } from './interceptors/orders.interceptor';
import { headerAuthorization } from 'src/auth/guard/AuthGuard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiBearerAuth()
  @Post()
  @UseGuards(headerAuthorization)
  postOrders(@Body() order: CreateOrdersDto) {
    return this.ordersService.postOrders(order);
  }

  @Get(':id')
  @UseInterceptors(OrdersInterceptor)
  getOrders(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.getOrders({ order_id: id });
  }
}
