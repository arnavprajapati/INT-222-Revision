// <!-- add emojis option here also if someone clicks on the emoji then the clck count shows  -->

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
    console.log("User connected:", socket.id);

    socket.on("joinRoom", ({ username, room }) => {
        socket.join(room);
        socket.username = username;
        socket.room = room;

        socket.to(room).emit("message", {
            user: "System",
            msg: `${username} entered the room`
        });

        socket.emit("message", {
            user: "System",
            msg: `Welcome ${username}! You joined room ${room}`
        });
    });

    socket.on("chatMessage", (message) => {
        io.to(socket.room).emit("message", {
            user: socket.username,
            msg: message
        });
    });

    socket.on("leaveRoom", () => {
        if (socket.room) {
            socket.to(socket.room).emit("message", {
                user: "System",
                msg: `${socket.username} left the room`
            });

            socket.leave(socket.room);
        }
    });

    socket.on("disconnect", () => {
        if (socket.room) {
            socket.to(socket.room).emit("message", {
                user: "System",
                msg: `${socket.username} disconnected`
            });
        }
        console.log("User disconnected:", socket.id);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
