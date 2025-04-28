const express = require("express");

const usuarioRoutes = require("./usuario.routes");
const authRoutes = require("./auth.routes");
const pacienteRoutes = require("./paciente.routes");
const profissionalRoutes = require("./profissional.routes");
const agendamentosRoutes = require("./agendamento.routes");
const pagamentoRoutes = require("./pagamento.routes");
const despesasRoutes = require("./despesa.routes");
const reportRoutes = require("./report.routes");
const notificationRoutes = require("./notification.routes");
const uploadRoutes = require("./upload.routes");
const googleCalendarRoutes = require("./googleCalendar.routes");
const enderecoRoutes = require("./endereco.routes");
const telefoneRoutes = require("./telefone.routes");
const consultaRoutes = require("./consultas.routes");
const documentoRoutes = require("./documento.routes");


const router = express.Router();

router.use("/usuarios", usuarioRoutes);
router.use("/auth", authRoutes);
router.use("/pacientes", pacienteRoutes);
router.use("/profissionais", profissionalRoutes);
router.use("/agendamentos", agendamentosRoutes);
router.use("/pagamentos", pagamentoRoutes);
router.use("/despesas", despesasRoutes);
router.use("/reports", reportRoutes);
router.use("/notifications", notificationRoutes);
router.use("/uploads", uploadRoutes);
router.use("/google-calendar", googleCalendarRoutes);
router.use("/enderecos", enderecoRoutes);
router.use("/telefones", telefoneRoutes);
router.use("/consultas", consultaRoutes); // Adicionando a rota de consultas
router.use("/documentos", documentoRoutes);

module.exports = router;