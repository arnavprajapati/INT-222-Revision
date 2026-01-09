const showMessage = (msg) => {
    console.log(msg)
}

const greet = (name, callback) => {
    const message = `Hello, ${name}!`
    callback(message)
}

greet('Arnav', showMessage)


const calculator = (a, b, callback) => {
    const sum = a + b
    callback(sum)
}

calculator(5, 3, (result) => {
    console.log(`The sum is: ${result}`)
})