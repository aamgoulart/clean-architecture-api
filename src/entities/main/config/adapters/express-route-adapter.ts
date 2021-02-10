import { RegisterUserController } from "../../../../usercases/register-user-controller";
import { HttpRequest } from "../../../../web-controllers/ports/htttp-request";

export const adaptRout = (controller: RegisterUserController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body
        }
        const HttpResponse = await controller.handle(httpRequest);
        res.status(httpRequest.statusCode).json(HttpResponse.body);
    }
}