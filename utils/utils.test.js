const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var result = utils.add(33, 11);
        
            expect(result).toBeA('number').toBe(44);
        });
        
        it('should async add two numbers', (done) => {
            utils.asyncAdd(2,5, (result) => {
                expect(result).toBeA('number').toBe(7);
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square a number', ()=>{
            var result = utils.square(2);
        
            expect(result).toBeA('number').toBe(4);
        });
        
        it('should async square a number', (done) => {
            utils.asyncSquare(8, (result) => {
                expect(result).toBeA('number').toBe(64);
                done();
            });
        });
    });

    describe('#setName', () => {
        it('should verify first and last names', () => {
            var user = { location: 'Brazil', age: 26 };
            utils.setName(user, 'Leonel Liesenberg');
        
            expect(user).toBeAn('object').toInclude({ firstName: 'Leonel', lastName: 'Liesenberg' });
        });
    });

    describe('others', () => {
        it('should test some values', () => {
            var obj = { Name: 'Leonel', age: 26 };
            var obj2 = { Name: 'leonel' };
        
            expect(obj).toNotEqual(obj2);
        
            var arr = [1,2,3];
            
            expect(arr).toExclude(4);
        
            expect(obj).toInclude({Name:'Leonel'});
        });
    });
});