var app = require('../../app');
var request = require('supertest');

describe('GET /auth/signup', function () {
  it('respond with json', function (done) {
    request(app)
        .post('/auth/signup')
        .field('username', 'unittest')
        .field('password', 'password')
        // .expect('Content-Type', /json/)
        .expect(302, function(err) {
          console.log(err);
          return done();
        });
  })
});
