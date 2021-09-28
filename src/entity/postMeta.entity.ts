import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Post } from "./post.entity"

@Entity()
export class PostMeta {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    key: string

    @Column()
    content: string

    @ManyToOne(() => Post, port => port.post_metaa)
    post: Post
}