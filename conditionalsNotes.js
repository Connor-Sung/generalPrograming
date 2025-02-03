// These are notes on conditionals in programing

/*  At its most basic level, a conditional statement is just "If --> then" 
We will see may more complicated examples, but all of them rely on the idea
that you are checking if a condition is true, and then doing something
based on the true/false nature of that condition. */

// Conditional statements rely on some form of comparison

/* Comparisons i JavaScript, and most if not all programing languages
look like math equations to some extent.
a < b (is a less than b?)
a > b (is a greater than b?)
a == b (is a equal to b?)
a <= b (is a less than or equal to b?)
a >= b (is a greater than or equal to b?)
*/

// Examples:
let a = 5;
console.log(5 < 3);
console.log(5 > 3);
console.log(a == 5);
console.log(a == "5");

// JavaScript also has a "===", for "strict equality", This means that
// It will ask "Is a equal to b AND a and b have the same data type?"

console.log(a === "5")

/* The last symbol we ned to talk about before jumping into actual conditionals
is "!". "!" means "NOT"
*/
console.log(a != 3);

// You can compare strings just like you can compare with numbers
console.log("Badin" > "Ross");
/* Rules for string comparison: (assuming > for our comparison)
1. Compare the first characters of each string.
If the first cahracter of the first string is greater than the first character
of the second string, return True. If it is less than the first character of the second string, return False.
If they are equal, continue to the next step
2. Compare the second characters of each string, as described above.
3. Continue until either string ends
4. If both strings are equal AND have the same length, return false (They are equal)
5. If one string is longer, that strings...
*/
console.log("b" == "B");

// Now that we know how comparisons work, we can look at conditionals.
// An If statement allows you to "gate" code behind a condition being true.
If (3 < 5){
    console.log("3 is less than 5");
}

// If you want to make a choice between options, you have other structures that are useful

If (7 < 5){
    console.log("7 is less than 5");
} else {
    console.log ("7 is NOT less than 5");
}

// A test for equality. We're going to check if testNumber is
// Greater than, lesser than, or equal to 
// Try to avoid 
// let testNumber = 6;
// if (testNumber > 6){
//     console.log(`${testNumber} is greater than 6`);
// } else {
//     if (testNumber < 6){
//         console.log(`${testNumber} is lesser than 6`);
//     } else {
//         console.log(`${testNumber} is equal to 6 `);
//     }
// }

// As a rule, you want to aviod nested if/else statements. There are two better approaches:
// If-else if-else
// let testNumber = 9;

// if (testNumber < 6){
//     console.log(`${testNumber} is lesser than 6.`)
// } else if (testNumber == 6) {
//     console.log(`${testNumber} is equal to 6`)
// } else if (testNumber > 6){
//     console.log(`${testNumber} is greater than 6`)
// }

// Grade Generaider (Self created)

let testNumber = -69420;

if (testNumber <= 59){
    console.log(`${testNumber} F`);
} else if(testNumber <=69){
    console.log(`${testNumber} D`);
} else if(testNumber <=79){
    console.log(`${testNumber} C`);
} else if(testNumber <=89){
    console.log(`${testNumber} B`);
} else (testNumber <=100){
    console.log(`${testNumber} A`);
}

let testGrade = 65

if (testGrade >= 90){
    console.log("A")
} else if (testGrade >= 80){
    console.log("B")
} else if (testGrade >= 70){
    console.log("C")
} else if (testGrade >= 60){
    console.log("D")
} else if (testGrade >= 50){
    console.log("F")
}

// Logical Operators:
/* Modify or combine muliple logic statements
AND: && --> Will return "true" only when both statements are true
OR: || --> Will return "True" when either statements are true
NOT: ! --> Flips the true/false value


Clothing selctor based on weather
Two variables: temperatures and preciptation
*/

let temperature = 85;
let preciptation = false;

