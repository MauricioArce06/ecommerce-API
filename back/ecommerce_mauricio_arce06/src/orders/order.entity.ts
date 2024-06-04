import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { OrdersDetail } from 'src/orders-detail/orderDetail.entity';
import { User } from 'src/user/entity/user.entity';

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @ManyToOne(() => User, (user) => user.orders_id)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @Column({ default: new Date().toLocaleDateString('es-Ar') })
  date: string;

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
    default: 0,
  })
  total: number;

  @OneToMany(() => OrdersDetail, (orderDetail) => orderDetail.order_id, {
    cascade: true,
  })
  @JoinColumn({ name: 'orderDetail' })
  orderDetail: OrdersDetail[];
}
