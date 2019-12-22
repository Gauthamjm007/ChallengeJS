/*
 Title: Dash between even
Total Test Cases: 2


Body:

Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers.
 For example if you accept putDash('025468')
  the output should be '0-254-6-8'. 
 */

 function putDash(str,result=''){
     
     for(i=0;i<str.length;i++){
        Number(str[i])%2==Number(str[i+1])%2?result+=str[i]+'-':result+=str[i]
     }
     return result
 }

 console.log(putDash('025468'))