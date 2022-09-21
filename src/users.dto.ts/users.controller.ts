import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
// import { User } from "src/model/user.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { UsersService } from "./users.service";
import { ApiTags } from '@nestjs/swagger'
// import { UserDTO } from "./user.dto";
import { UserPost } from "../model/user.interface"
import e from "express";

@ApiTags('User')
@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() userPost: UserPost): Promise<UserPost> {
        return this.usersService.createOne(userPost);
    }
    @Get()
    async findAllUsers(): Promise<UserPost[]> {
        return await this.usersService.findAll();
    }

    @Get('/province/:provice')
    async findStudentByProvice(@Param('provice') prov: string): Promise<UserPost[]> {
        const data = await this.usersService.findByProvince(prov);
        if (data.length === 0) {
            throw new NotFoundException("Province Not Found")
        } else {
            console.log(data)
            return data
        }
    }

    @Get('/section/:section')
    async findStudentBySec(@Param('section') sec: string): Promise<UserPost[]> {
        // return await this.usersService.findOne(id);
        if (sec.length > 1) {
            throw new BadRequestException("Invalid Section")
        } else {
            const data = await this.usersService.findBySection(sec);
            if (data.length === 0) {
                throw new NotFoundException("Section Not Found")
            } else {
                console.log(data)
                return data
            }
        }
    }

    @Get(':id')
    async findUserById(@Param('id') id: string): Promise<UserPost> {
        // return await this.usersService.findOne(id);
        const user = await this.usersService.findOne(id);
        if (!user) {
            throw new NotFoundException("ID not found");
        } else {
            return user
        }
    }


    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() userPost: UserPost): Promise<UpdateResult> {
        const user = await this.usersService.findOne(id);
        // console.log(user)
        if (!user) {
            throw new NotFoundException("ID not found");
        } else {
            return await this.usersService.updateOne(id, userPost);
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<DeleteResult> {
        // return await this.usersService.delete(id);
        const user = await this.usersService.findOne(id);
        // console.log(user)
        if (!user) {
            throw new NotFoundException("ID not found");
        } else {
            return await this.usersService.delete(id);
        }
    }
}

https://github.com/nestjs/typescript-starter.git
https://github.com/Hua-Meng14/b8StudentDashboard_vue_nest_postgres.git