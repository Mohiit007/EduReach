const request = require('supertest');
const app = require('../app');

describe('Virtual Lab Routes (Template)', () => {
  test('GET /api/virtual-lab/experiments requires auth', async () => {
    const res = await request(app).get('/api/virtual-lab/experiments');
    expect([401, 403]).toContain(res.statusCode);
  });

  test('POST /api/virtual-lab/:id/simulate requires auth', async () => {
    const res = await request(app).post('/api/virtual-lab/123/simulate').send({ inputs: {} });
    expect([401, 403]).toContain(res.statusCode);
  });
});
