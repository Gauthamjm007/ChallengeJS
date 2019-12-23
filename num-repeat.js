/**
 *  Title: Print pattern with numbers
Total Test Cases: 0


Body:

Given the value of n, print the following pattern.

Input: n=5,

printPattern(5);

Output: 

55555
4444
333
22
1
 */

 function printPattern(num) {
     for(i=num;i>0;i--){   
        console.log(i.toString().repeat(i))
     }
     
     
 }

 printPattern(5)