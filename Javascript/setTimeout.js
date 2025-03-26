const timeout = setTimeout(() => {
    console.log("5 seconds late...")
}, 5000)
console.log(timeout)

const timeInterval = setInterval(() => {
    console.log("Repeating evey 5 seconds")
}, 5000)