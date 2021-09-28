import { Entity, OneToMany } from "typeorm";
import { Category } from "./category.entity";
import { Post } from "./post.entity";

@Entity()
export class PostCategory{
    @OneToMany(()=>Post, post=>post.post_category)
    posts:Post[]
    @OneToMany(()=> Category, categories => categories.post_category)
    categories:Category[]
}