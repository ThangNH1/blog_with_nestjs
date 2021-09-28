import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Admin } from "src/entity/admin.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>
    ){}
    async addAdmin(username: string, password: string):Promise<any> {
        let admin = new Admin();
        admin.username = username;
        admin.password = password;
        return this.adminRepository.save(admin);
    }
    async getAdminList():Promise<Admin[]>{
        return this.adminRepository.find();
    }
    async deleteAdmin(username: string,password: string):Promise<any>{
        var theOne = await this.adminRepository.findOne({username: username, password: password});
        return this.adminRepository.remove(theOne);
    }
    async findOne(username: string): Promise<Admin> {
        return this.adminRepository.findOne({username : username});
    }
}