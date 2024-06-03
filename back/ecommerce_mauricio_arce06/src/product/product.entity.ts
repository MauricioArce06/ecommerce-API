import { Categories } from 'src/categories/category.entity';
import { OrdersDetail } from 'src/orders-detail/orderDetail.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column('int')
  stock: number;

  @Column({ type: 'varchar', default: 'default.jpg' })
  imgUrl: string;

  @ManyToOne(() => Categories, (category) => category.product)
  categories: Categories;

  @ManyToMany(() => OrdersDetail, (orderDetail) => orderDetail.product)
  @JoinTable({
    name: 'order_detail',
    joinColumn: { name: 'product_id' },
    inverseJoinColumn: { name: 'order_id' },
  })
  orderDetail: OrdersDetail[];
}
