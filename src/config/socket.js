const { Server } = require("socket.io");

let io;

module.exports = {
  init: (server, onConnect) => {
    io = new Server(server, {
      cors: {
        origin: process.env.FRONTEND_URL || "*",
        methods: ["GET", "POST"]
      }
    });

    io.on("connection", (socket) => {
      console.log(`Socket conectado: ${socket.id}`);
      if (onConnect) onConnect(socket);
    });

    return io;
  },

  getIO: () => {
    if (!io) throw new Error("Socket.io não inicializado!");
    return io;
  },

  emit: (event, data) => {
    if (!io) return console.warn("Emit falhou: Socket.io não iniciado.");
    io.emit(event, data);
  },
};
