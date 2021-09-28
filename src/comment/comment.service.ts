import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from "src/entity/comment.entity";
import { Post } from "src/entity/post.entity";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository:Repository<Comment>,
        @InjectRepository(User)
        private userRepository:Repository<User>,
        @InjectRepository(Post)
        private postRepository:Repository<Post>
    ){}
    async addComment(title:string, published:Date, createdBy:string,content:string,id_parent:number,id_post:number):Promise<any>{
        let comment = new Comment();
        comment.title = title
        comment.published = published
        this.userRepository.findOne({username : createdBy})
        .then(result => {
            if(result){ comment.user = result}
            else {
                comment.user = new User()
                comment.user.username = createdBy
            }
        }).catch(err=>{return err})
        this.postRepository.findOne({id:id_post}).then(result=>{
            if(result){comment.post = result}
            else{
                comment.post = new Post()
                comment.post.id = id_post
            }
        }).catch(err=>{return err})
        return this.commentRepository.save(comment)
    }
    async getCommentList():Promise<Comment[]>{
        return this.commentRepository.find()
    }
    async deleteComment(id:number):Promise<any>{
        let cmt = await this.commentRepository.findOne({id:id})
        return this.commentRepository.remove(cmt)
    }
    async findOne(id:number):Promise<Comment>{
        return this.commentRepository.findOne({id:id})
    }
}