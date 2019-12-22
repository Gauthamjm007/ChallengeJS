/*
 Title: Sum the Digits
Total Test Cases: 2


Body:

Create the function sumOfDigits that adds individual digits of a number, and returns the sum.

Examples:

    INPUT: sumOfDigits(414);
    OUTPUT: 9

    INPUT: sumOfDigits(2913);
    OUTPUT: 15

*/


const sumOfDigits = (a => a.toString().split('').map(Number).reduce((a, b) => a + b, 0))
console.log(sumOfDigits(414))
console.log(sumOfDigits(2913))