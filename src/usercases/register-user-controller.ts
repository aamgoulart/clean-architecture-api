import { HttpResponse } from "../web-controllers/ports/http-response";
import { HttpRequest } from "../web-controllers/ports/htttp-request";
import {  UserCase } from "./ports/use-cases";

export class RegisterUserController {
    private readonly usecase: UserCase;

    constructor(usecase: UserCase) {
        this.usecase = usecase;
    }

    public  handle(request: HttpRequest): Promise<HttpResponse> {
        const userData = request.body;
        const response = this.usecase.perform(userData);
        try {
            if (response.isRight()) {
                const HttpResponse = 
                {
                    statusCode: 201,
                    body: {
                        email: response.value.email,
                        name: response.value.name
                    }
                }
                return response.value;
            }
    
            if (response.isLeft()) {
                const HttpResponse = 
                {
                    statusCode: 400,
                    body: {
                        email: response.value.email,
                        name: response.value.name
                    }
                }
                return response.value;
            }
    
            if(request.body.name || !!request.body.email) {
                const HttpResponse = 
                {
                    statusCode: 400,
                    body: {
                        email: response.value.email,
                        name: response.value.name
                    }
                }
                return response.value;
            }

        } catch(error) {
            const HttpResponse = 
            {
                statusCode: 500,
                body: {
                    email: response.value.email,
                    name: response.value.name
                }
            }
            return response.value;
        }
        

    }
}