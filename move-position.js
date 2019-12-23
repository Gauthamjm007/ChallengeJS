/**
 Title: Moving Element from one position to another
Total Test Cases: 3


Body:

Write a JavaScript function to move an array element from one position to another. 

Test Data :
1. move([10, 20, 30, 40, 50], 0, 2);
return [20, 30, 10, 40, 50]

2. move([10, 20, 30, 40, 50], 1, 2);
return [10, 30, 20, 40, 50]

 */

 function move(arr,arrFrom,arrTo){
     let temp_arr=Number(arr.splice(arrFrom,1))
     arr.splice(arrTo,0,temp_arr)
     return arr
 }

 console.log( move([10, 20, 30, 40, 50], 0, 2))
 console.log(move([10, 20, 30, 40, 50], 1, 2))