/*  
Write a JavaScript function to check whether an `input` is a string or not.


Test Data :
isString('DCT Academy') 
true
isString([1, 2, 4, 0])
false
*/


const isString = (str) => str.constructor == String ? true : false
console.log(isString('DCT Academy'))
console.log(isString([1, 2, 4, 0]))