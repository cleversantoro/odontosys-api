const PDFDocument = require("pdfkit");

exports.generatePDF = (data) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    let buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    doc.fontSize(18).text(data.title, { align: "center" });
    doc.moveDown();

    if (data.payments) {
      doc.fontSize(14).text("Pagamentos:", { underline: true });
      data.payments.forEach((p) => {
        doc.fontSize(12).text(`Paciente: ${p.patientId}, Valor: R$${p.amount}, Tipo: ${p.paymentType}`);
      });
      doc.moveDown();
    }

    if (data.expenses) {
      doc.fontSize(14).text("Despesas:", { underline: true });
      data.expenses.forEach((e) => {
        doc.fontSize(12).text(`Descrição: ${e.description}, Valor: R$${e.amount}, Categoria: ${e.category}`);
      });
      doc.moveDown();
    }

    if (data.appointments) {
      doc.fontSize(14).text("Consultas:", { underline: true });
      data.appointments.forEach((a) => {
        doc.fontSize(12).text(`Paciente: ${a.patientId}, Profissional: ${a.professionalId}, Data: ${a.date}`);
      });
      doc.moveDown();
    }

    doc.end();
  });
};
