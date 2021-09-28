import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, JoinColumn } from "typeorm"
import { takeCoverage } from "v8"
import { Admin } from "./admin.entity"
import { Comment } from "./comment.entity"
import { PostMeta } from "./postMeta.entity"
import { PostCategory } from "./post_category.entity"
import { PostTag } from "./post_tag.entity"

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    metaTitle: string

    @Column()
    author: string

    @Column()
    published: Date

    @Column()
    createdOn: Date

    @Column()
    updatedOn: Date

    @Column()
    content: string

    @Column()
    id_parent: number

    @ManyToOne(() => Admin, admin => admin.posts, { onDelete: 'SET NULL' })
    admin: Admin

    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[]

    @OneToMany(() => Post, post => post.post)
    posts: Post[]

    @ManyToOne(() => Post, post => post.posts)
    post: Post

    @OneToMany(() => PostMeta, postMeta => postMeta.post)
    post_metaa: PostMeta[]

    @ManyToOne(()=>PostCategory,post_category => post_category.posts)
    post_category:PostCategory

    @ManyToOne(()=>PostTag,post_tag=>post_tag.posts)
    post_tag:PostTag
}


