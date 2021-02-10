import { RegisterUserController } from "../../../../usercases/register-user-controller";
import { RegisterUserOnMailingList } from "../../../../usercases/register-user-on-mailing-list.ts/register-user-on-mailing-list";
import { InMemoryUserRepository } from "../../../../usercases/user-register/repository/in-memory-user-repository";

export const makeRegisterUserController = (): RegisterUserController => {
    const inMemoryUserRepository = new InMemoryUserRepository([]);
    const registerUserOnMailingList = new RegisterUserOnMailingList(inMemoryUserRepository);
    const registerUserController = new RegisterUserController(registerUserOnMailingList);
    return registerUserController;
}