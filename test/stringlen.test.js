const  mymodules = require('../main');
const stringLength = mymodules.stringlength;

describe('String counter', ()=>{
    // valid test
    test('Jenadius equal 8 characters', () => {
        const stringToCount = 'jenadius';
        const stringCounter = stringLength(stringToCount);
        expect(stringCounter).toBe(8);
    });
    // Test when string  length is less that 1
    test('String equal empty', () => {
        const stringToCount = '';
        const stringCounter = stringLength(stringToCount);
        expect(stringCounter).toBe('String must be not less that 1 and not longer that 10');
    }); 
    // Test when the string is greater that 10
    test('String greater that 10', () => {
        const stringToCount = 'jenadiusnicholaus';
        const stringCounter = stringLength(stringToCount);
        expect(stringCounter).toBe('String must be not less that 1 and not longer that 10');
    });  
});



