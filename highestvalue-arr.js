/**
 *  Title: Highest value
Total Test Cases: 2


Body:

Write a JavaScript function to find the highest value in an array.
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56 
0
 */

const max=(arr=>Math.max(...arr))
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));