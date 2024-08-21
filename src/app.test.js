const app = require('./app')
const supertest = require('supertest')
const requset = supertest(app)

describe('tesst endpoint', () => {
    it('should return response and message', async() => {
        const response = await requset.get('/test')
        expect(response.status).toBe(200);
        expect(response.text).toBe('Test node emdpoint is work');
    });
});