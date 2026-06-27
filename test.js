const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello");
});

server.listen(3000, () => {
    console.log("Server Running");
});

server.on("close", () => {
    console.log("SERVER CLOSED");
});

process.on("exit", (code) => {
    console.log("PROCESS EXITED:", code);
});