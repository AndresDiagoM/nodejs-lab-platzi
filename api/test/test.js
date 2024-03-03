const request = require('supertest');
const { app } = require('../app.js');

describe('POST /api/v1/sign-up', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app)
      .post('/api/v1/sign-up')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });

    expect(response.statusCode).toBe(200);
  });
});