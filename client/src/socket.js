import { io } from "socket.io-client";

const socket = io("http://localhost:3001"); // Backend server

export default socket;
