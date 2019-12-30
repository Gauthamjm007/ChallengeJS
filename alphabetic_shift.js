/*
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

Hints

split()
indexOf()
join()
Input/Output

[time limit] 4000ms (js)
[input] string inputString
Non-empty string consisting of lowercase English characters.

Guaranteed constraints:

1 ≤ inputString.length ≤ 10.

[output] string
The result string after replacing all of its characters.

 */

function alphabeticShift(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    str = str.split('')
    let alphaStr = str.map(strNew => alpha.indexOf(strNew))
    let result = alphaStr.map(strNew => alpha.charAt(strNew + 1))

    return result.join('')
}

console.log(alphabeticShift('crazy'))