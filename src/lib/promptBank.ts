export const injectCustomerData = (customer: any) => {
    return `
  Client: ${customer.nom}
  Secteur: ${customer.secteur}
  Historique: ${customer.messages.join("\n")}
  
  Tu dois adapter ta réponse en prenant en compte ce contexte.
  `;
  };
  