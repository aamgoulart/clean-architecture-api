import { UserData } from "../../entities/user-data";
import { UserRepository } from "../../usercases/ports/user-repository";
import { mongoHelper } from "./helper/mongo-helper";

export class MongodbUserRepository  implements UserRepository{
    async add(user: UserData): Promise<void> {
       const userCollection = mongoHelper.getCollection('users');
       if (!await this.exists(user)) {
           await userCollection.insertOne(user);
       }
    }
    findUserByEmail(email: string): Promise<UserData> {
        return mongoHelper.getCollection('users').findOne({email : email});
    }
    async findAllUsers(): Promise<UserData[]> {
        return await mongoHelper.getCollection('users').find().toArray();
    }
    async exists(user: UserData): boolean {
        if (await this.findUserByEmail(user.email) && await this.findUserByEmail(user.email) != null) {
            return true;
        }
        return false;
    }

}