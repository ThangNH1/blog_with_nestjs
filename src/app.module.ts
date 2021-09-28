import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AdminModule } from './admin/admin.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { PostMetaModule } from './postMeta/postMeta.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(),AdminModule,CategoryModule,CommentModule,PostModule,PostMetaModule,TagModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection:Connection){}
}
