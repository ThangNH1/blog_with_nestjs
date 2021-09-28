import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from "../entity/admin.entity";
import { Category } from "../entity/category.entity";
import { Post } from "../entity/post.entity";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";

@Module({
    imports: [TypeOrmModule.forFeature([Post,Admin,Category])],
    controllers: [PostController],
    providers: [PostService]
})
export class PostModule{}