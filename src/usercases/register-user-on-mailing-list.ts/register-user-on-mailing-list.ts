import { UseCase } from "../ports/use-cases";
import { UserRepository } from "../ports/user-repository";

export class RegisterUserOnMailingList implements UseCase {
    private readonly userRepo: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }
    
    perform(request: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}