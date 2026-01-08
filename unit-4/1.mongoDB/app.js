// Node.js is a server-side runtime environment that handles backend logic.
// MongoDB is a database server where application data is stored.
// Mongoose is an ODM (Object Data Modeling) library that connects Node.js with MongoDB.

// ORM → SQL databases (MySQL, PostgreSQL)
// ODM → NoSQL databases (MongoDB)

import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

import userModel from './user.model.js';

const User = userModel;

app.get('/', (req, res) => {
    res.send('User Management API Running');
});

app.post('/create', async (req, res) => {
    const { name, age, email } = req.body;

    const user = await User.create({
        name,
        age,
        email
    });

    res.send(user);
});

app.post('/create-many', async (req, res) => {
    const users = await User.insertMany(req.body);
    res.send(users);
});

app.get('/read', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.put('/update', async (req, res) => {
    const { email, age } = req.body;

    const updatedUser = await User.findOneAndUpdate(
        { email },
        { age },
        { new: true }
    );

    res.send(updatedUser);
});

app.patch('/patch-user', async (req, res) => {
    const { email, age } = req.body;

    const updatedUser = await User.findOneAndUpdate(
        { email },          
        { age },            
        { new: true }       
    );

    res.send(updatedUser);
});

app.delete('/delete', async (req, res) => {
    const { email } = req.body;

    const deletedUser = await User.findOneAndDelete({ email });
    res.send(deletedUser);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});