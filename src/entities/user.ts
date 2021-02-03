import { right } from './../shared/either';
import { InvalidNameError } from './errors/invalid-name-error';
import { Either, left } from '../shared/either';
import { Email } from './email';
import { InvalidEmailError } from "./errors/invalid-email-error";
import { UserData } from "./user-data";
import { Name } from './name';

export class User {
    public readonly email: Email;
    public readonly name: Name;

    private constructor(name: Name, email: Email) {
        this.name = name;
        this.email = email;
    }

    static create(userData: UserData): Either<InvalidEmailError | InvalidNameError, User> {
        const emailOrError = Email.create(userData.email);
        const nameOrError = Name.create(userData.name);
        const name: Name = nameOrError.value as Name;
        const email: Email = emailOrError.value as Email;

        if (emailOrError.isLeft()) {
            return left(nameOrError.value);
        }

        if (nameOrError.isLeft()) {
            return left(emailOrError.value);
        }

        return right(new User(name, email));

    }
}