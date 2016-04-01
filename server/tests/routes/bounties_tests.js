var app = require('../../app');
var request = require('supertest');

describe('GET /api/bounties', function () {
  it('respond with json', function (done) {
    request(app)
        .get('/api/bounties')
        .expect('Content-Type', /json/)
        .expect(200, function(err) {
          if (err) console.log(err);
          return done();
        });
  })
});