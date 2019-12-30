/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique


    */

function findUniq2(arr) {
  let result = Array.from(new Set(arr));
  let i = 0,
    j = 0;
  for (const c of arr) {
    if (result[0] == c) {
      i++;
    } else {
      j++;
    }
  }
  return i > j ? result[1] : result[0];
}

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
console.log(findUniq([0, 1, 0]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));
