import { PDFDocument } from 'pdf-lib';

export async function gerarPdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);
  page.drawText('Relatório de Ocorrência', {
    x: 50,
    y: 800,
    size: 18
  });
  return await pdfDoc.save();
}
