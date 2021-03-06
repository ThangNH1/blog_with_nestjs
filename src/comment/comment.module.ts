import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from "src/entity/post.entity";
import { User } from "src/entity/user.entity";
import { Comment } from 'src/entity/comment.entity';
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";

@Module({
    imports:[TypeOrmModule.forFeature([Post,User,Comment])],
    controllers:[CommentController],
    providers:[CommentService]
})
export class CommentModule{}