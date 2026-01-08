import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 4000;

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "arnav" && password === "1234") {

        res.cookie("user", username, {
            maxAge: 60000,
            sameSite: 'None',
            secure: true
        });

        return res.json({ message: "Login successful" });
    }

    res.status(401).json({ message: "Invalid credentials" });
});

app.get('/profile', (req, res) => {
    const user = req.cookies.user;

    if (!user) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    res.json({
        message: "Welcome to dashboard",
        username: user
    });
});

app.get('/logout', (req, res) => {
    res.clearCookie("user");
    res.json({ message: "Logged out" });
});

app.listen(PORT, () => {
    console.log("Server running on port 4000");
});