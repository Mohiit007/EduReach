const request = require('supertest');
const app = require('../app');

// Note: For real tests, mock JWT middleware or generate a valid token.

describe('Student Routes (Template)', () => {
  test('GET /api/student/lessons requires auth', async () => {
    const res = await request(app).get('/api/student/lessons');
    expect([401, 403]).toContain(res.statusCode);
  });

  test('POST /api/student/offline/sync requires auth', async () => {
    const res = await request(app).post('/api/student/offline/sync').send({});
    expect([401, 403]).toContain(res.statusCode);
  });
});
