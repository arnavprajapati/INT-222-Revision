import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);


app.get("/", (req, res) => {
    res.status(200).send("hello world this is home page");
});

app.get("/json", (req, res) => {
    res.status(200).json({
        name: "arnav",
    });
});

app.get("/index", (req, res) => {
    res.status(200).sendFile(path.join(__dirName, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirName, "public", "about.html"));
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.use(express.static(path.join(__dirName, "public")));


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});