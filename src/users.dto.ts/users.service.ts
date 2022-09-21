import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { User } from "src/model/user.entity";
// import { UserPostDTO } from "./UserPost.dto";
import { UserPost } from "src/model/user.interface";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}

    async createOne(userPost: UserPost): Promise<UserPost> {
        return this.usersRepository.save(userPost);
    }

    async findAll(): Promise<UserPost[]> {
        return this.usersRepository.find();
    }

    async findBySection(section: string ): Promise<UserPost[]> {
        return this.usersRepository.findBy({ section });
    }

    async findByProvince(province: string ): Promise<UserPost[]> {
        return this.usersRepository.findBy({ province });
    }

    async findOne(id: string): Promise<UserPost> {
        return this.usersRepository.findOneBy({ id });
    }

    async updateOne(id: string, userPost: UserPost): Promise<UpdateResult> {
        return this.usersRepository.update(id, userPost);
    }

    async delete(id: string): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }

} 
