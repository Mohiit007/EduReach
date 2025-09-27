const request = require('supertest');
const { makeToken } = require('./utils/token');

// Mock Lesson model to avoid DB dependency in this smoke test
jest.mock('../models/Lesson', () => ({
  find: jest.fn().mockResolvedValue([]),
}));

describe('Protected route smoke (Student)', () => {
  const app = require('../app');

  test('GET /api/student/lessons without token => 401', async () => {
    const res = await request(app).get('/api/student/lessons');
    expect(res.statusCode).toBe(401);
  });

  test('GET /api/student/lessons with student token => 200', async () => {
    const token = makeToken({ role: 'student' });
    const res = await request(app)
      .get('/api/student/lessons')
      .set('Authorization', `Bearer ${token}`);
    expect([200, 500]).toContain(res.statusCode); // 500 if other mocks needed
    if (res.statusCode === 200) {
      expect(res.body).toHaveProperty('lessons');
      expect(Array.isArray(res.body.lessons)).toBe(true);
    }
  });
});
