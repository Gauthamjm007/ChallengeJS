/*
 Title: Simple Multiplication
Total Test Cases: 2


Body:

Write a function for multiplying a given number by eight if it is an even number and by nine otherwise.

TEST CASE : 

1. multiplyMe(2)
returns 16

2. multiplyMe(3)
returns 27 

*/

const multiplyMe = function(a) {
    return a % 2 == 0 ? a * 8 : a * 9
}

console.log(multiplyMe(2))
console.log(multiplyMe(3))