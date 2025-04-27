export async function getAutomatedAction(message: string) {
    if (message.includes("réserver") || message.includes("rdv")) return "open-rdv";
    if (message.includes("problème") || message.includes("panne")) return "ticket-sav";
    if (message.includes("devis")) return "show-offres";
    if (message.includes("formation")) return "show-formations";
    return "chat";
  }
  