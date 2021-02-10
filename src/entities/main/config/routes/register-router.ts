import { Router } from 'express';
import { adaptRout } from '../adapters/express-route-adapter';
import { makeRegisterUserController } from '../factories/register';

export default (router: Router): {
    router.post('register', adaptRout(makeRegisterUserController()));
}