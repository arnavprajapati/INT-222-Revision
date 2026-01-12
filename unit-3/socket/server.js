const net = require('net');

// Create TCP server
const server = net.createServer((socket) => {
    console.log("Client connected!");

    // Send welcome message
    socket.write("Welcome client!\n");

    // Receive data from client
    socket.on("data", (data) => {
        console.log("Client says:", data.toString());
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });
});

// Start server
server.listen(5000, () => {
    console.log("Server running on port 5000");
});
