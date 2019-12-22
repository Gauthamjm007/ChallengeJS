/*

 Title: Grasshopper - Summation
Total Test Cases: 3


Body:
Summation

Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8



*/



function summation(n) {

    let result = 0

    function sum(n) {
        result += n
        n > 0 ? sum(n - 1) : result
        return result
    }
    result = sum(n)
    return result
}

console.log(summation(8))
console.log(summation(2))