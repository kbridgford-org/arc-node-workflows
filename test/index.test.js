const request = require('supertest');
const { expect } = require('chai');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello World with thumbsUp image', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<h1>Hello World!</h1>');
        expect(res.text).to.include('<img src="thumbsUp.jpeg" alt="Vault Boy">');
        done();
      });
  });
});

after(() => {
  process.exit(0);
});
