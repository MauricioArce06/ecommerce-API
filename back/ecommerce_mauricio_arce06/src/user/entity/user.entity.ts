import { Orders } from 'src/orders/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 60, select: false })
  password: string;

  @Column()
  phone: string;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column({ type: 'boolean', default: false, select: false })
  isAdmin: boolean;

  @OneToMany(() => Orders, (orders) => orders.user_id)
  @JoinColumn({ name: 'orders_id' })
  orders_id: Orders[];
}
