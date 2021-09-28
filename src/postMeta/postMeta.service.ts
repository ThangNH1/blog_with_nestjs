import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { PostMeta } from "src/entity/postMeta.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostMetaService {
    constructor(
        @InjectRepository(PostMeta)
        private postMetaRepository:Repository<PostMeta>,
    ){}
    async addPostMeta(key:string,content:string):Promise<any>{
        let postMeta = new PostMeta()
        postMeta.key = key
        postMeta.content = content
        return this.postMetaRepository.save(postMeta)
    }
    async deletePostMeta(id:number):Promise<any>{
        let meta = await this.postMetaRepository.findOne({id:id})
        return this.postMetaRepository.remove(meta)
    }
    async getPostMetaList():Promise<PostMeta[]>{
        return this.postMetaRepository.find()
    }
    async findOne(id: number):Promise<PostMeta>{
        return this.postMetaRepository.findOne({id:id})
    }
}