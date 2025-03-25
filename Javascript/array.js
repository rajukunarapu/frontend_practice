// let arr = ["Hello", 1, 2, 3, true, { name: "raju", age: 22 }]
// console.log(arr)
// console.log({ "arr": typeof arr })

// arr.push(22)  // adds item to end of an array
// console.log(arr)

// arr.unshift("hello") // adds item to start of an array
// console.log(arr)

// arr.pop()  // remove item from ending of an array
// console.log(arr)

// arr.shift()  // remove item from starting of an array
// console.log(arr)


// //for in loop returns the index
// for (index in arr) {
//     console.log(index)
// }

// // for of loop returns the items
// for (item of arr) {
//     console.log(item)
// }

// //for each returns the all the items, index and total array
// arr.forEach((item, index, tArr) => {
//     console.log(item)
//     console.log(index)
//     console.log(tArr)
// })


// map, filter and reduce are special methods of array
let arr1 = [1, 2, 3, 4, 5, 6]

let double = arr1.map((item, ind, tArr) => {
    return item * 2
})
console.log(double)


let even_number = arr1.filter((item) => {
    return (item % 2 === 0)
}
)
console.log(even_number)

let sum = arr1.reduce((acc, item) => {
    return item * acc
}, 1)
console.log(sum)

// find - It retuns the first item that's met the condition
let arr_1 = [1, 2, 3, 4, 5, 6, 7]
let finding_even = arr1.find((item) => item % 2 == 0)
console.log(finding_even)

// some - It returns true if any one of the item is met condition
let find_even = arr_1.some((item) => item % 2 == 0)
console.log(find_even)

// every - It returns true if all items meet the condition
let student_marks = [38, 41, 57, 71, 68]
let student_result = student_marks.every((item) => item > 36)
console.log(student_result)