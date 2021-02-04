import { HttpResponse } from "../web-controllers/ports/http-response";
import { HttpRequest } from "../web-controllers/ports/htttp-request";

export class RegisterUserController {
    private readonly usecase: RegisterUserOnMailList;

    constructor(usecase: RegisterUserOnMailingList) {
        this.usecase = usecase;
    }

    public  handle(request: HttpRequest): Promise<HttpResponse> {
        const userData = request.body;
        const response = this.usecase.registerUserOnMailingList(userData);

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

    }
}