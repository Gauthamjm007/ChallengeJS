/*
 Title: Case insensitive Search
Total Test Cases: 3


Body:

Write a JavaScript function to create a case-insensitive search. 
Test Data :
caseInsensitiveSearch('JavaScript Exercises', 'exercises'); 
true
caseInsensitiveSearch('JavaScript Exercises', 'Exercises'); 
true
caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'); 
false

*/


function caseInsensitiveSearch(a,b,result=false){
    
     a.split(' ').forEach(function(ele){
        if( ele.toLowerCase()==b.toLowerCase()){
            result=true
        }
        })
        return result
}

console.log(caseInsensitiveSearch('JavaScript Exe','exe'))
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'))