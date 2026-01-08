import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send("hello world")
})

// accepts name,age from url
// http://localhost:3000/user?name=John&age=25
app.get('/user', (req, res) => {
    const { name, age, gap } = req.query
    console.log(`My name is ${name} and age is ${age} and also gap is ${gap}`);
    res.status(200).send("hello world")
})

// 2. create html form with input by using post method
// add tow number suse post method 
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body
    res.status(200).send(`Addition of ${num1} and ${num2} is ${Number(num1) + Number(num2)}`)
})

app.post('/feedback', (req, res) => {
    const { name, feedback } = req.body
    res.status(200).send(`Your name is ${name} and here is you feedback: ${feedback}`)
})

app.post('/data', (req, res) => {
    const data = req.body
    console.log(data);
    // res.status(200).send(`Your name is ${name} age is ${age} and city name is ${city}.`)
    res.status(200).send(`Received POST data: ${JSON.stringify(data)}`)
})

app.get('/product', (req, res) => {
    const { id, name, price } = req.query;
    res.send(`Product ID: ${id}, Name: ${name}, Price: ${price}`);
});

app.get("/welcome", (req, res) => {
    const name = req.query.name || "Guest"; // reading ?name=Shresth

    res.status(200).send({
        status: 200,
        message: `Welcome ${name}!`,
        note: "GET request successful"
    });
});

app.post("/register", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send({
            status: 400,
            error: "Name and Age are required!"
        });
    }

    res.status(201).send({
        status: 201,
        message: "User registered successfully!",
        data: { name, age }
    });
});

app.use(express.static(path.join(__dirName, "public")));

app.use((req, res) => {
    res.status(404).send({
        status: 404,
        error: "Page Not Found"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})