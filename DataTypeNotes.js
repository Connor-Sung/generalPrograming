// These will be Notes
// There are 8 data types in JavaScript
/* 
1. numbers (both integers and floating point (decimals))
        - in addition to traditional numbers, the number data type
        - includes Infinity and NaN (Not a Number)
2. BigInt () */
console.log(9,007,199,254,740,991 + 1); // 9,007,199,254,740,992
console.log(9,007,199,254,740,991 + 2); // 9,007,199,254,740,992
/* For JavaScript very large numbers starts to appoximae te value
we can override this with a BigInt, which we form but adding a lowercase "n"
to the end of the number

3. String
    - Letters, Words, Cahraters, numbers, symbols, that are treated like "t"
    - Strings produce "concatenation": conecting 2 symbols one after the other

    Strings are generally formed by encapsulating symbols in quotation you can use.

    "Hello" - Double quotes
    'Hello' - Single quotes
    `Hello` - Backlog
    */

    console.log("Hello World!");
    console.log('Hello World!');
    console.log("This is Mr.Smith's output");
    console.log('"Nevermore", quoth the Raven');

    // If your strng contains an apostrophe, use double quotes
    // If your string contains a quotation, use single quotes

    // The backticks allow you to embed variables into a string.
    let myName = "Steve";
    console.log(`Hello, ${myName}`);

    // you can also do math or other operations inside of curly braces:
    console.log(`2 + 3 = ${2 + 3}`);
    
    // Many programing languages have a 'char' datatype, representing a single character. Javascript does not
    
    /* Boolean
    Boolean is named for George Boole, who did a lot of work with formal logic namely, 
    ways to make decsions sing true and false statements.
    The Boolean datatype can hold only 2 values; true OR false.
    */

    /* Null
    This is a special datatype. It only contains only 1 value: null
    "null" in Javascript mean "nothing", "empty", or "value unknown".
    */

    /* Undefined
    This is another special datatype. It contains only 1 value: Undefined
    "Undefined" in Javascript means that the value has not been assigned.
    let age;
    ^ here is a variable  was declared, but not defined, so it is "undefined"

    Out last 2 datatypes would be Objects and Symbols, which are related, 
    and are likely beyond the scope of this class.

    If you need to know the type of a variable, you can use the typeof() funtion */
    
    console.log(typeof("word"));
    console.log(Typeof(356));
