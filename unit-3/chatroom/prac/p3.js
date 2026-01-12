const http = require("http");
const EventEmitter = require("events");

const event = new EventEmitter();

let counts = {
    home: 0,
    about: 0,
    contact: 0
};

// Event listeners
event.on("homeVisited", () => counts.home++);
event.on("aboutVisited", () => counts.about++);
event.on("contactVisited", () => counts.contact++);

const server = http.createServer((req, res) => {
    
    if (req.url === "/home") {
        event.emit("homeVisited");
        res.end(`Home visited ${counts.home} times`);
    }

    else if (req.url === "/about") {
        event.emit("aboutVisited");
        res.end(`About visited ${counts.about} times`);
    }

    else if (req.url === "/contact") {
        event.emit("contactVisited");
        res.end(`Contact visited ${counts.contact} times`);
    }

    else {
        res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
