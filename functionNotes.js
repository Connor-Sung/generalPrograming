/* 
A function is a set of instructions that are all packaged together.
This is partucularly useful if you need to reuse those instructions
especially if you are reusing them in multiple places, or with
various "starting" condition

function name, parameters, arguments

function functionName(parameter1, parameter2, etc.){
    code
}

functionName(argument1, argument2, etc.){
    code
}
*/
// make a function that returns a message about a favorite animal

function favoriteAnimal(animal){
    return animal + " is my favorite animal!";
}

console.log(favoriteAnimal("Banshee"));
console.log(favoriteAnimal("Ram"));
console.log(favoriteAnimal("Monkey"));
console.log(favoriteAnimal("Potto"));

// What happens inside a function is frequently invisible to the outside world.
// This is referred to in porgramming as "Scope"

// Local scope : within a function
// Global scope : the main program

// An Example to demonstrate scope
let test1 = 1
let test2 = 5

function add1(num) {
    test2 = test2 + 1
    return num + 1;
}

console.log(add1(test1));
console.log(test1);
console.log (test2);

// To summarize: a function can change he value of a global variable, but
// only if that variable is used , BY NAME, within the funcion.
// Variables that are passed as arguments to the function, will remain unchanged.

// We can make optional parameters.
function greetings(name = "Connor Sung"){
    console.log(`Hello, ${name}`)
}

(greetings("Connor Sung"));
(greetings("Mrs. Heinich"));
(greetings("Mr. Keating"));
(greetings("Stevie T."));
(greetings());