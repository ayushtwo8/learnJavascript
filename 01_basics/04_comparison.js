// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // true
// always check for the same dataType

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/* 
The reason is that an equality check and comparisons 
 > < >= <= work differently.
 Comparisons convert null to a number, treating it as 0.
 That'why (3) null >= 0 is true (1) null > 0 is false. 
*/

// strict check: ===
console.log("2" === 2); // false
