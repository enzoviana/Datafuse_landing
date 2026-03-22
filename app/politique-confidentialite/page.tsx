import LegalPageTemplate from '@/components/LegalPageTemplate'

export const metadata = {
  title: 'Politique de Confidentialité - Datafuse Studio',
  description: 'Politique de confidentialité et protection des données personnelles',
}

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageTemplate title="Politique de Confidentialité" lastUpdated="15 Mars 2026">
      <p>
        DATAFUSE STUDIO (ci-après "nous", "notre" ou "Datafuse") s'engage à protéger la vie privée de ses utilisateurs.
        Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles
        conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <h2>1. Responsable du Traitement</h2>
      <p>
        Le responsable du traitement des données est :
      </p>
      <ul>
        <li><strong>Raison sociale :</strong> DATAFUSE STUDIO</li>
        <li><strong>Adresse :</strong> [adresse] (à compléter)</li>
        <li><strong>Email :</strong> contact@datafuse.fr</li>
        <li><strong>SIRET :</strong> [numéro SIRET] (à compléter)</li>
      </ul>

      <h2>2. Données Collectées</h2>
      <p>
        Nous collectons les données personnelles suivantes :
      </p>

      <h3>2.1 Données collectées via le formulaire de contact</h3>
      <ul>
        <li>Nom complet</li>
        <li>Adresse email professionnelle</li>
        <li>Type de service demandé</li>
        <li>Budget estimé</li>
        <li>Description du projet</li>
      </ul>

      <h3>2.2 Données collectées automatiquement</h3>
      <ul>
        <li>Adresse IP</li>
        <li>Type de navigateur et version</li>
        <li>Système d'exploitation</li>
        <li>Pages visitées et temps passé sur le site</li>
        <li>Date et heure de connexion</li>
        <li>Données de cookies (avec votre consentement)</li>
      </ul>

      <h2>3. Finalités du Traitement</h2>
      <p>
        Vos données personnelles sont collectées pour les finalités suivantes :
      </p>
      <ul>
        <li><strong>Répondre à vos demandes de contact</strong> : traitement de votre demande et prise de contact</li>
        <li><strong>Améliorer nos services</strong> : analyse du trafic et optimisation du site</li>
        <li><strong>Communication marketing</strong> : envoi d'informations sur nos services (avec votre consentement préalable)</li>
        <li><strong>Respect de nos obligations légales</strong> : comptabilité, fiscalité, etc.</li>
      </ul>

      <h2>4. Base Légale du Traitement</h2>
      <p>
        Le traitement de vos données repose sur :
      </p>
      <ul>
        <li><strong>Votre consentement</strong> : pour les cookies non essentiels et les communications marketing</li>
        <li><strong>L'exécution d'un contrat</strong> : pour le traitement de votre demande de devis ou de prestation</li>
        <li><strong>Notre intérêt légitime</strong> : pour l'amélioration de nos services et la sécurité du site</li>
        <li><strong>Obligations légales</strong> : pour la conservation des données comptables et fiscales</li>
      </ul>

      <h2>5. Durée de Conservation</h2>
      <p>
        Vos données sont conservées pendant les durées suivantes :
      </p>
      <table>
        <thead>
          <tr>
            <th>Type de données</th>
            <th>Durée de conservation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Données du formulaire de contact</td>
            <td>3 ans à compter du dernier contact</td>
          </tr>
          <tr>
            <td>Cookies analytics</td>
            <td>13 mois maximum</td>
          </tr>
          <tr>
            <td>Données comptables</td>
            <td>10 ans (obligation légale)</td>
          </tr>
          <tr>
            <td>Logs de connexion</td>
            <td>12 mois</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Destinataires des Données</h2>
      <p>
        Vos données personnelles peuvent être transmises à :
      </p>
      <ul>
        <li><strong>Personnel autorisé de Datafuse</strong> : pour le traitement de vos demandes</li>
        <li><strong>Prestataires techniques</strong> :
          <ul>
            <li>Vercel (hébergement du site)</li>
            <li>Resend (service d'envoi d'emails)</li>
            <li>Google Analytics (si consentement donné pour les cookies analytics)</li>
          </ul>
        </li>
        <li><strong>Autorités compétentes</strong> : en cas d'obligation légale</li>
      </ul>
      <p>
        Tous nos prestataires sont soumis à des obligations de confidentialité et de sécurité conformes au RGPD.
      </p>

      <h2>7. Transfert de Données hors UE</h2>
      <p>
        Certains de nos prestataires (Vercel, Resend) peuvent être situés hors de l'Union Européenne, notamment aux États-Unis.
        Ces transferts sont encadrés par des garanties appropriées conformément au RGPD (clauses contractuelles types, Privacy Shield, etc.).
      </p>

      <h2>8. Vos Droits</h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants :
      </p>
      <ul>
        <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
        <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
        <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
        <li><strong>Droit à la limitation du traitement</strong> : limiter l'utilisation de vos données</li>
        <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
        <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
        <li><strong>Droit de retirer votre consentement</strong> : à tout moment pour les traitements basés sur le consentement</li>
      </ul>

      <p>
        Pour exercer ces droits, contactez-nous à : <strong>contact@datafuse.fr</strong>
      </p>
      <p>
        Nous nous engageons à répondre à votre demande dans un délai maximum d'<strong>un mois</strong>.
      </p>

      <h2>9. Droit de Réclamation</h2>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de la CNIL :
      </p>
      <ul>
        <li><strong>CNIL</strong> : Commission Nationale de l'Informatique et des Libertés</li>
        <li><strong>Adresse :</strong> 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
        <li><strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></li>
      </ul>

      <h2>10. Sécurité des Données</h2>
      <p>
        Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre :
      </p>
      <ul>
        <li>L'accès non autorisé</li>
        <li>La modification, divulgation ou destruction non autorisée</li>
        <li>La perte accidentelle</li>
      </ul>
      <p>
        Ces mesures incluent notamment :
      </p>
      <ul>
        <li>Chiffrement des données en transit (HTTPS/SSL)</li>
        <li>Accès restreint aux données personnelles</li>
        <li>Sauvegardes régulières</li>
        <li>Contrôle d'accès et authentification</li>
      </ul>

      <h2>11. Cookies</h2>
      <p>
        Pour plus d'informations sur l'utilisation des cookies, consultez notre <a href="/politique-cookies">Politique de Cookies</a>.
      </p>

      <h2>12. Modifications de la Politique</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
        La date de dernière mise à jour est indiquée en haut de cette page.
        Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
      </p>

      <h2>13. Contact</h2>
      <p>
        Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
      </p>
      <ul>
        <li><strong>Email :</strong> contact@datafuse.fr</li>
        <li><strong>Courrier :</strong> [adresse postale] (à compléter)</li>
      </ul>
    </LegalPageTemplate>
  )
}
