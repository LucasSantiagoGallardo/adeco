const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { app, resetData } = require('./server');

test('employee and hours endpoints', async () => {
  resetData();

  let res = await request(app)
    .post('/api/employees')
    .send({ name: 'Alice', role: 'Dev' })
    .expect(201);
  assert.equal(res.body.id, 1);

  res = await request(app).get('/api/employees').expect(200);
  assert.equal(res.body.length, 1);

  res = await request(app)
    .post('/api/hours')
    .send({ employeeId: 1, date: '2024-01-01', hours: 8 })
    .expect(201);
  assert.equal(res.body.employeeId, 1);

  res = await request(app).get('/api/hours').expect(200);
  assert.equal(res.body.length, 1);
});
