/**
 Title: Merge & Remove Duplicates
Total Test Cases: 3


Body:

Write a JavaScript function to merge two arrays and removes all duplicates elements.

Test data :
1. mergeArray([1, 2, 3], [2, 30, 1]);
     return [3, 2, 30, 1]
 */
function mergeArray(arr1,arr2){
    return arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0))
}
 console.log(mergeArray([1, 2, 3], [2, 30, 1]))