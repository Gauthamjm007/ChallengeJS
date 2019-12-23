/**
 * 
  Title: Remove character from string
Total Test Cases: 5


Body:

Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.

The function should return a new string with the characters removed.

Examples:

removeFromString('Elie', 2, 2) // 'El'

removeFromString('Elie', 0, 1) // 'lie'

removeFromString('Rithm School', 0, 6) // 'School'

removeFromString('Rithm School', 2, 4) // 'RiSchool'

removeFromString('Rithm School', 6, 400) // 'Rithm '
 */
function removeFromString(str,inx,lent)
{
    
    str=str.split('')
    str.splice(inx,lent)
    return str.join('')
}
 console.log(removeFromString('Elie', 2, 2))
 console.log(removeFromString('Elie', 0, 1))
 console.log(removeFromString('Rithm School', 0, 6))
 console.log(removeFromString('Rithm School', 2, 4))
 console.log(removeFromString('Rithm School', 6, 400))