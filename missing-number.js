/**
 *  Title: find the missing number in an array
Total Test Cases: 2


Body:

You have given an  array which contains numbers but one number is missing, 
you need to write a  program to find that missing number in an array.
 One trick to solve this problem is to calculate sum of all numbers in the array and compare with expected sum,
 the difference would be the missing number.
 */



function missingElement(a) {

    a = a.sort()
    let expSum=0
    for (i = 0; i < a.length; i++){
        expSum+=a[i]
    }
    let actSum = 0
    let firstNum = a[0]
    let lastNum = a[a.length - 1]
    for (i = firstNum; i < lastNum + 1; i++){
        actSum+=i
    }

    
        return actSum-expSum
       

}