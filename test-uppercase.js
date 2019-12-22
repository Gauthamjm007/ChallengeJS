/*


Write a JavaScript function to test whether the character at the provided (character) index is upper case. 
Test Data :
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false




*/
const isUpperCaseAt = (str, a) => str[a] == str[a].toUpperCase() ? true : false

console.log(isUpperCaseAt('Js STRING EXERCISES', 1))