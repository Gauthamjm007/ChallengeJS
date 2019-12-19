/* 
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
Examples

removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
  }

console.log(removeSmallest([1,2,3,4,5]))
console.log(removeSmallest([5,3,2,1,4]))


//Clever

function removeSmallest2(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
  }


  console.log(removeSmallest2([1,2,3,4,5]))
  console.log(removeSmallest2([5,3,2,1,4]))