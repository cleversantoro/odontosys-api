const express = require("express");
const cors = require("cors");
const http = require("http");
const { sequelize } = require("./config/database");
const io = require("./config/socket");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const rateLimit = require("express-rate-limit");
const winston = require("winston");
const helmet = require("helmet");
const routes = require("./routes");
const db = require('./models');


require("dotenv").config();
const PORT = process.env.PORT || 5000;
const FORCE_SYNC = process.env.FORCE_SYNC === "false";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/server.log" }),
  ],
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
});

const corsOptions = {
  origin: ["http://localhost:3000", "https://meudominio.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();

const server = http.createServer(app);
io.init(server);

app.use(express.json());
app.use(helmet());

app.use(cors());
//app.use(cors(corsOptions));


app.use(limiter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", routes);
app.get("/", (req, res) => {  res.redirect("/api/docs");});

//     // Rota para baixar o JSON do Swagger
app.get("/odonto.json", (req, res) => { res.sendFile(__dirname + "/odonto.json"); });
app.get("/api", (req, res) => {
  res.json({
    message: "API Odonto",
    version: "1.0.0",
    documentation: "/api/docs",
  });
});
app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada!" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erro interno do servidor!" });
});

db.sequelize.sync({ force: FORCE_SYNC })
  .then(() => {
    console.log("📦 Banco de dados conectado!");
    logger.info("Servidor iniciado");
    server.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
    console.log(`🌐 Documentação disponível em http://localhost:${PORT}/api/docs`);
    console.log(`🔧 Ambiente: ${process.env.NODE_ENV || "development"}`);
  })
  .catch(err => {
    console.error("❌ Erro ao conectar ao banco de dados:", err);
    logger.error("Erro ao conectar ao banco de dados");
});
  


