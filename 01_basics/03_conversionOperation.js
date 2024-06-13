let score1 = "33abc"
let score2 = null
let score3 = undefined
let married = false

console.log(typeof (score1)); //string
console.log(typeof (score2)); //object
console.log(typeof (score3)); //undefined
console.log(typeof(married)); //boolean

let valueInNumber1 = Number(score1)
console.log(typeof (valueInNumber1)); //number
console.log(valueInNumber1); //NaN : Not a Number

let valueInNumber2 = Number(score2)
console.log(typeof (valueInNumber2)); //number
console.log(valueInNumber2); // 0

let valueInNumber3 = Number(score3)
console.log(typeof (valueInNumber3)); //number
console.log(valueInNumber3); //NaN : Not a Number

let inNumber = Number(married)
console.log(typeof(inNumber)) //number
console.log(inNumber); //0


/* Some notes:
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// " " => false
// "ayush" => true
// 33 => "33"
*/