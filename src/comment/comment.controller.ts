import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommentService } from "./comment.service";

@Controller()
export class CommentController {
    constructor(private readonly commentService:CommentService){}
    @Post("add")
    async addCategory(
        @Body("title") title:string,
        @Body("published") published:Date,
        @Body("createdBy") createdBy:string,
        @Body("conntent") content:string,
        @Body("id_parent") id_parent:number,
        @Body("id_post") id_post:number
    ){
        let date = new Date()
        return this.commentService.addComment(title,date,createdBy,content,id_parent,id_post).catch(err=>{return err})
    }
    @Post("remove")
    async deleteCategory(
        @Body("id") id:number
    ){
        return this.commentService.deleteComment(id).catch(err=>{return err})
    }
    @Post("find")
    async findUser(
        @Body("id") id:number
    ){
        return this.commentService.findOne(id).catch(err=>{return err})
    }
    @Get("list")
    async getList(){
        return this.commentService.getCommentList().catch(err=>{return err})
    }
}