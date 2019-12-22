/*
 Title: Reverse a Number
Total Test Cases: 2


Body:

 Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223 

*/

const reverseNumber=(a=> a.toString().split('').map(Number).reverse().join(''))
console.log(reverseNumber(32243))