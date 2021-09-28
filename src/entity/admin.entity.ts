import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Post, post => post.admin)
  posts: Post
}
