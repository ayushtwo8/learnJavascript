const name = "ayush" // one way of declaring string
const repoCount = 5

// console.log(name + repoCount + " value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ayush-28'); // another way of declaring string

// console.log(gameName[0]);
// // console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4 , 5)
console.log(anotherString);

const newStringOne = "    ayush   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "http://one8.com/ayush%20tiwari"

console.log(url.replace('%20', '-'));

console.log(url.includes('ayush'))

console.log(gameName.split('-'));