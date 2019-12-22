/*
 Title: Count the Number of Occurrences
Total Test Cases: 2


Body:

Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments : 'dct academy' ,  'c' 
Expected output : 2 
 

*/

const numberOfOccurance=((a, b) =>a.split('').filter(ele=>ele==b).length)

console.log(numberOfOccurance('dct academy','c'))