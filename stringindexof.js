/*Title: stringIndexOf
Total Test Cases: 2


Body:

Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or -1 if the character is not found.

Do not use the built in String.indexOf() function!

Examples:

stringIndexOf('awesome', 'e') // 2
stringIndexOf('awesome', 'z') // -1

*/

const stringIndexOf = function(str, a) {
    let result = -1
    for (i = 0; i < str.length; i++) {
        if (str[i] == a) {
            result = i
            break
        }
    }
    return result
}

console.log(stringIndexOf('awesome', 'e'))