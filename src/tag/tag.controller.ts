import { Body, Controller, Get, Post } from "@nestjs/common";
import { TagService } from "./tag.service";

@Controller()
export class TagController {
    constructor(private readonly tagService: TagService){}
    @Post("add")
    async addTag(
        @Body("title") title:string,
        @Body("description") description:string
    ){
        return this.tagService.addTag(title,description).catch(err=>{return err})
    }
    @Post("remove")
    async deleteTag(
        @Body("id") id:number
    ){
        return this.tagService.deleteTag(id).catch(err=>{return err})
    }
    @Post("find")
    async findTag(
        @Body("id") id:number
    ){
        return this.tagService.findOne(id).catch(err=>{return err})
    }
    @Get("list")
    async getList(){
        return this.tagService.getTagList().catch(err=>{return err})
    }
}