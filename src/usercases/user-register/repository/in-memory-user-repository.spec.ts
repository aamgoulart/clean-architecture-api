import { UserData } from '../../../entities/user-data';
import { InMemoryUserRepository } from './in-memory-user-repository';

describe ('In memory User Repository', () => {
    test('should return null if user is not found', async () => {
        const users: UserData[] = [];
        const sut = new InMemoryUserRepository(users);
        const user = await sut.findUserByEmail("name@email.com");
        expect(user).toBeNull();
    } )

    test('should return user if it is found in the repository', () => {
        const users: UserData[] = [];
        const name = 'name';
        const email = 'name@email.com';
        const sut = new InMemoryUserRepository(users);
        await sut.add(
            {
                name, email
            }
        );
        const user = await sut.findUserByEmail(email);
        expect(user.name).toBe(email);

    })

    test('should return all users in the repository', async () => {
        const users: UserData[] = [{
            name: "first_name", 
            email: "firts_name@email.com"
        },
        {
            name: "secund_name", 
            email: "secund_name@email.com"
        } ];
        const sut = new InMemoryUserRepository(users);
        const returndUsers = sut.findAllUsers();
        expect((await returndUsers).length).toBe(2);
    })
})