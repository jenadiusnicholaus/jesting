class StringLengthException {
    constructor(message) {
        this.message = message;
        
    }
}

stringLength = (string) => {
    const minLenth = 1;
    const maxLength=10;
    stringcount = string.lenght;
   if( string.length > minLenth && string.length < maxLength ){
    return string.length;
   } 
   return new StringLengthException('String must be not less that 1 and not longer that 10').message

}

reverseString= (string) =>{
    return [...string].reverse().join("");
}

capitalizeString = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}




console.log(stringLength(''));
// String must be not less that 1 and not longer that 10

console.log(stringLength("jenadius"));
// 8

console.log(reverseString('hello'))
// expects to return olleh

console.log(capitalizeString('jenadius'))
// jenadius

module.exports ={
    reversestring: reverseString,
    stringlength: stringLength,
    capitalizestring: capitalizeString,

}


