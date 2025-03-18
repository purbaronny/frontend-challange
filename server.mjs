import jsonServer from "json-server";
import { createServer } from "http";
import { Server } from "socket.io";
import fs from "fs";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api/v1", router);

const httpServer = createServer(server);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

// Pantau perubahan pada db.json dan beri tahu client
fs.watchFile("db.json", () => {
  io.emit("dbUpdate");
});

const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log(`JSON Server running on http://localhost:${PORT}/api/v1/`);
});
