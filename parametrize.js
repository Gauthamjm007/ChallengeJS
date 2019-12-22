/*
 Title: Parameterize
Total Test Cases: 2


Body:

Write a JavaScript function to parameterize a string. 
Test Data :
stringParameterize("Robin Singh from USA.")
"robin-singh-from-usa"
 */

const stringParameterize = (str, result = '') => {
    str = str.split(' ').forEach(function(newStr) {
        result += newStr.charAt(0).toLowerCase() + newStr.slice(1).toLowerCase() + '-'
    })
    return result.slice(0, result.length - 1)
}
console.log(stringParameterize("Robin Singh from USA"))