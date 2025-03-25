let arr = ["Hello", 1, 2, 3, true, { name: "raju", age: 22 }]
console.log(arr)
console.log({ "arr": typeof arr })

arr.push(22)  // adds item to end of an array
console.log(arr)

arr.unshift("hello") // adds item to start of an array
console.log(arr)

arr.pop()  // remove item from ending of an array
console.log(arr)

arr.shift()  // remove item from starting of an array
console.log(arr)
