/**
Assignment: 20-12-19 Class Assignments
Title: find min and max key in an object
Total Test Cases: 2


Body:

Write a function called minMaxKeyInObject that accepts an object with numeric keys.*

The function should return an array with the following format: [lowestKey, highestKey]

Examples:

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });

// [1, 10]

minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });

// [1, 4] */


function minMaxKeyInObject(a) {

    let result = []
    let arr = Object.keys(a)
    let minNum = Math.min(...arr)
    result.push(minNum)
    let maxNum = Math.max(...arr)
    result.push(maxNum)

    return result
    

}