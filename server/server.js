const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // your frontend origin
    methods: ["GET", "POST"]
  }
});

const documents = {}; // In-memory storage

io.on("connection", socket => {
  console.log("Client connected:", socket.id);

  socket.on("get-document", documentId => {
    if (!documents[documentId]) {
      documents[documentId] = ""; // default empty content
    }

    socket.join(documentId);
    socket.emit("load-document", documents[documentId]);

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", data => {
      documents[documentId] = data;
    });
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
