const Calculator = require('../calculator')

describe('Calculator test', () => {
    test('add 2 + 2 equal to 4', () => {
        let calculator = new Calculator(2, 2);
        const output = calculator.add();
        expect(output).toBe(4)
    });
    // test sbraction
    test('subract, 2 - 2 equal', ()=>{
        let calculator = new Calculator(2, 2);
        const output = calculator.subtract();
        expect(output).toBe(0);

    })
    // test multication
    test('multpy, 2 * 2 equal', ()=>{
        let calculator = new Calculator(2, 2);
        const output = calculator.multiply();
        expect(output).toBe(4);
        
    });

    test('divide, 2 / 2 equal 0', ()=>{
        let calculator = new Calculator(2, 2);
        const output = calculator.divide();
        expect(output).toBe(1);
        
    });

})