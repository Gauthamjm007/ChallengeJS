/*
 Title: Longest Word
Total Test Cases: 1


Body:

Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial' 
Expected Output : 'Development'

*/

function longestWord(str){
    
    str=str.split(' ')
    let longest=str[0]
    str.forEach(function(newStr){
        if(longest.length<newStr.length){
            longest=newStr
        }

    })

    return longest
}