// List of options
/* T-Sheirt and shorts (above 75), T-Shirt and pants (between 60 and 75), 
long sleeve shir and pants (above 45), Sweatshirt and pants (colder than 45), 
Jacket instead of regular T-Shirt (if precipiation)
*/

if(temperature > 75 && preciptation == false ){
    console.log("T-Shirt / Shorts"){
        elseif(console.log("Jacket / Shorts"))
    }
}; elseif(temperature <= 75 && temperature >= 65 && preciptation == false){
    console.log("T-Shirt / Pants"){
        elseif(console.log("Jacket / Pants"))
    }
}; elseif(temperature >= 45 && preciptation == false){
    console.log("Long sleeve shirt / pants"){
        elseif(console.log("Jacket / Pants"))
    }
};

/* BEWARE: you must restate your checked variable each time
This will not work:
(x == 35 || 15)
This WILL Work:
(x == 35 || x == 15)
*/
/* JavaScript uses "truthy" and "falsey" values.
A thruthy value will be treated the sme as "true".
The following values are "truthy":
-true
-any not enpty string (including "false")
-any number other than 0
-( we haven't talked about these): arrays, functions, and objects


The folowing values are "falsy":
-false
-0 (as a number) or 0n (BigInt)
-"" (an empty string)
-null
-undefined
-NaN

OR -> finds the first truthy value: (if there is no true statements it Will giv back the last false statement)
an example: */
let testVariable = null || "banana" || 1 || false;
console.log(testVariable)

let testVariable2 = null || false || 0;
console.log(testVariable2)

/* When could this be useful? If yo have a form that you need a user to fill out.

let name = USER_INPUT || "Unknown Name";
*/

/* can also be used to set up conditional alerts or functions
for example

let printSuccess = true;
printSuccess || alert("DID NOT PRINT");
!printSuccess || alert("Printed Successfully")
*/

/* AND () finds the first "falsy" value
-evaluate from left to right
-converts the value to a boolean (based on truthy/falsyness)
-stops when it gets to the first falsy value
-if no values are falsy, retunns the last value
*/

// Examples:
console.log(true && true && true && true);
console.log(true && 0 && true && true);
console.log(true && "false" && 5 && 3.14);

// && (AND) has a higher precendence than || (OR)
// a && b || c && d == (a && b) || (c && d)
// If you want that OR operation to combine b-c,
// "a / b or c / d":
// a && (b || c) && d

// vv DO NOT DO THIS. SERIOUSLY. DON'T. vv
// some people use &&&& instead of "if"
// e.g.
let x = 1
(x > 0) && alert("Greater than Zero!");

// While that worked, this is much more readable:
let y = 1;
if (y > 0){
    alert("Greater than Zero!")
}

/* NOT - !
! takes a single argument, and does the following:
1. converts the value to a boolean type (true/false)
2. returns the opposite of the result of 1.
*/

console.log(!NaN)
console.log(!1)

// because of this behavior, sometimes people will use !! to convert values to booleans

console.log(!!NaN)

// if you don't use the !!, you can do this same operation with Boolean():
console.log(Boolean(NaN));

/*  If we have a lot of possible test cases we wamt to check, it is frequently
better to sue a "switch" instead of an if, else if chain.

STRUCTURE:
switch(expression) {
    case x:
        // code goes here
        break;
    case y: 
        // code goes here}
        break;
    case z:
        // code goes here
        break;
    default:
        //code goes here
}

-The switch expression is evaluaed
-The value of the expression is compared with the values of each case
-If there is a match, the associated block of code is executed
-If there is no match, the default case is executed.
*/

// There is something called the getDay() method. This returns the weekday
// as a number between 0 and 6. We'll use a switch to convert this output to
// an actual "day"

switch (new Date().getDay()){
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
    default:
        console.log("Not a date");
}

console.log(day);

// The Ternary Operator allows you to write simple and concise if/else statements.

// The syntax for this is:
// Condition ? do this : else do this instead 

