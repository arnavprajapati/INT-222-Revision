import express from "express";
import session from "express-session";

const app = express();
const PORT = 4000;

app.use(
    session({
        secret: "examSecret",
        resave: false,
        saveUninitialized: true
    })
);

app.get("/setsession", (req, res) => {
    req.session.userName = "arnav";
    res.send("Session set successfully");
});

app.get("/readsession", (req, res) => {
    res.send({
        message: "Session read successfully",
        sessionId: req.session.userName
    });
});

app.all("/dashboard", (req, res, next) => {
    if (!req.session.userName) {
        return res.send("Please login first");
    }
    next();
});

app.get("/dashboard", (req, res) => {
    res.send(`Welcome Dashboard ${req.session.userName}`);
});

app.listen(PORT, () => {
    console.log("Server running on 4000");
});