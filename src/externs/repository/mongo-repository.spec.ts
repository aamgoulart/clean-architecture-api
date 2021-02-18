import { mongoHelper } from "./helper/mongo-helper"
import { MongodbUserRepository } from "./mongo-user-repository";

describe('MOngodb User repository', () => {
    beforeAll(async () => {
        await mongoHelper.connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
        await mongoHelper.disconnect();
    });

    beforeEach(async () => {
        mongoHelper.clearCollection('users');
    });

    test('when user is added, it should exist', async () => {
        const userRepository = new MongodbUserRepository();
        await userRepository.add({
            name: 'any_name',
            email: 'any_email@mail.com'
        });
        expect(await userRepository.exists(userRepository).toBeTruthy())
    });
})