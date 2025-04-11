const { Server } = require("socket.io");

let io;

module.exports = {
  init: (server) => {
    io = new Server(server, { cors: { origin: "*" } });
    return io;
  },
  getIO: () => {
    if (!io) throw new Error("Socket.io não inicializado!");
    return io;
  },
  emit: (event, data) => {
    if (io) io.emit(event, data);
  },
};
