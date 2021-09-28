import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PostTag } from "./post_tag.entity"

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(()=>PostTag,post_tag=>post_tag.tags)
    post_tag:PostTag
}