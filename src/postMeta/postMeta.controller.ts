import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostMetaService } from "./postMeta.service";

@Controller("postmeta")
export class PostMetaController {
    constructor(private readonly postMetaService:PostMetaService){}
    @Post("add")
    async addPostMeta(
        @Body("key") key:string,
        @Body("content") content:string
    ){
        return this.postMetaService.addPostMeta(key,content).catch(err=>{return err})
    }
    @Post("remove")
    async deletePostMeta(
        @Body("id") id:number
    ){
        return this.postMetaService.deletePostMeta(id).catch(err=>{return err})
    }
    @Post("find")
    async findPostMeta(
        @Body("id") id:number
    ){
        return this.postMetaService.findOne(id).catch(err=>{return err})
    }
    @Get("list")
    async getList(){
        return this.postMetaService.getPostMetaList().catch(err=>{return err})
    }
}