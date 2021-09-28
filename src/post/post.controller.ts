import { Body, Controller, Get, Post } from "@nestjs/common";
import { title } from "process";
import { PostService } from "./post.service";

@Controller("post")
export class PostController {
    constructor(private readonly postService: PostService) { }
    @Get("list")
    async getPostList() {
        return this.postService.getPostList().catch(err => { return err })
    }
    @Post("add")
    async addPost(
        @Body("title") title: string,
        @Body("metaTitle") metaTitle: string,
        @Body("author") author: string,
        @Body("content") content: string,
        @Body("id_parent") id_parent: number
    ) {
        let published = new Date()
        return this.postService.addPost(title, metaTitle, author, published, content, id_parent).catch(err => { return err })
    }
    @Post("remove")
    async deletePost(
        @Body("id") id:number
    ){
        return this.postService.deletePost(id).catch(err=>{return err})
    }
    @Post("find")
    async findPost(
        @Body("id") id:number
    ){
        return this.postService.findOne(id).catch(err=>{return err})
    }
}