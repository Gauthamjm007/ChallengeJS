/*
 Title: Find Even or Odd
Total Test Cases: 2


Body:

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Test Case 

1. findEO(10) returns 'Even'

2. findEO(11) returns 'Odd'

*/


const findEO = (a => a % 2 == 0 ? 'Even' : 'Odd')
console.log(findEO(10))
console.log(findEO(11))