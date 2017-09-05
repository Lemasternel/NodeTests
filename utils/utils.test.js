const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var result = utils.add(33, 11);

    expect(result).toBe(44).toBeA('number');
});

it('should square a number', ()=>{
    var result = utils.square(2);

    expect(result).toBe(4).toBeA('number');
});

it('should verify first and last names', () => {
    var user = { location: 'Brazil', age: 26 };
    utils.setName(user, 'Leonel Liesenberg');

    expect(user).toInclude({ firstName: 'Leonel', lastName: 'Liesenberg' }).toBeAn('object');
});

it('should test some values', () => {
    var obj = { Name: 'Leonel', age: 26 };
    var obj2 = { Name: 'leonel' };

    expect(obj).toNotEqual(obj2);

    var arr = [1,2,3];
    
    expect(arr).toExclude(4);

    expect(obj).toInclude({Name:'Leonel'});
});