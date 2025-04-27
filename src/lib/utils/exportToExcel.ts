// src/lib/utils/exportToExcel.ts
import ExcelJS from 'exceljs';

export async function exportDataToExcel(data: any[], fileName = "export.xlsx") {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  // Ajouter les colonnes
  worksheet.columns = [
    { header: 'Nom', key: 'nom', width: 30 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Téléphone', key: 'telephone', width: 15 },
  ];

  // Ajouter les lignes
  data.forEach((item) => {
    worksheet.addRow(item);
  });

  // Générer un blob pour le navigateur
  const buffer = await workbook.xlsx.writeBuffer();

  // Télécharger
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  window.URL.revokeObjectURL(url);
}
