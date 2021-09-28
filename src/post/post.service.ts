import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Post } from "../entity/post.entity";
import { Admin } from "../entity/admin.entity";
import { Category } from "../entity/category.entity";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ){}
    async addPost(title:string,metaTitle:string,author:string,published:Date,content:string,id_parent:number):Promise<any>{
        let post = new Post();
        post.title = title
        post.metaTitle = metaTitle
        post.author = author
        post.published = published
        post.content = content
        post.id_parent = id_parent
    }
    async getPostList(): Promise<Post[]>{
        return this.postRepository.find()
    }
    async deletePost(id:number):Promise<any>{
        let post = await this.postRepository.findOne({id:id})
        return this.postRepository.remove(post)
    }
    async findOne(id:number):Promise<Post>{
        return this.postRepository.findOne({id:id})
    }
}