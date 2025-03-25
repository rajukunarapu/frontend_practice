// functions are block of code and perform task

// 4 ways to create function in js

// 1. regular function = using function keyword and name
function my_function(name, age) {
    console.log(`My self ${name} and I am ${age} years old.`)
}

my_function("raju", 22)

function my_function1(name, age) {
    return (`My self ${name} and I am ${age} years old.`)
}

console.log(my_function1("zayn", 34))

//2. anonymous function = It doesn't have any function name and we store it in a variable that's called "function expression"
const anonymous_function = function (name) {
    console.log(name)
}

anonymous_function("anonymous_function")

//3. Arrow function = It doesn't have any function keyword and function_name, we store it in a function expression
const arrow_function = (name) => {
    console.log(name)
}

arrow_function("arrow function")


    //     //4. Immediately Invoked function Expression(IIFE) = we stored it in a function expression called round brackets and immediately invoke that function

    (() => {
        console.log("IIFE function")
    })()
