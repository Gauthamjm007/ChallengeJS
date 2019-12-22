
/** Title: Square even numbers and return sum of squared
Total Test Cases: 3


Body:

Write a function called squareEvenNumbers which accepts an array and returns the sum of all of the even numbers in the array squared.

Examples:

squareEvenNumbers([1, 2, 3, 4, 5]); // 20

squareEvenNumbers([1, 3, 5, 7]); // 0

squareEvenNumbers([5, 6, 7]); // 36 */

function squareEvenNumbers(a) {
    let re=0
    const evenNum = a.filter(n => n%2==0)
    const Arr = evenNum.map(n => Math.pow(n, 2))
    
    for (const c of Arr) {
        re+=c
    }
    return re

}