import LegalPageTemplate from '@/components/LegalPageTemplate'

export const metadata = {
  title: 'Politique de Cookies - Datafuse Studio',
  description: 'Comment nous utilisons les cookies sur notre site',
}

export default function PolitiqueCookies() {
  return (
    <LegalPageTemplate title="Politique de Cookies" lastUpdated="15 Mars 2026">
      <p>
        Cette politique explique ce que sont les cookies, comment nous les utilisons sur le site <strong>datafuse.fr</strong>,
        et comment vous pouvez contrôler leur utilisation conformément au RGPD et à la directive ePrivacy.
      </p>

      <h2>1. Qu'est-ce qu'un Cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lors de votre visite sur un site internet.
        Les cookies permettent au site de mémoriser vos actions et préférences (comme la langue, la taille des caractères, etc.) sur une période donnée.
      </p>

      <h2>2. Types de Cookies Utilisés</h2>

      <h3>2.1 Cookies Strictement Nécessaires</h3>
      <p>
        Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement activés uniquement en réponse à des actions que vous effectuez (comme la connexion, les préférences de langue).
      </p>
      <table>
        <thead>
          <tr>
            <th>Nom du Cookie</th>
            <th>Finalité</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cookieConsent</td>
            <td>Stocke vos préférences en matière de cookies</td>
            <td>12 mois</td>
          </tr>
          <tr>
            <td>language</td>
            <td>Mémorise votre choix de langue</td>
            <td>Session</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Cookies Analytiques</h3>
      <p>
        Ces cookies nous permettent de mesurer l'audience du site, les pages visitées, le temps passé, etc. Ils nous aident à améliorer le site.
        <strong> Ces cookies nécessitent votre consentement préalable.</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Fournisseur</th>
            <th>Finalité</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_ga, _gid</td>
            <td>Google Analytics</td>
            <td>Analyse du trafic et du comportement des utilisateurs</td>
            <td>2 ans / 24 heures</td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 Cookies Marketing</h3>
      <p>
        Ces cookies sont utilisés pour vous proposer des publicités pertinentes et suivre l'efficacité de nos campagnes.
        <strong> Ces cookies nécessitent votre consentement préalable.</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Fournisseur</th>
            <th>Finalité</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_fbp</td>
            <td>Facebook</td>
            <td>Suivi des conversions publicitaires</td>
            <td>3 mois</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Cookies Tiers</h2>
      <p>
        Certains cookies sont déposés par des services tiers que nous utilisons :
      </p>
      <ul>
        <li><strong>Google Analytics</strong> : pour mesurer l'audience</li>
        <li><strong>Facebook Pixel</strong> : pour le suivi des conversions publicitaires</li>
      </ul>
      <p>
        Ces services tiers ont leurs propres politiques de confidentialité que nous vous encourageons à consulter :
      </p>
      <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Google</a></li>
        <li><a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Facebook</a></li>
      </ul>

      <h2>4. Gestion de Vos Préférences</h2>

      <h3>4.1 Via Notre Bannière de Consentement</h3>
      <p>
        Lors de votre première visite, une bannière apparaît vous permettant de :
      </p>
      <ul>
        <li>Accepter tous les cookies</li>
        <li>N'accepter que les cookies nécessaires</li>
        <li>Personnaliser vos choix par catégorie</li>
      </ul>
      <p>
        Vous pouvez modifier vos préférences à tout moment en cliquant sur le bouton "Gérer les cookies" en bas de page.
      </p>

      <h3>4.2 Via Votre Navigateur</h3>
      <p>
        Vous pouvez également configurer votre navigateur pour accepter ou refuser les cookies :
      </p>
      <ul>
        <li><strong>Google Chrome</strong> : Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données de sites</li>
        <li><strong>Firefox</strong> : Options &gt; Vie privée et sécurité &gt; Cookies et données de sites</li>
        <li><strong>Safari</strong> : Préférences &gt; Confidentialité &gt; Cookies et données de sites web</li>
        <li><strong>Edge</strong> : Paramètres &gt; Cookies et autorisations de site</li>
      </ul>

      <p>
        <strong>Attention :</strong> Le refus de certains cookies peut affecter votre expérience sur notre site et limiter certaines fonctionnalités.
      </p>

      <h2>5. Durée de Conservation</h2>
      <p>
        Les cookies ont des durées de vie variables selon leur nature :
      </p>
      <ul>
        <li><strong>Cookies de session</strong> : supprimés à la fermeture du navigateur</li>
        <li><strong>Cookies persistants</strong> : conservés pendant une durée déterminée (13 mois maximum pour les cookies analytics)</li>
      </ul>

      <h2>6. Cookies et Données Personnelles</h2>
      <p>
        Certains cookies peuvent collecter des données à caractère personnel. Ces données sont traitées conformément à notre
        <a href="/politique-confidentialite"> Politique de Confidentialité</a>.
      </p>

      <h2>7. Mises à Jour</h2>
      <p>
        Nous pouvons être amenés à mettre à jour cette politique de cookies pour refléter les changements dans nos pratiques
        ou pour d'autres raisons opérationnelles, légales ou réglementaires.
      </p>

      <h2>8. Questions et Contact</h2>
      <p>
        Pour toute question concernant l'utilisation des cookies sur notre site :
      </p>
      <ul>
        <li><strong>Email :</strong> contact@datafuse.fr</li>
        <li><strong>Courrier :</strong> [adresse postale] (à compléter)</li>
      </ul>

      <h2>9. Ressources Utiles</h2>
      <p>
        Pour en savoir plus sur les cookies et comment les gérer :
      </p>
      <ul>
        <li><a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer">CNIL - Cookies et traceurs</a></li>
        <li><a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">AboutCookies.org</a></li>
        <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">AllAboutCookies.org</a></li>
      </ul>
    </LegalPageTemplate>
  )
}
