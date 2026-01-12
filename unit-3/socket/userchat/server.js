const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chatMessage", (data) => {
        io.emit("chatMessage", data);
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

