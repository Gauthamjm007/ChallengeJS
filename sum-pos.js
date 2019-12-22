/*
 Title: Sum positive Numbers
Total Test Cases: 2


Body:

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

1. sumPos([1,-4,7,12]) returns 20

2. sumPos([]) returns 0

Note: if there is nothing to sum, the sum is default to 0
*/

function sumPos(arr = []) {
    const result = arr.filter(a => a > 0)
    let sum = 0
    for (const c of result) {
        sum += c
    }
    return sum
}
console.log(sumPos([1, -4, 7, 12]))
console.log(sumPos([]))