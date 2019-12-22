/*
 Title: Uncamelize
Total Test Cases: 4


Body:

 Write a JavaScript function to uncamelize a string. 
Test Data :
uncamelize('helloWorld'); 
uncamelize('helloWorld','-'); 
uncamelize('helloWorld','_');


"hello world" 
"hello-world" 
"hello_world"

*/
function uncamelize(str,a=' ',arr=[0]){
    let result=''
      str=str.split('')
      for(i=0;i<str.length;i++){
            str[i]==str[i].toUpperCase()?arr.push(i):str       
      }
      console.log(arr)
      str=str.join('')
      for(i=0;i<arr.length;i++){
            result+=str.charAt(arr[i]).toLowerCase()+str.slice(arr[i]+1,arr[i+1])+a

      }

      return result.slice(0,result.length-1)
}


console.log(uncamelize('helloWorld')) 
console.log(uncamelize('helloWorld','-'))
console.log(uncamelize('helloWorldToNewCity','_'))
