/*
 Title: Exponentiate
Total Test Cases: 4


Body:

Write a function exponentiate that accepts a number and a power to raise that number to. For the present, assume the power argument will always be a positive integer value.

Examples:

    INPUT: exponentiate(2, 2);
    OUTPUT: 4

    INPUT: exponentiate(3, 4);
    OUTPUT: 81
 */

 const exponentiate=(a,b)=>(Math.pow(a,b))
 console.log(exponentiate(3, 4))
 