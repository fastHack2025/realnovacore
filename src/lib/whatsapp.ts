// lib/whatsapp.ts
import axios from "axios";

const callMeBotApiKey = process.env.CALLMEBOT_API_KEY!;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER!;

export async function sendWhatsappMessage(message: string) {
  try {
    const response = await axios.get(
      `https://api.callmebot.com/whatsapp.php?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&apikey=${callMeBotApiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("CallMeBot WhatsApp Error:", error);
    throw new Error("Failed to send WhatsApp message");
  }
}
