import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Comment } from "./comment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[]
}