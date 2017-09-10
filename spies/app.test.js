const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    
    it('should call spy correctly', () => {
        var spy = expect.createSpy();
        spy('Leonel', 26);
    
        expect(spy).toHaveBeenCalled('Leonel', 26);
    });

    it('should call saveUser with user object', () => {
        var email = 'myemail@example.com';
        var password = 'mypassword';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    })
});