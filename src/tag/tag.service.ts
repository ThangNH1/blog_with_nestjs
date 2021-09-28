import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Tag } from "src/entity/tag.entity";
import { Repository } from "typeorm";

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(Tag)
        private tagRepository:Repository<Tag>
    ){}
    async addTag(title:string,description:string):Promise<any>{
        let tag = new Tag()
        tag.title = title
        tag.description = description
        return this.tagRepository.save(tag)
    }
    async deleteTag(id:number):Promise<any>{
        let tag= await this.tagRepository.findOne({id:id})
        return this.tagRepository.remove(tag)
    }
    async getTagList():Promise<Tag[]>{
        return this.tagRepository.find()
    }
    async findOne(id:number):Promise<Tag>{
        return this.tagRepository.findOne({id:id})
    }
}