/*

Title: Join Array Elements
Total Test Cases: 3


Body:

Write a simple JavaScript Function to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
joinArray(myColor,",");
joinArray(myColor,"+");


Expected Output : 
"Red,Green,White,Black"
"Red+Green+White+Black"

*/

const joinArray=(a,b) =>(a.join(b))

let myColor = ["Red", "Green", "White", "Black"]
console.log(joinArray(myColor,","))
console.log(joinArray(myColor,"+"))