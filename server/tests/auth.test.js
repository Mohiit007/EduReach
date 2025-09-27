const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');

describe('Auth Routes (Template)', () => {
  test('POST /api/auth/register should validate payload', async () => {
    // TODO: mock DB and assert 400 on missing fields
    const res = await request(app).post('/api/auth/register').send({});
    expect([400, 500]).toContain(res.statusCode); // Template placeholder
  });

  test('POST /api/auth/login should require credentials', async () => {
    const res = await request(app).post('/api/auth/login').send({});
    expect([400, 401, 500]).toContain(res.statusCode);
  });
});
