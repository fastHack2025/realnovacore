import puppeteer from "puppeteer";
import { render } from "@react-email/render";
import { FactureTemplate } from "@/emails/FactureTemplate";

export async function generateFactureHTMLPdf(facture: any) {
  const html = render(<FactureTemplate facture={facture} />);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();
  return pdf;
}
