/*

Title: Sum 2 Array Indexes
Total Test Cases: 3


Body:

There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.


Sample array : 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output : 
[4, 5, 8, 10, 12, 13] 

*/


function sumTwoArrayIndexes(a, b) {
    if (a.length !== b.length) {

        if (a.length > b.length) {
            b.push(0)
        } else {
            a.push(0)
        }



    }
    let result = 0
    let resArr = []
    for (i = 0; i < a.length; i++) {
        result = a[i] + b[i]
        resArr.push(result)
    }

    return resArr

}