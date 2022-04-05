const  mymodules = require('../main')
const capitalizeString = mymodules.capitalizestring;

test('capitalize jenadius , equal to Jenadius', ()=>{
    const stringToCapitalize = 'jenadius';
    const output =capitalizeString(stringToCapitalize)
    expect(output).toBe('Jenadius')
})