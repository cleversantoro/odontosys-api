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

    if (data.pagamentos) {
      doc.fontSize(14).text("Pagamentos:", { underline: true });
      data.pagamentos.forEach((p) => {
        doc.fontSize(12).text(`Paciente: ${p.pacienteId}, Valor: R$${p.amount}, Tipo: ${p.pagamentoType}`);
      });
      doc.moveDown();
    }

    if (data.despesas) {
      doc.fontSize(14).text("Despesas:", { underline: true });
      data.despesas.forEach((e) => {
        doc.fontSize(12).text(`Descrição: ${e.description}, Valor: R$${e.amount}, Categoria: ${e.category}`);
      });
      doc.moveDown();
    }

    if (data.agendamentos) {
      doc.fontSize(14).text("Agendamentos:", { underline: true });
      data.agendamentos.forEach((a) => {
        doc.fontSize(12).text(`Paciente: ${a.pacienteId}, Profissional: ${a.profissionalId}, Data: ${a.date}`);
      });
      doc.moveDown();
    }

    doc.end();
  });
};
