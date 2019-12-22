/*
 Title: The Array Cafe
Total Test Cases: 3


Body:

In this challenge, we'll use an array to manage the occupancy of tables in a Cafe. 

Each table in the Cafe will be represented with a "not booked"or "booked" in the array. The index of the string in the array is the table number. For example, for a cafe with a booking array of ["booked", "not booked", "booked", "not booked"], we can determine that Tables 0 and 2 are occupied and Tables 1 and 3 are free.

Your job is to write a function called findNotBookedTables to help the owner of the cafe find which tabes are 'not booked'. This function should return an array of the tables numbers that are 'not booked'.

Examples:

    INPUT: findNotBookedTables(["not booked", "booked", "booked", "not booked", "not booked"]);
    OUTPUT: [0,3,4] //since those are the tables not booked


*/
const findNotBookedTables = function(arr, result = []) {
    arr.forEach((ele, i) => { ele == 'not booked' ? result.push(i) : ele })
    return result
}

console.log(findNotBookedTables(["not booked", "booked", "booked", "not booked", "not booked"]))