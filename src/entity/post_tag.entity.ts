import { Entity, OneToMany } from "typeorm";
import { Post } from "./post.entity";
import { Tag } from "./tag.entity";

@Entity()
export class PostTag {
    @OneToMany(()=>Post,posts =>posts.post_tag)
    posts:Post[]
    @OneToMany(()=>Tag,tags=>tags.post_tag)
    tags:Tag[]
}