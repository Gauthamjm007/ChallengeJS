/**
 * Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.


Test Data : 
last([7, 9, 0, -2]); 
last([7, 9, 0, -2],3); 
last([7, 9, 0, -2],6);
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]
 */


 function last(arr,l=1,result=[]){
     let temp
     for(i=0;i<l;i++){
         temp=arr.pop()
         if(temp==undefined){break}
         result.unshift(temp)
     }
     return result
 }

 console.log(last([7, 9, 0, -2],3))
 console.log(last([7, 9, 0, -2],6))
 console.log(last([7, 9, 0, -2]))