import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from "src/entity/category.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService{
    constructor(
        @InjectRepository(Category)
        private categoryRepository:Repository<Category>
    ){}
    async addCategory(title: string,description:string):Promise<any>{
        let category = new Category()
        category.title = title
        category.description = description
        return this.categoryRepository.save(category)
    }
    async getCategoryList():Promise<Category[]>{
        return this.categoryRepository.find()
    }
    async deleteCategory(id:number):Promise<any>{
        let category = await this.categoryRepository.findOne({id:id})
        return this.categoryRepository.remove(category)
    }
    async findOne(id:number):Promise<Category>{
        return this.categoryRepository.findOne({id:id})
    }
}