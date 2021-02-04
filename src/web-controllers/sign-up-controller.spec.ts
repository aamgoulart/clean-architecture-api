import { InvalidNameError } from "../entities/errors/invalid-name-error";
import { UserData } from "../entities/user-data";
import { UserRepository } from "../usercases/ports/user-repository";
import { InMemoryUserRepository } from "../usercases/user-register/repository/in-memory-user-repository";
import { HttpResponse } from "./ports/http-response";
import { HttpRequest } from "./ports/htttp-request"

describe ('Sign up web controller', () => {
    test('sould return status code 201 when request contains ', () => {
        const request: HttpRequest = {
            body: {
                name: 'Any name',
                email: 'any@mail.com'
            }
        }
        const users: UserData[] = [];
        const repo: UserRepository = new InMemoryUserRepository(users);
        const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo);
        const controller: RegisterUserController = new RegisterUserController(usecase);
        const response : HttpResponse = controller.handle(request);
        expect(response.statusCode).toEqual(201);
        expect(response.body).toEqual(request.body);
    });

    test('sould return status code 400 when request contains ', () => {
        const requestWithInvalidName: HttpRequest = {
            body: {
                name: 'Any name',
                email: 'any@mail.com'
            }
        }
        const users: UserData[] = [];
        const repo: UserRepository = new InMemoryUserRepository(users);
        const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo);
        const controller: RegisterUserController = new RegisterUserController(usecase);
        const response : HttpResponse = controller.handle(requestWithInvalidName);
        expect(response.statusCode).toEqual(400);
        expect(response.body).toBeInstanceOf(InvalidNameError);
    });
})