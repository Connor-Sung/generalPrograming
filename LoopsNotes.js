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
let i = 0
while (i < 3){
    console.log(i);
    i++; // Short hand for i += 1, which is in turn a shorthand for i = i + 1
}
