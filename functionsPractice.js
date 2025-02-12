// 1
function multiply(a, b){
    return(a * b);
}

console.log(multiply(2,3));

// 4
function checkAge(age) { 
    if (age > 18) { 
         return true; 
     } else { 
         return confirm('Did parents allow you?');
     }
    }
 console.log(checkAge(19))

function checkAge2(age) { 
    if (age > 18) { 
       return true;
} 
return confirm('Did parents allow you?');
}
console.log(checkAge2(19))
// Yes it still does work and there are no differences

// 5 (I will need help with this one)
function checkage3(age) {
    return (age > 18) ? true : confirm('Did parents allow you?')
}
console.log(checkage3(17));

// 6 (Also need help)
function compare(a, b){
    if (a > b) {
        return('a is greater');}
        else {
            return('b is greater');
        }
}
console.log(compare(4, 5));

// 7
function expon(x,n){
    return(x ** n);
}
console.log(expon(2,3));