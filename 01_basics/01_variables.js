const accountId = 59342
let accountEmail = "ayush28@gmail.com"
var accountPassword = "12845"
accountCity = "Indore"
let accountState //value will be undefined

// accountId = 58183 //it is not allowed to change "const"
accountEmail = "abc123@gmail.com"
accountPassword = "absdf"
accountCity = "Jaipur"

// console.log(accountId) //to display something

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //to display in table