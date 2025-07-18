const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // React app
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("text-update", (newText) => {
    // Broadcast the new text to all other clients
    socket.broadcast.emit("text-update", newText);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
