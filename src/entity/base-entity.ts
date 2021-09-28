import { BeforeInsert, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import {v4 as uuid} from 'uuid'
export abstract class BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: number
    @CreateDateColumn()
    createAt: Date;
    @UpdateDateColumn()
    updateAt: Date;
    @BeforeInsert()
    generate() {
        this.id = uuid()
    }
}