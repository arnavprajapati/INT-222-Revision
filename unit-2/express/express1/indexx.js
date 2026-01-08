// ✔️ To create an Express server that can receive and process POST request data sent by the client.

import express from 'express'
import path from "path";
import { fileURLToPath } from "url";

const app = express()

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    console.log("hello world");
    res.send("hello world")
})

app.post('/user', (req, res) => {
    const { username, age } = req.body
    console.log(username, age);
    res.status(200).send("User data received successfully!")
})

app.post('/submit', (req, res) => {
    const { username, age } = req.body
    console.log(username, age);
    // res.json({
    //     username: username,
    //     age: age
    // })
    res.status(200).send("Form submitted successfully!")
})

app.use(express.static(path.join(__dirName, "public")));


app.listen(3000, () => {
    console.log(`Server is running on PORT 3000`);
})