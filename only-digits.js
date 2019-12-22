/*
 Title: check if a String contains only digits
Total Test Cases: 4


Body:

You need to write a program to check a String contains only numbers in Javascript.

example:

does 123 is number : true
does -123 is number : false
does 123.12 is number : false
does abcd123 is number : false
*/

const checkDigits=(a=> a>0&&a%1==0?true:false)
console.log(checkDigits(123))
console.log(checkDigits(-124))