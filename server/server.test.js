const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect(200)
            .expect('Hello World!')
            .end(done);
        });
    });

    describe('Get /users', () => {
        it('should return my object', (done) =>{
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({ name: 'Leonel', age: 26 });
            })
            .end(done);
        });
    });
});