console.log('Hello from homework.js')

//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  
    finds the index of the first non-consecutive element 
    in the array.
    It should log out 3 because 
    the array at index 3 is 5 which 
    is not consecutive.
*/


let exerciseOneArr = ['1', '2', '3', '5', '6', '7'];

console.log(exerciseOneArr.indexOf('5'));






//============Exercise #2 ============//
/*
Given the two array of numbers below, 
loop through them both individually and the 
sum all of the positives elements.
Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40
Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26
Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 

let num = 0
for (let n of numbers1) {
    if (n > 0) num += n;
} console.log(num);

///codewars promblem 1 ArrayDiff
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a, which are present in list b keeping their order.

//arrayDiff([1,2],[1]) == [2]
//If a value is present in b, all of its occurrences must be removed from the other:

//arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(element => {
      return !b.includes(element);
    });
  }


  // Codewars Problem 2 
/* Create a function that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
 }


