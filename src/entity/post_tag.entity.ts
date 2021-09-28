import { Entity, OneToMany } from "typeorm";
import { Post } from "./post.entity";
import { Tag } from "./tag.entity";
import { BaseEntity } from "./base-entity";

@Entity()
export class PostTag extends BaseEntity{
    
    @OneToMany(() => Post, posts => posts.post_tag)
    posts: Post[]
    @OneToMany(() => Tag, tags => tags.post_tag)
    tags: Tag[]

   
}