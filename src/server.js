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

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const patientRoutes = require("./routes/patient.routes");
const appointmentRoutes = require("./routes/appointment.routes");
const paymentRoutes = require("./routes/payment.routes");
const expenseRoutes = require("./routes/expense.routes");
const reportRoutes = require("./routes/report.routes");
const notificationRoutes = require("./routes/notification.routes");
const uploadRoutes = require("./routes/upload.routes");
const googleCalendarRoutes = require("./routes/googleCalendar.routes");

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/google-calendar", googleCalendarRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("📦 Banco de dados conectado!");
  server.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
});
