import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";

@Controller()
export class CategoryController{
    constructor(private readonly categoryService: CategoryService){}
    @Post("add")
    async addCategory(
        @Body("title") title:string,
        @Body("description") description:string
    ){
        return this.categoryService.addCategory(title,description).catch(err=>{return err})
    }
    @Post("remove")
    async deleteCategory(
        @Body("id") id:number
    ){
        return this.categoryService.deleteCategory(id).catch(err=>{return err})
    }
    @Post("find")
    async findCategory(
        @Body("id") id:number
    ){
        return this.categoryService.findOne(id).catch(err=>{return err})
    }
    @Get("list")
    async getCategoryList(){
        return this.categoryService.getCategoryList().catch(err=>{return err})
    }
}