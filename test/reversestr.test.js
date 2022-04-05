const  mymodules = require('../main')
const reverseString= mymodules.reversestring;

test('hello must return olleh', () => {
    const stringToReverse = 'hello';
    const output = reverseString(stringToReverse);
    expect(output).toBe('olleh')
});





