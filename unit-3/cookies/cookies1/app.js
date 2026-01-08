import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 4000;

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {

    res.cookie("username", "arnav", {
        maxAge: 60000,
        sameSite: 'None',
        secure: true
    });

    res.cookie("age", "21", {
        maxAge: 60000,
        sameSite: 'None',
        secure: true
    });

    res.json({ message: "Cookies set successfully" });
});

app.get('/read-cookie', (req, res) => {
    console.log(req.cookies);

    res.json({
        message: "Cookies read successfully",
        cookies: req.cookies
    });
});

app.listen(PORT, () => {
    console.log("Server running on port 4000");
});
