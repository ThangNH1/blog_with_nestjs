import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { PostMeta } from "src/entity/postMeta.entity";
import { PostMetaController } from "./postMeta.controller";
import { PostMetaService } from "./postMeta.service";

@Module({
    imports:[TypeOrmModule.forFeature([PostMeta])],
    controllers:[PostMetaController],
    providers:[PostMetaService]
})
export class PostMetaModule{}