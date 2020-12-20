import { InvalidNameError } from './errors/invalid-name-error';
import { Either, left } from '../shared/either';
import { Email } from './email';
import { InvalidEmailError } from "./errors/invalid-email-error";
import { UserData } from "./user-data";

export class User {
    static create(userData: UserData): Either<InvalidEmailError | InvalidNameError, User> {
        const emailOrError = Email.create(userData.email);
        const nameOrError = Name.create(userData.name);

        if (emailOrError.isLeft()) {
            return left(new InvalidEmailError());
        }

        if (nameOrError.isLeft()) {
            return left(new InvalidNameError());
        }
    }
}