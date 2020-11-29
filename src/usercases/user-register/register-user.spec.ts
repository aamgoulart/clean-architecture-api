import { UserData } from "./user-data";

describe('Register user on mailing lis use case', () => {
    test("should add user with complete data to mailing list", () => {
        const users: UserData[] = [];
        const repo: UserRepository = new InMemoryUserRepository(users);
        const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo);
        const name = 'anyName';
        const email =  'name@email.com';
        const response = await usecase.registerUserOnMailingList({name, email});
        const user = repo.findUserByEmail("name@email.com");
        expect ((await user).name).toBe('anyName');
    })
});