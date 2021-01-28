import { User } from "./user";

describe('User domais entity', () => {
    test('shold not create user with invalid e-mail address', ()=> {
        const invalidEmail = 'invalidEmail';
        const error = User.create({
            name: 'anyName',
            email: invalidEmail
        }).value as Error;
        expect(error.name).toEqual("InvalidEmailError");
        expect(error.message).toEqual("Invalid Email" + invalidEmail);
    });

    test('should not create user with invalid name (too few char)', () => {
        const invalidName = '0      ';
        const error = User.create({
            name: invalidName,
            email: 'email@mail.com'
        }).value as Error;
        expect(error.name).toEqual('InvalidNameError');

        expect(error.message).toEqual("Invalid Name" + invalidName);

    })


    // test('should not create user with invalid name (too many char)', () => {
    //     const invalidName = '0'.repeat(257);
    //     const error = User.create({
    //         name: invalidName,
    //         email: 'email@mail.com'
    //     });
    //     expect(error).toEqual(left(new InvalidNameError));
    // });

    // test('shold craete user with valid data', () => {
    //     const validName = 'email.mail.com';
    //     const validUser = 'user';
    //     const user: User = User.create({
    //         name: validName,
    //         email: validUser
    //     });

    //     expect(user.email).toEqual(validName);
    //     expect(user.name).toEqual(validName);
    // })
})