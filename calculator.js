class Calculator{
    constructor(num1 , num2){
        this.num1=num1; 
        this.num2=num2;
    }

    add = () =>{
        return this.num1 + this.num2;
    }

    subtract = () =>{
        return  this.num1 - this.num2;
    }

    multiply = () => {
        return this.num1 * this.num2;
    }


    divide = () => {
        return this.num1 / this.num2;
    }
}

let calculator = new Calculator(2, 2);
const add = calculator.add();
console.log('add', add)
const sub = calculator.subtract();
console.log('sun', sub )
const mult = calculator.multiply();
console.log('mult', mult)
const div = calculator.divide();
console.log('div', div)

module.exports =  Calculator;

