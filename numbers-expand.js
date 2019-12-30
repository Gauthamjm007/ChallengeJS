/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
 */

function expandedForm(num) {
  num = num
    .toString()
    .split("")
    .reverse();
  num = num.map(Number);
  num = num
    .map(function(_num, i) {
      return _num * Math.pow(10, i);
    })
    .reverse();
  let newStr = "";
  let result = num.forEach(function(str) {
    if (str) newStr += str + " + ";
  });

  return newStr.slice(0, newStr.length - 3);
}
expandedForm(12);
expandedForm(42);
expandedForm(70304);
