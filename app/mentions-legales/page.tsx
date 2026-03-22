import LegalPageTemplate from '@/components/LegalPageTemplate'

export const metadata = {
  title: 'Mentions Légales - Datafuse Studio',
  description: 'Mentions légales du site Datafuse Studio',
}

export default function MentionsLegales() {
  return (
    <LegalPageTemplate title="Mentions Légales" lastUpdated="15 Mars 2026">
      <h2>1. Éditeur du Site</h2>
      <p>
        Le site <strong>datafuse.fr</strong> est édité par :
      </p>
      <ul>
        <li><strong>Raison sociale :</strong> DATAFUSE STUDIO (à compléter)</li>
        <li><strong>Forme juridique :</strong> [SASU/SAS/SARL] (à compléter)</li>
        <li><strong>Capital social :</strong> [montant] euros (à compléter)</li>
        <li><strong>SIRET :</strong> [votre numéro SIRET] (à compléter)</li>
        <li><strong>N° de TVA intracommunautaire :</strong> [votre numéro de TVA] (à compléter)</li>
        <li><strong>Siège social :</strong> [adresse complète] (à compléter)</li>
        <li><strong>Email :</strong> contact@datafuse.fr</li>
        <li><strong>Téléphone :</strong> [numéro de téléphone] (à compléter)</li>
      </ul>

      <p>
        <strong>Directeur de la publication :</strong> [Nom du directeur] (à compléter)
      </p>

      <h2>2. Hébergement</h2>
      <p>
        Le site est hébergé par :
      </p>
      <ul>
        <li><strong>Nom de l'hébergeur :</strong> Vercel Inc.</li>
        <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
        <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
      </ul>

      <h2>3. Propriété Intellectuelle</h2>
      <p>
        L'ensemble du contenu de ce site (textes, images, vidéos, design, charte graphique, logos, etc.) est la propriété exclusive de DATAFUSE STUDIO ou de ses partenaires, sauf mention contraire.
      </p>
      <p>
        Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de DATAFUSE STUDIO.
      </p>

      <h2>4. Protection des Données Personnelles</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
      </p>
      <p>
        Pour exercer ce droit, veuillez nous contacter à l'adresse : <strong>contact@datafuse.fr</strong>
      </p>
      <p>
        Pour plus d'informations, consultez notre <a href="/politique-confidentialite">Politique de Confidentialité</a>.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Ce site utilise des cookies pour améliorer l'expérience utilisateur. Pour en savoir plus, consultez notre <a href="/politique-cookies">Politique de Cookies</a>.
      </p>

      <h2>6. Responsabilité</h2>
      <p>
        DATAFUSE STUDIO s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, DATAFUSE STUDIO ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
      </p>
      <p>
        DATAFUSE STUDIO ne pourra être tenu responsable des dommages directs et indirects consécutifs à l'accès au site.
      </p>

      <h2>7. Liens Hypertextes</h2>
      <p>
        Le site peut contenir des liens vers d'autres sites internet. DATAFUSE STUDIO n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
      </p>

      <h2>8. Droit Applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
      </p>

      <h2>9. Contact</h2>
      <p>
        Pour toute question concernant les mentions légales, vous pouvez nous contacter :
      </p>
      <ul>
        <li><strong>Par email :</strong> contact@datafuse.fr</li>
        <li><strong>Par courrier :</strong> [adresse postale] (à compléter)</li>
      </ul>
    </LegalPageTemplate>
  )
}
