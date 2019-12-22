/* Title: Fill Array with index
Total Test Cases: 2


Body:

Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

Test Data : 
1. numStringrange('a', "z", 2);
    return ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
*/

function numStringrange(a,b,c){
    let vowel = '.abcdefghijklmnopqrstuvwxyz'
    let initial_value=vowel.indexOf(a)
    let maximum_value = vowel.indexOf(b)
    let result = []
    let num=[]
    let temp

    if (a.constructor == String) {

        for (let i = initial_value; i < maximum_value; i += c) {
            temp = vowel[i]
            result.push(temp)
        }

        return result
    }

    else {
        for (let i = a; i < b; i+=c){
            num.push(i)
        }

        return num
    }

}