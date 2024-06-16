// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2024, 0 ,23)
// let myCreatedDate = new Date(2024, 0 ,23, 5, 3)
let myCreatedDate = new Date("3-01-2024")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('en-IN',{
    weekday: "long",
}))