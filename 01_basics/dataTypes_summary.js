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

const myFunction = function(){ // function
    console.log("Hello World")
}




// +++++++++++++++++++++++++++ Stack and heap memory +++++++++++++++++++++++++++ //

// Stack (Primitive), Heap (Non-primitive)

// In stack, you get the copy of the variable declared
// In heap, you get the reference of the original heap


// stack example:

let myChannelName = "agastya"

let anotherName = myChannelName
anotherName = "ayush"

console.log(myChannelName); // agastya
console.log(anotherName); // ayush

// heap example:

let userOne = {
    email: "user123@gmail.com",
    upi: "8747@ybl"
}

let userTwo = userOne

userTwo.email = "sexyuser@gmail.com"

console.log(userOne.email); // sexyuser@gmail.com
console.log(userTwo.email); // sexyuser@gmail.com