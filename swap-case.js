/*

 Write a JavaScript function which accepts a string as input and swap the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

Sample - swapCase('The Quick Brown Fox');

Output - tHE qUICK bROWN fOX'

*/



const swapCase=(str,result='')=>{
   str.split('').forEach(function (ele){   
       ele==ele.toUpperCase()?result+=ele.toLowerCase():result+=ele.toUpperCase()     
   })
   return result
}
console.log(swapCase('The Quick Brown Fox'))