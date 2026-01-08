import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SESSION
app.use(
    session({
        secret: "sessionSecret",
        resave: false,
        saveUninitialized: false,
    })
);

// SERVE FRONTEND
app.use(express.static(path.join(__dirname, "public")));

/* LOGIN */
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "arnav" && password === "1234") {
        req.session.user = username;
        return res.json({ message: "Login successful" });
    }

    res.status(401).json({ message: "Invalid credentials" });
});

/* DASHBOARD */
app.get("/dashboard-data", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Not logged in" });
    }

    res.json({ username: req.session.user });
});

/* LOGOUT */
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.json({ message: "Logged out" });
    });
});

app.listen(PORT, () => {
    console.log("Server running at http://localhost:4000");
});