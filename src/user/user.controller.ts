import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService:UserService){}
    @Post("add")
    async addUser(
        @Body("username") username:string,
        @Body("password") password:string
    ){
        return this.userService.addUser(username,password).catch(err=>{return err})
    }
    @Post("remove")
    async removeUser(
        @Body("username") username:string,
        @Body("password") password:string
    ){
        return this.userService.deleteUser(username,password).catch(err=>{return err})
    }
    @Post('find')
    async findUser(
        @Body("username")   username: string,
    ){
        return this.userService.findOne(username).catch(error => {
            return error;
        })
    }
    @Get("list")
    async getList(){
        return this.userService.getUserList().catch(error => {
            return error;
        })
    }
}

