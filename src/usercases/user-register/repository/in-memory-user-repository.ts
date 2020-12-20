import { UserData } from '../../../entities/user-data';
import { UserRepository } from './../../ports/user-repository';

export class InMemoryUserRepository implements UserRepository {

    private repository: UserData[];

    constructor(users: UserData[]) {
        this.repository = users;
    }

    async add(user: UserData): Promise<void> {
        const exists  = await this.exists(user);
        if(!exists) {
            this.repository.push(user);
        }
    }

    async findUserByEmail(email: string): Promise<UserData> {
        const users = this.repository.filter( (user) => {
            return user.email === email;
        })
        return users.length > 0 ? users[0] : null;
    }

    async findAllUsers(): Promise<UserData[]> {
        return this.repository;
    }

    exists(user: UserData): boolean {
        return this.findUserByEmail(user.email) === null ? false : true;
    }

}