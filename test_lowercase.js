/*Title: Test lower case
Total Test Cases: 2


Body:

Write a JavaScript function to test whether the character at the provided (character) index is lower case. 
Test Data :
console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
*/
const isLowerCaseAt = (str, a) => str[a] == str[a].toLowerCase() ? true : false


console.log(isLowerCaseAt('Js String', 1))