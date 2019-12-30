/*


Method to find the longest string in an array 
longStrArr(['abcd','abc','abce','df'])
*/


function longStrArr(arr) {

    let longestStrNum
    let longestStr = []
    longestStrNum = arr.map(newArr => newArr.length)
    longestStrNum = Math.max(...longestStrNum)
    longestStr = arr.filter(newStr => newStr.length == longestStrNum)
    return longestStr

}

console.log(longStrArr(['abcd', 'abc', 'abce', 'df']))