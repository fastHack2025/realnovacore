// lib/email.ts
import emailjs from "@emailjs/browser";

export async function sendEmail(serviceId: string, templateId: string, userId: string, variables: Record<string, any>) {
  try {
    const response = await emailjs.send(serviceId, templateId, variables, userId);
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error("Email sending failed");
  }
}
