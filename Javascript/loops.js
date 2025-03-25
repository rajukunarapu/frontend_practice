// for loop - we generally use for loop when number of iterations are known
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// while - when number of iterations are unknown
let x = 0;
while (x <= 10) {
    x++
    console.log(x)
}

let y = 0;
do {
    console.log(`Statement ${y}`)
    y++
}
while (y < 10)
