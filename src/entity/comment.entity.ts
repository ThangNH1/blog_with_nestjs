import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Post } from "./post.entity"
import { User } from "./user.entity"

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    published: Date

    @Column()
    createdBy: string

    @Column()
    content: string

    @Column()
    id_parent: number

    @ManyToOne(() => Post, post => post.comments)
    post: Post

    @ManyToOne(() => User, user => user.comments)
    user: User
}