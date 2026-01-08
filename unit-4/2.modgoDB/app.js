import express from 'express';
import mongoose from 'mongoose';
import User from './user.model.js';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/practiceDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

app.post('/add-user', async (req, res) => {
    const { name, age, email } = req.body;
    const user = await User.create({ name, age, email });
    res.send(user);
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/update-user', async (req, res) => {
    const { email, age } = req.body;
    const updatedUser = await User.findOneAndUpdate(
        { email },
        { age },
        { new: true }
    );
    res.send(updatedUser);
});

app.post('/delete-user', async (req, res) => {
    const { email } = req.body;
    const deletedUser = await User.findOneAndDelete({ email });
    res.send(deletedUser);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
