import { Body, Controller, Get, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService){}

    @Post("remove")
    async deleteAdmin(
        @Body("username") username:string,
        @Body("password") password:string
    ){
        return this.adminService.deleteAdmin(username,password).catch(err => {return err})
    }

    @Post("add")
    async addAdmin(
        @Body("username") username:string,
        @Body("password") password:string
    ){
        return this.adminService.addAdmin(username,password).catch(err=>{return err})
    }

    @Post("find")
    async findAdmin(
        @Body("username") username:string
    ){
        return this.adminService.findOne(username).catch(err=>{return err})
    }

    @Get("list")
    async getList(){
        return this.adminService.getAdminList().catch(err=>{return err})
    }
}