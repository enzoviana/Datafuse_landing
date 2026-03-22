import LegalPageTemplate from '@/components/LegalPageTemplate'

export const metadata = {
  title: 'Conditions Générales de Vente - Datafuse Studio',
  description: 'Conditions Générales de Vente des prestations Datafuse Studio',
}

export default function CGV() {
  return (
    <LegalPageTemplate title="Conditions Générales de Vente" lastUpdated="15 Mars 2026">
      <p>
        Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre DATAFUSE STUDIO (ci-après "le Prestataire")
        et toute personne physique ou morale souhaitant bénéficier de ses services (ci-après "le Client").
      </p>

      <h2>1. Objet</h2>
      <p>
        Les présentes CGV ont pour objet de définir les conditions dans lesquelles le Prestataire fournit ses services de développement web, mobile,
        conseil en ingénierie logicielle et toute autre prestation liée à son activité.
      </p>

      <h2>2. Acceptation des CGV</h2>
      <p>
        Toute commande de prestations implique l'acceptation sans réserve des présentes CGV par le Client. Ces conditions prévalent sur tout autre document,
        sauf accord écrit préalable du Prestataire.
      </p>

      <h2>3. Services Proposés</h2>
      <p>
        Le Prestataire propose notamment les services suivants :
      </p>
      <ul>
        <li>Développement d'applications web (SaaS, sites vitrine, e-commerce)</li>
        <li>Développement d'applications mobiles (iOS, Android, multi-plateforme)</li>
        <li>Architecture et conception de solutions techniques</li>
        <li>Audit technique et optimisation de performances</li>
        <li>Maintenance et support technique</li>
        <li>Conseil et accompagnement CTO</li>
      </ul>

      <h2>4. Devis et Commande</h2>
      <h3>4.1 Devis</h3>
      <p>
        Tout projet fait l'objet d'un devis détaillé gratuit, valable 30 jours à compter de son émission. Le devis comprend :
      </p>
      <ul>
        <li>La description détaillée des prestations</li>
        <li>Le prix total HT et TTC</li>
        <li>Les délais de réalisation estimés</li>
        <li>Les modalités de paiement</li>
      </ul>

      <h3>4.2 Acceptation du Devis</h3>
      <p>
        Le devis signé et accompagné du règlement de l'acompte vaut commande ferme et définitive. Aucune prestation ne sera réalisée sans commande formalisée.
      </p>

      <h2>5. Prix et Modalités de Paiement</h2>
      <h3>5.1 Prix</h3>
      <p>
        Les prix sont exprimés en euros, hors taxes. La TVA applicable est celle en vigueur au jour de la facturation (20% en France métropolitaine).
        Les prix indiqués dans les devis sont fermes et non révisables pendant leur durée de validité.
      </p>

      <h3>5.2 Modalités de Paiement</h3>
      <p>
        Sauf accord particulier, le paiement s'effectue selon les modalités suivantes :
      </p>
      <ul>
        <li><strong>30% à la commande</strong> : acompte non remboursable</li>
        <li><strong>40% à mi-parcours</strong> : validation des développements en cours</li>
        <li><strong>30% à la livraison</strong> : mise en production et transfert des droits</li>
      </ul>

      <h3>5.3 Moyens de Paiement</h3>
      <p>
        Les paiements peuvent être effectués par :
      </p>
      <ul>
        <li>Virement bancaire (coordonnées sur facture)</li>
        <li>Carte bancaire (sur demande)</li>
      </ul>

      <h3>5.4 Retard de Paiement</h3>
      <p>
        En cas de retard de paiement, des pénalités de retard égales à trois fois le taux d'intérêt légal seront appliquées.
        Une indemnité forfaitaire de 40€ pour frais de recouvrement sera également due.
        Le Prestataire se réserve le droit de suspendre toute prestation en cours jusqu'au règlement complet des sommes dues.
      </p>

      <h2>6. Délais de Réalisation</h2>
      <p>
        Les délais indiqués dans le devis sont fournis à titre indicatif. Ils ne constituent pas un engagement ferme sauf mention contractuelle expresse.
        Les retards éventuels ne peuvent donner lieu à des pénalités, dommages et intérêts ou annulation de la commande.
      </p>
      <p>
        Les délais peuvent être prolongés en cas de :
      </p>
      <ul>
        <li>Retard dans la fourniture d'éléments par le Client</li>
        <li>Modifications du cahier des charges initial</li>
        <li>Force majeure</li>
      </ul>

      <h2>7. Obligations du Client</h2>
      <p>
        Le Client s'engage à :
      </p>
      <ul>
        <li>Fournir tous les éléments nécessaires à la réalisation de la prestation dans les délais convenus</li>
        <li>Désigner un interlocuteur unique pour le suivi du projet</li>
        <li>Répondre aux demandes de validation dans un délai de 7 jours ouvrés</li>
        <li>S'assurer qu'il dispose de tous les droits nécessaires sur les éléments fournis</li>
        <li>Effectuer les paiements selon l'échéancier convenu</li>
      </ul>

      <h2>8. Propriété Intellectuelle</h2>
      <h3>8.1 Transfert des Droits</h3>
      <p>
        Le Prestataire cède au Client, à titre exclusif, l'intégralité des droits de propriété intellectuelle sur les développements réalisés spécifiquement pour le projet,
        sous réserve du paiement intégral du prix convenu.
      </p>

      <h3>8.2 Code Source</h3>
      <p>
        Le code source est remis au Client à l'issue du projet via un repository Git (GitHub, GitLab ou Bitbucket).
        Le Client dispose de l'intégralité du code et peut le modifier librement.
      </p>

      <h3>8.3 Éléments Préexistants</h3>
      <p>
        Les frameworks, bibliothèques et outils open-source utilisés restent la propriété de leurs auteurs respectifs et sont soumis à leurs licences propres.
      </p>

      <h2>9. Garanties</h2>
      <h3>9.1 Garantie de Bon Fonctionnement</h3>
      <p>
        Le Prestataire garantit le bon fonctionnement des développements réalisés pendant une période de <strong>3 mois</strong> à compter de la livraison.
        Cette garantie couvre uniquement les bugs et dysfonctionnements liés au code développé par le Prestataire.
      </p>

      <h3>9.2 Exclusions</h3>
      <p>
        La garantie ne couvre pas :
      </p>
      <ul>
        <li>Les modifications effectuées par le Client ou un tiers</li>
        <li>Les problèmes liés à l'hébergement ou l'infrastructure</li>
        <li>Les incompatibilités avec des mises à jour tierces</li>
        <li>L'utilisation non conforme du logiciel</li>
      </ul>

      <h2>10. Maintenance et Support</h2>
      <p>
        Au-delà de la période de garantie, le Prestataire peut proposer des contrats de maintenance incluant :
      </p>
      <ul>
        <li>Mises à jour de sécurité</li>
        <li>Corrections de bugs</li>
        <li>Support technique</li>
        <li>Évolutions fonctionnelles</li>
      </ul>
      <p>
        Ces prestations font l'objet de devis spécifiques.
      </p>

      <h2>11. Confidentialité</h2>
      <p>
        Le Prestataire s'engage à préserver la confidentialité de toutes les informations qui lui seront communiquées par le Client dans le cadre de la prestation.
        Cet engagement perdure pendant toute la durée de la relation contractuelle et pendant 5 ans après son terme.
      </p>

      <h2>12. Responsabilité et Assurance</h2>
      <h3>12.1 Limitation de Responsabilité</h3>
      <p>
        Le Prestataire ne pourra être tenu responsable que des dommages directs prouvés, à l'exclusion de tout dommage indirect,
        tels que perte de chiffre d'affaires, perte de clientèle, préjudice d'image, etc.
      </p>
      <p>
        En tout état de cause, la responsabilité du Prestataire est limitée au montant total de la prestation facturée.
      </p>

      <h3>12.2 Assurance</h3>
      <p>
        Le Prestataire dispose d'une assurance responsabilité civile professionnelle couvrant son activité.
      </p>

      <h2>13. Force Majeure</h2>
      <p>
        Le Prestataire ne pourra être tenu responsable en cas de force majeure ou de circonstances indépendantes de sa volonté
        (catastrophe naturelle, grève, panne informatique majeure, etc.).
      </p>

      <h2>14. Résiliation</h2>
      <h3>14.1 Résiliation pour Faute</h3>
      <p>
        En cas de manquement grave de l'une des parties à ses obligations, l'autre partie peut résilier le contrat de plein droit après mise en demeure
        restée sans effet pendant 15 jours.
      </p>

      <h3>14.2 Résiliation à l'Initiative du Client</h3>
      <p>
        Le Client peut résilier le contrat à tout moment moyennant le paiement d'une indemnité égale à 50% du montant restant dû,
        en sus des sommes déjà facturées.
      </p>

      <h2>15. Droit Applicable et Litiges</h2>
      <p>
        Les présentes CGV sont régies par le droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable.
        À défaut, le litige sera porté devant les tribunaux compétents du ressort du siège social du Prestataire.
      </p>

      <h2>16. Modifications des CGV</h2>
      <p>
        Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.
      </p>

      <h2>17. Contact</h2>
      <p>
        Pour toute question concernant les présentes CGV :
      </p>
      <ul>
        <li><strong>DATAFUSE STUDIO</strong></li>
        <li><strong>Email :</strong> contact@datafuse.fr</li>
        <li><strong>Adresse :</strong> [adresse] (à compléter)</li>
        <li><strong>SIRET :</strong> [numéro] (à compléter)</li>
      </ul>
    </LegalPageTemplate>
  )
}
