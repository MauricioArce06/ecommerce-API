import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Products } from 'src/product/product.entity';
import { Orders } from 'src/orders/order.entity';

@Entity('order_details')
export class OrdersDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  price: number;

  @ManyToOne(() => Orders, (order) => order.orderDetail)
  @JoinColumn({ name: 'order_id' })
  order_id: Orders;

  @ManyToMany(() => Products, { cascade: true })
  @JoinTable({
    name: 'order_detail_product',
    joinColumn: {
      name: 'order_detail_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  product: Products[];
}
