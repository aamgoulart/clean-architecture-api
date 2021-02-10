import app from "./app"

describe ('CORS Middleware', () => {
    test('should enable CORS', async () => {
        app.post('test_cors', (req, res) => {
            res.send();
        });
        await request(app).get('/test_cors').expect('access-control-allow-origin', '*')
    });
});