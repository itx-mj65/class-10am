
function addnumber() {
    let arr = ["hello", "world"]
    let data = prompt("Enter a number");
    arr.push(data);
    console.log(arr);
    console.log(arr.join(" "));
}

// addnumber()


let arr = ["hello", "world", 12, true]


arr.map((item, num, full) => {
    document.writeln(item, " Class Web dev", num, "<br>");

})

let arr2 = [4, 7, 8, 12, 19]

arr2.filter((item) => {
    return (item % 2 == 0);
}).map((item) => {
    document.writeln(item, "<br>");
})