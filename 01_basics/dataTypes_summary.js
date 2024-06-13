// Primitive : 

// 7 types : String, Number, Boolean, null, undefined, symbol, 
// BigInt

const score = 100 // number
const scoreValue = 100.3 // number


const isLoggedIn = false // boolean
const outsideTemp = null // object
let userEmail; // undefined


const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol


// console.log(id === anotherId) // false

const bigNumber = 23467787653454657686434n; // bigint


// Reference (Non primitive) :

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]  //object

let obj = { // object
    firstName: "ayush",
    age: 21
}

const myFunction = function(){ 
    console.log("Hello World")
}

console.log(typeof myFunction)  // function