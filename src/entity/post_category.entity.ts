import { randomUUID } from "crypto";
import { BeforeInsert, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { Post } from "./post.entity";
import {v4 as uuid} from 'uuid'
@Entity()
export class PostCategory{
    @PrimaryColumn()
    id:number
    @OneToMany(()=>Post, post=>post.post_category)
    posts:Post[]
    @OneToMany(()=> Category, categories => categories.post_category)
    categories:Category[]
}