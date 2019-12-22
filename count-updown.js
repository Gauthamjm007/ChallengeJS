/*
 Title: Count Up then Down
Total Test Cases: 2


Body:

Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.

Examples:

    INPUT: countUpThenDown(2)
    OUTPUT: [0, 1, 2, 1, 0]

    INPUT: countUpThenDown(0)
    OUTPUT: [0]

    */

function countUpThenDown(a) {
    let result = []
    for (let i = 0; i < a * 2 + 1; i++) {
        i < a + 1 ? result.push(i) : result.push(result[i - 1] - 1)
    }
    return result

}
console.log(countUpThenDown(4))
console.log(countUpThenDown(3))
console.log(countUpThenDown(2))
console.log(countUpThenDown(0))