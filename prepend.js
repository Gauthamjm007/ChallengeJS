/*
 Title: prepend to string
Total Test Cases: 3


Body:

Write a function called prependToString, which accepts two strings.

The function should return a new string with the second string prepended to the first string.

Examples:

prependToString('awesome', 'very') // 'veryawesome'
prependToString('world', 'hello ') // 'hello world'
prependToString('nothing', '') // 'nothing'
 */

const prependToString = ((a, b) => b.concat(a))

console.log(prependToString('awesome', 'very'))
console.log(prependToString('nothing', ''))