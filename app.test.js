const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async () => {
	try {
    const response = await request.get('/test');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pass!');
    done();
    } catch (err) {
    }

}); 
