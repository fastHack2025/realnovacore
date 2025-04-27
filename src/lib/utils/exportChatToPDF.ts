import jsPDF from "jspdf";

export function exportFichePatient(patient: any) {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("🧾 FICHE PATIENT", 20, 20);
  doc.setFontSize(12);
  doc.text(`Nom: ${patient.nom}`, 20, 40);
  doc.text(`Date de naissance: ${patient.date_naissance}`, 20, 50);
  doc.text(`État de santé: ${patient.etat}`, 20, 60);
  doc.save(`Fiche-${patient.nom}.pdf`);
}
