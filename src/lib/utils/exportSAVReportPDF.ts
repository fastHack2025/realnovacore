import jsPDF from "jspdf";

export function exportSAVReportPDF(savData: any[]) {
  const doc = new jsPDF();
  doc.text("SAV Report", 10, 10);
  savData.forEach((sav, i) => {
    doc.text(`${i + 1}. Type: ${sav.type}`, 10, 20 + i * 30);
    doc.text(`Message: ${sav.message}`, 10, 30 + i * 30);
    doc.text(`Réponse IA: ${sav.reponse || "..."}`, 10, 40 + i * 30);
  });
  doc.save("SAV_Report_NovaCore.pdf");
}
