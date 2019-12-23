/**
 * Given the value of n, print the following pattern.

Input: n=5,

printPattern(5);

Output: 

        *
      * *
    * * *
  * * * * 
* * * * *
 */

 function printPattern(n){
     let str1=' ',str2='*'
     for(i=0;i<n;i++){
         console.log(str1.repeat(n-i)+str2.repeat(i+1))
     }
 }

 printPattern(5)