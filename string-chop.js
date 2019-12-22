/*

 Title: Chop a string
Total Test Cases: 3


Body:

Write a JavaScript function to chop a string into chunks of a given length. 
Test Data :
console.log(stringChop('resource')); 
return ["resource"]

console.log(stringChop('resource',2)); 
return [ "re", "so", "ur", "ce"] 

console.log(stringChop('dcresource',3));
 return ["dcr", "eso", "urc", "e"]
 
 */

function stringChop(str,a,result=[]){
if(a==undefined){return str}
for(i=0;i<str.length;i=i+a){result.push(str.slice(i,i+a))}
return result
}
console.log(stringChop('resource')); 
console.log(stringChop('resource',2)); 
console.log(stringChop('dcresource',3));