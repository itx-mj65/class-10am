



// fetch("https://6837eade2c55e01d184b37c6.mockapi.io/wb-class/user")


//     .then((res) => res.json())
//     .then((data) => {

//         console.log(data);
//     }).catch((err) => {
//         console.log(err, "this statment is from catch block");
//     })

// let prom = new Promise((resolve, reject) => {

//     let data = fetch("https://6837eade2c55e01d184b37c6.mockapi.io/web-class/user")
//     if (data ) {
//         resolve(data);
//     } else {
//         reject("failed to fetch data");
//     }

// }).then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err, "this statment is from catch block");
// })


// const hello = async () => {
//     try {
//         let res = await fetch("https://6837eade2c55e01d1b37c6.mockapi.io/web-class/user");
//         let data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log("failed to fetch data");
//     }
// }
// hello();


const person = { fname: "John", lname: "Doe", age: 25 };

// console.log(person["fname"]);

for (let x in person) {
    console.log(x);
    console.log(person[x])
}

// for of loop

let arr = ["hello", "world", "welcome", "to", "javascript"];
for (let x of arr) {
    console.log(x);
}