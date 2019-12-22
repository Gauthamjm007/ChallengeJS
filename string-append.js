/*


 Title: String end with suffix
Total Test Cases: 2


Body:

Write a JavaScript function check if a string ends with the specified suffix. 
Test Data :
string_endsWith('JS PHP PYTHON', 'PYTHON' ); 
true
string_endsWith('JS PHP PYTHON', ')' );
false


*/


function string_endsWith(a,b){
    a = a.split(' ')
    return a[a.length-1]==b?true:false  
}

console.log(string_endsWith('JS PHP PYTHON', 'PYTHON' ))