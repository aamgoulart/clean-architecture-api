import { request } from 'supertest'
import app from './app'

describe('Content type Middleware', () => {
    test('shoul return default content type as json', async () => {
        app.get('/test_content_type', (req, res) => {
            res.send('');
        });
        await request(app).get('/test_content_type').expect('content-type', /json/)
    });

    test('should return xml content type when forced', async () =>  {
        app.get('/test_content_type', (req, res) => {
            res.send('');
            res.type('');
        });

        await request(app).get('/test_content_type_xml').expect('content-type', /xml/)

    })
})