/* Notes on loops in javaScript */

/* Loops are a great way for us to repeat a set of steps.
If you have something you want to do multiple times in a row, or 
until somethings happens, loops are an ideal solution

There are two general flavors of loop in programming:
-While loop
-For loops

WHILE LOOPS:
while (condition) {
    //CODE GOES HERE
}

This code will repeat as long as that condition is true.

example: */
// let i = 0
// while (i < 3){
//     console.log(i);
//     i++; // Short hand for i += 1, which is in turn a shorthand for i = i + 1
// }

/* A single time through the loop is called an iteration.
while loops will continue until their condition becomes falsy
Remember, 0 is falsy. */

// i is already 3, because of the prior loop
// while  (i) {
//     console.log("banana")
//     i--;
// }

/* There is a second flavor of while loop, called a do... while loop
The primary difference beetween a do... while loop and a while loop, is
that a do... while loop will always execute at least once.

DO... WHILE LOOP STRUCTURE:
do {
    //CODE GOES HERE}
while (condition);
*/

// let a = 0;
// do {
//     console.log(a);
//     a += 1;
// } while (a < -1);

/* The other kind of loop is the FOR loop.
For loos are essentially just fancy while loops, their syntax is more
complicated, but they're also more commonly used. You are less likely 
to set up an infinite loop when using a for loop.

FOR LOOP STRUCTURE:
for (begin; condition; step) {
    //CODE GOES HERE
}

// example: */
// for (let j = 0; j < 5; j++){
//     console.log(`j = ${j}`);
// }

/* With either form of Loop, as a general rule if your condition is going to be based on a NUMBER
You probably want to use: <, >, <=, >=.
==, !=, are likely to enable you to 'miss' and accidentally make an infinite loop.
You'll also find hat you'll sommetimes be off by 1. Frequently the solution to this
is just to change between < and <= OR > and >+ */

/* you CAN skip elements of the for loop declaration. For example:

let i = 0

for(; 1 < 3; i++){
    console.log(i)
}

****************************

for(let i = 0; i < 3;){
    console.log(i++)
}

****************************

let i = 0

fore(; i < 3 ;){
    console.log(i);
    i++
}
    \

****************************

for (;;){
    //THIS IS AN INFINITE LOOP
}

*/

/* BREAK as a command
break is a command that will immediately exit you from a loop, 
and advance to the next part of the code.
You can put breaks in as failsafes if you think you might create an infinite loop. */

// Example 1: sum numbers from the user
// let sum = 0;
// while(true){
//     let value = +prompt("Enter a number", '');

//     if(!value){
//         break;
//     }

//     sum += value
// }
// console.log(`sun = ` + sum);

// Example 2: add numbers from 1 to a given value WITH a timeout function
// let sum = 0;
// let max = +prompt("Add the numbers for 1 to what?")
// let now = Date.now();
// console.log(now);

// for (let i = 1; i <= max; i++){
//     sum += i;

//     if (Date.now() > now + 1000){
//         console.log("This computer has a virus pls deltete now");
//         break;
//     }
// }
// console.log(sum);

/* CONTINUE as a command
continue is like a "lighter" version of break. Instead of ejection you
out of the loop, it just skips to the end of the current iteration. */
// Example: print just the odd numbers from 1 to 20:

for(let i = 0; i < 21; i++) {
    if (i % 2 == 0){
        continue;
    }
    console.log(i);
}



// Array Methods
// .pop() -  finds the last element of the array, returns it, and deletes it
// From the array

// console.log(primes);
// console.log(primes.pop());
// console.log(primes);

// Here is a code snippet to find the sum of all primes less than 20.
// Assuming that we already have an array of numbers less then 20

let sum = 0;
while (primes.length > 0) {
    sum += primes.pop();
    console.log(primes, sum);
}

console.log(sum);

// The inverse of .pop() is .push()
// .push() adds an element to the end of the array.

let fruits = ["Apple", "Banana", "Canteloupe"];

console.log(fruits);

fruits.push("Watermelon");

console.log(fruits);

// The problem with pop and push, is that you can only mdify the end of the array.
// If you want to modify the BEGINNING of the array, you need different methods:

// Shift() - shift is pop, but at the beginnning.

console.log(fruits.shift());
console.log(fruits);

// Unshift() - is push, but at the beginning
fruits.unshift("Apricot");
console.log(fruits);

// Push and unshift can add muliptle elements at once
fruits.push("Orange", "Peach");
fruits.unshift("Lemon", "Pineapple");

console.log(fruits);

// Using loops with arrays.
// Here's an "old" style of printing all of the array values:
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// There is a diffent kind of wat ro do this, using a for... of loop:

// for (let fruit of fruits){
//     console.log(fruit);
// }

/* Something ti bite about arrays:
array.length is returning the value of the last index + 1, 
it is not actually counting the number of values in the array */

let grades = ["A", "A", "B", , "B", "A"];
console.log(grades);
console.log(grades.length)

// let badArray = [];
// badArray[314] = "pie";
// console.log(badArray.length)
// console.log(badArray)

/* Multidimensional Arrays
A multidiemnsional array, is an array that is, in turn,
made up of more arrays.
*/

// An example of holding XY coordinates of 5 points: (3,4) (1,2) (9,15) (37, 11) (215,1)
let coordinates = [
    [3,4],
    [1,2],
    [9, 15],
    [37, 11],
    [215, 1]
]

console.log(coordinates[4][0]);

coordinates[4][0] = 21;

console.log(coordinates);
