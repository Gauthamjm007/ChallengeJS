/**
 *  Title: Proper Noun Filter
Total Test Cases: 4


Body:

Write a function  properNounFilter, that determines whether the string argument is a proper noun.

A word is considered a proper noun if only the first letter is capitalized. If the argument is a proper noun, properNounFilter should return true. It should return false if the word isn't a proper noun, if the word is mixed case, or if it is all caps.

Examples

    INPUT: properNounFilter('coffee');
    OUTPUT: false

    INPUT: properNounFilter('Einstein');
    OUTPUT: true

    INPUT: properNounFilter('ApoLLo');
    OUTPUT: false

 */

 function properNounFilter(str){
     let result=0
     if(str==''){return 'invaid input'}
      result = str==str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()?true:false
      return result
 }

 console.log(properNounFilter('coffee'))
 console.log(properNounFilter('Einstein'))
 console.log(properNounFilter('ApoLLo'))
 console.log(properNounFilter(''))