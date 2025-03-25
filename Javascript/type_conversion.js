//1. Implicit type conversion (type coersion or automatic conversion)

console.log('5' + 3) // it returns string because + operator 
// And all operators give number
console.log('5' - 3)
console.log('5' * 3)
console.log('5' / 3)

console.log("" + true)  // returns true
console.log([] + {})  // returns [object object]
console.log(1 + true)  // returns 2    1+ 1(true)
console.log([] + 1)  // 1
console.log({} + 1)  // [object object]


// Falsy values: 0, "", null, undefined, NaN, false.
// Truthy values: Everything else, including [] and {}.


// 2. Explicit conversion

//Number constructor function
console.log(Number("5" + 2))  // Actually it returns '52' string and converted to 52 number
console.log(Number('10.1'))   // same
console.log(Number(null))  // 0
console.log(Number(undefined))  // NaN (Not a number)

console.log(parseInt('52hello'))  //52
console.log(parseInt('h52ello'))  // NaN
console.log(parseInt('100.0324'))  // 100

console.log(parseFloat('101.1333raju'))  // 101.1333
console.log(parseFloat('r12.2'))  // NaN

//String constructor function
console.log(String(23))
console.log(String(23.3))
console.log(String(null))
console.log(String(undefined))
console.log(String(["raju"]))
console.log(String({ name: "raju", age: 20 }))

//Boolean constructor function
console.log(Boolean(""))  // false
console.log(Boolean([]))  // true
console.log(Boolean({}))   // true
console.log(Boolean(" "))  // true
console.log(Boolean(true))  // true
console.log(Boolean(false))  // false
console.log(Boolean(0))   // false
console.log(Boolean(1))   // true
console.log(Boolean(undefined))  // false
console.log(Boolean(null))  // false

console.log(JSON.stringify({ name: "raju", age: 20 }))

