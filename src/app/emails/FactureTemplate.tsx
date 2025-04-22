import { Html } from "@react-email/html";
import { Text, Heading, Section } from "@react-email/components";

export const FactureTemplate = ({ facture }: { facture: any }) => (
  <Html>
    <Section>
      <Heading>Facture NovaCore</Heading>
      <Text>Client : {facture.nom}</Text>
      <Text>Date : {facture.date}</Text>
      <Text>Montant : {facture.montant / 100} €</Text>
      <Text>Moyen de paiement : {facture.moyen}</Text>
    </Section>
  </Html>
);
