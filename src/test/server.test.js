import request from 'supertest';

import app from '../app';

describe('Root api', () => {
  it('should return 404 for non existence endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(404);
  });
});
