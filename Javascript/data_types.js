
// 1. Number Data type
let int = 10;
let float = 10.0;
let num1 = -100

console.log(typeof int)
console.log(typeof float)
console.log(typeof num1)


//2. String data type

let str = "Hello bacche"
console.log(typeof str)

let template_string = `I am ${int} years old.`
console.log(typeof template_string)


// 3. Boolean data type
let bool = true || false
console.log(typeof bool)


// 4. Undefined data type
let val;
console.log(val)
console.log(typeof val)


//5. null data type
let n1 = null;
console.log({ "null": typeof n1 })


// objects [array, object, function]

let arr = [1, 2, 3, 4, 5, 6]
console.log({ "arr": typeof arr })

let obj = { name: "raju", age: 20 }
console.log({ "obj": typeof obj })

let fun = function () {
    console.log("This is an anonymous function")
}
console.log({ "fun": typeof fun })

let arrow = () => {
    console.log("This is an arrow function")
}
console.log({ "arrow": typeof arrow })

function myFunction() {
    console.log("This is a regualr function")
}
console.log({ "my_function": typeof myFunction })