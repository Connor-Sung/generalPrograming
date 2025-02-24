// 1
// for (let i = 0; i <= 21; i++) { 
//     console.log(i);
// }

// 2

// let i = 0
// do { 
//     (i++); 
//     alert( `number ${i}!` ); 
// } while (i < 3);

// 3

// let sum = 0;
// while(true){
//     let value = +prompt("Enter a number", '');

//      if(value > 100){
//          break;
//      }
// }

// 4 

let sum2 = 0;
while(true){
    let value = Number(+prompt("Enter a number", ''));
    if (value == 0){
        continue;    
    }
    if(!value){
        break;
    }
    sum2 += value;
}
console.log(`sum = ` + sum2);

// 5

// let Musics = ["Jazz", "Blues"]
// Musics.push("Rock-n-Roll" )
// Musics.unshift()