import express from 'express'
import cookieParser from "cookie-parser"

const app = express()
app.use(cookieParser())

app.get('/set-cookie', (req, res) => {
    res.cookie("sessionId", "12345", {
        httpOnly: true,
        maxAge: 1000 * 60 * 60
    })
    res.send("cokkie set successfully")
})

app.get('/read-cookie', (req, res) => {
    const sessionId = req.cookies.sessionId;
    res.send(`Session ID from cookie: ${sessionId}`);
})

app.get("/delete", (req, res) => {
    res.clearCookie("sessionId");
    res.send("Cookie deleted successfully");
});

app.listen(3000)