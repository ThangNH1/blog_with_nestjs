import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PostCategory } from "./post_category.entity"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(()=>PostCategory, post_category => post_category.categories)
    post_category:PostCategory
}