const request = require('supertest');
const app = require('./index');

describe('GET /hello', () => {
  it('Hello, World!', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, Worlds!');
  });
});

describe('POST /sum', () => {
  it('Yigindi', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 5, b: 10 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(15);
  });

  it('minus sonlar yigindi', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: -3, b: -7 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-10);
  });

  it('xatolik', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: "a", b: 2 });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Son bo'lishi kerak");
  });
});
