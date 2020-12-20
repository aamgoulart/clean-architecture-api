import { left } from "../shared/either";
import { InvalidEmailError } from "./errors/invalid-email-error";
import { InvalidNameError } from "./errors/invalid-name-error";
import { User } from "./user";

describe('User domais entity', () => {
    test('shold not create user with invalid e-mail address', ()=> {
        const invalidEmail = 'invalidEmail';
        const error = User.create({
            name: 'anyName',
            email: invalidEmail
        });
        expect(error).toEqual(left(new InvalidEmailError()));
    });

    test('should not create user with invalid name (too few char)', () => {
        const invalidName = '0      ';
        const error = User.create({
            name: invalidName,
            email: 'email@mail.com'
        });
        expect(error).toEqual(left(new InvalidNameError));
    })


    test('should not create user with invalid name (too many char)', () => {
        const invalidName = '0'.repeat(257);
        const error = User.create({
            name: invalidName,
            email: 'email@mail.com'
        });
        expect(error).toEqual(left(new InvalidNameError));
    });
})