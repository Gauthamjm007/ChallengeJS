/*
 Title: Generate an Array by Range
Total Test Cases: 3


Body:

Write a JavaScript function to generate an array between two integers of 1 step length. 

Test Data :
1. rangeBetween(4, 7); 
// returns [4, 5, 6, 7]

2. rangeBetween(-4, 7);
// returns [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 */

 function rangeBetween(a,b,result=[]){
    for(i=a;i<b+1;i++){
        result.push(i)
    }
    return result
 }

 console.log(rangeBetween(4,7))
 console.log(rangeBetween(-4, 7))