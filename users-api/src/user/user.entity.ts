/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: `t_sw_user` })
export class User {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  userId?: number;

  @Column({ name: 'nm_user' })
  username?: string;

  @Column({ name: 'ds_password' })
  password?: string;

  @Column({ name: 'nr_phone' })
  cellPhone?: number;

  @Column({ name: 'ds_email' })
  email?: string;
}
