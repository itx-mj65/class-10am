//              let          var       const
// overide      true         true      false
// redeclare    false         true     false
//           block scope   global scope 

{
    var a = 14
}


// let b =(a==0) 

if (a == 15) {
    console.log("Condition is true");
} else if (a == 10) {
    console.log("Condition is true with value of 14");
} else if (a >= 14) {
    console.log("Condition is greater than or equal to 14");
} else {
    console.log("Condition is false");
}

// console.log(b)
