import request from 'supertest';

import app from '../src/app';

describe('Root api', () => {
  it('should return 404 for non existence endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(404);
  });
});
