import { User } from "@prisma/client";
import { CreateUserDTO } from "../dto/create-user-dto";

export abstract class UsersRepository {
   abstract addUser(data: CreateUserDTO): Promise<void>
   abstract findUserByEmail(email:string): Promise<User>
}