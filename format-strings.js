/*
Format a string of names like 'Bart, Lisa & Maggie'.

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

function list(arr) {
  let tempStr = "";
  console.log(arr.length);
  if (arr == []) return "";
  if (arr.length == 1) {
    return arr[0].name;
  }
  if (arr.length == 2) {
    return `${arr[0].name} & ${arr[1].name}`;
  }
  if (arr.length > 2) {
    for (i = 0; i < arr.length; i++) {
      console.log(i);
      if (i == arr.length - 1) {
        tempStr = tempStr.slice(0, tempStr.length - 2);
        tempStr += " & " + arr[i].name;
      } else {
        tempStr += arr[i].name + ", ";
      }
    }
  }
  return tempStr;
}

//Clever way
function list2(people) {
  if (!people.length) return "";

  if (people.length === 1) return people[0].name;

  var lastPerson = people.pop();
  return `${people.map((p) => p.name).join(", ")} & ${lastPerson.name}`;
}
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
console.log(list([{ name: "Bart" }]));
