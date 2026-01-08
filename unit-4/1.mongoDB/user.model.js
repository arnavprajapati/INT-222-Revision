import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/practiceDB')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);
export default User;