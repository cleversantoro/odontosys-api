const express = require("express");
const cors = require("cors");
const http = require("http");
const { sequelize } = require("./config/database");
const io = require("./config/socket"); 
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

require("dotenv").config();

const app = express();
const server = http.createServer(app);
io.init(server);

app.use(express.json());
app.use(cors());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//     // Rota para baixar o JSON do Swagger
app.get("/odonto.json", (req, res) => {res.sendFile(__dirname + "/odonto.json"); });

const usuarioRoutes = require("./routes/usuario.routes");
const authRoutes = require("./routes/auth.routes");
const pacienteRoutes = require("./routes/paciente.routes");
const profissionalRoutes = require("./routes/profissional.routes");
const agendamentosRoutes = require("./routes/agendamento.routes");
const pagamentoRoutes = require("./routes/pagamento.routes");
const despesasRoutes = require("./routes/despesa.routes");
const reportRoutes = require("./routes/report.routes");
const notificationRoutes = require("./routes/notification.routes");
const uploadRoutes = require("./routes/upload.routes");
const googleCalendarRoutes = require("./routes/googleCalendar.routes");
const enderecoRoutes = require("./routes/endereco.routes");
const telefoneRoutes = require("./routes/telefone.routes");

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/profissionais", profissionalRoutes);
app.use("/api/agendamentos", agendamentosRoutes);
app.use("/api/pagamentos", pagamentoRoutes);
app.use("/api/despesass", despesasRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/google-calendar", googleCalendarRoutes);
app.use("/api/endereco", enderecoRoutes);
app.use("/api/telefone", telefoneRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("📦 Banco de dados conectado!");
  server.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
});
