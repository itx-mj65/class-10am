
let hello = new Promise((resolve, reject) => {


    reject("Hello, World! from resolve");

}).then((res) => {
    return console.log(res)
}).catch((err) => {
    return console.log( "reject", err)
})

console.log(hello)