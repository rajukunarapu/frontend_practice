// objects = objects are used to store the single item data and that data to be stored in the form of key - value pair

// 4 ways to create objects in js
// 1. object literals = using {}
let obj = {
    name: "raju",
    age: 22
}

//2. object constructor function

let obj_2 = new Object(obj)
console.log(obj_2)

//3. function constuctor

function my_function(name, age) {
    this.age = age;
    this.name = name;
    this.greet = function () {
        console.log("This is a greet method")
    }
    this.get = () => {
        console.log("This is a get method")
    }
}

let obj_3 = new my_function("zayn", 35)
console.log(obj_3)
console.log(obj_3.name)
console.log(obj_3.age)
obj_3.greet()
obj_3.get()

//4 . Object.create()

let obj_4 = Object.create({
    name: 'jack',
    age: 20
})
console.log(obj_4)


// It supports for-in  = returns keys
for (item in obj) {
    console.log(item)
    console.log(obj[item])
}


//methods of objects
//1. Object.keys(object) = returns keys of that object in array   [ 'name', 'age' ]
console.log(Object.keys(obj))

//2. Object.values(object) = returns values of that object in array   [ 'raju', 22 ]
console.log(Object.values(obj))

//3. Object.entries(obj) = returns total key-value pair in array [ [ 'name', 'raju' ], [ 'age', 22 ] ]
console.log(Object.entries(obj))
