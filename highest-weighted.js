/** */

function high(x) {
  let alpha = ".abcdefghijklmnopqrstuvwxyz";
  x = x.split(" ");
  let result = x.map((arr) =>
    arr
      .split("")
      .map((newStr) => alpha.indexOf(newStr))
      .reduce((a, b) => a + b, 0)
  );
  return x[result.indexOf(Math.max(...result))];
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
