import express from "express";

const app = express()
const PORT = 3000

// http://localhost:3000/product?name=toy&price=321&id=2
app.get('/product', (req, res) => {
    const { id, name, price } = req.query
    res.send(`
        <div>
            <strong>id</strong>: ${id}
            <strong>name</strong>: ${name}
            <strong>price</strong>: ${price}
        </div>
    `)
})


app.listen(PORT, (req, res) => {
    console.log(`Server running on ${PORT} port`);
})