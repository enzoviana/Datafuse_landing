import type { Lang } from "./i18n";

type Loc<T> = Record<Lang, T>;

export type PortfolioProject = {
  slug: string;
  year: string;
  grad: string;
  client: string;
  stack: string[];
  tag: Loc<string>;
  title: string;
  desc: Loc<string>;
  industry: Loc<string>;
  duration: Loc<string>;
  role: Loc<string>;
  challenge: Loc<string>;
  approach: Loc<string[]>;
  outcome: Loc<{ k: string; v: string }[]>;
  testimonial?: Loc<{ quote: string; author: string; role: string }>;
  metaTitle: Loc<string>;
  metaDesc: Loc<string>;
};

export type LocalizedProject = {
  slug: string;
  year: string;
  grad: string;
  client: string;
  stack: string[];
  tag: string;
  title: string;
  desc: string;
  industry: string;
  duration: string;
  role: string;
  challenge: string;
  approach: string[];
  outcome: { k: string; v: string }[];
  testimonial?: { quote: string; author: string; role: string };
  metaTitle: string;
  metaDesc: string;
};

export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "medialink",
    title: "Medialink SAAS",
    year: "2025",
    grad: "linear-gradient(135deg, oklch(0.72 0.14 250), oklch(0.45 0.16 280))",
    client: "Medialink",
    stack: ["TypeScript", "React", "React Native", "Postgres", "Node.js", "ESC/POS"],
    tag: { en: "SaaS · Web + Mobile + CMS", fr: "SaaS · Web + Mobile + CMS", pt: "SaaS · Web + Mobile + CMS" },
    desc: {
      en: "Queue-management SaaS with ticket printing, a companion mobile app, and a CMS to customize every kiosk.",
      fr: "SaaS de gestion de file d'attente avec impression de ticket, application mobile compagnon et CMS pour personnaliser chaque kiosk.",
      pt: "SaaS de gestão de filas com impressão de senhas, app mobile companion e CMS para personalizar cada quiosque.",
    },
    industry: { en: "Retail · Public services", fr: "Retail · Services publics", pt: "Retalho · Serviços públicos" },
    duration: { en: "12 weeks", fr: "12 semaines", pt: "12 semanas" },
    role: {
      en: "Product design, full-stack web, mobile, kiosk CMS",
      fr: "Design produit, full-stack web, mobile, CMS kiosk",
      pt: "Design de produto, full-stack web, mobile, CMS de quiosque",
    },
    challenge: {
      en: "Medialink operates self-service kiosks across retail, healthcare and admin sites. Each client wanted a different look, different flows, different ticket layouts — and the existing setup required developer time for every change. We rebuilt the entire stack: a multi-tenant SaaS, a mobile companion app for staff, and a CMS so non-technical teams can re-skin a kiosk in minutes.",
      fr: "Medialink exploite des bornes en libre-service dans le retail, la santé et l'administration. Chaque client voulait un look différent, des parcours différents, des tickets différents — et l'ancien système exigeait un dev pour chaque changement. Nous avons reconstruit toute la stack : un SaaS multi-tenant, une app mobile compagnon pour les équipes et un CMS pour qu'un non-technicien puisse re-skinner une borne en quelques minutes.",
      pt: "A Medialink opera quiosques self-service em retalho, saúde e administração. Cada cliente queria um visual diferente, fluxos diferentes, tickets diferentes — e o sistema antigo exigia um programador para cada alteração. Reconstruímos toda a stack: um SaaS multi-tenant, uma app móvel companion para as equipas e um CMS que permite a um não-técnico re-personalizar um quiosque em minutos.",
    },
    approach: {
      en: [
        "Designed a multi-tenant architecture so a single deployment serves dozens of branded kiosks.",
        "Built a drag-and-drop CMS for screens, flows, branding and ticket templates — live preview included.",
        "Shipped a React Native companion app for staff: live queue, call next, reassign, statistics.",
        "Wired ESC/POS thermal printer drivers with offline fallback and automatic recovery.",
      ],
      fr: [
        "Architecture multi-tenant : un seul déploiement sert des dizaines de bornes brandées.",
        "CMS drag-and-drop pour écrans, parcours, branding et templates de ticket — avec preview en direct.",
        "App compagnon React Native pour les équipes : file en direct, appel suivant, réaffectation, statistiques.",
        "Drivers ESC/POS pour imprimantes thermiques avec fallback offline et reprise automatique.",
      ],
      pt: [
        "Desenhámos uma arquitetura multi-tenant — uma única deployment serve dezenas de quiosques personalizados.",
        "Construímos um CMS drag-and-drop para ecrãs, fluxos, branding e templates de senhas, com preview em direto.",
        "Lançámos uma app companion em React Native: fila em tempo real, chamar próximo, reatribuir, estatísticas.",
        "Integrámos drivers ESC/POS de impressoras térmicas com fallback offline e recuperação automática.",
      ],
    },
    outcome: {
      en: [
        { k: "−92%", v: "time to re-skin a kiosk" },
        { k: "30+", v: "kiosks live across France" },
        { k: "0", v: "developer touch for client tweaks" },
      ],
      fr: [
        { k: "−92%", v: "temps pour re-skinner une borne" },
        { k: "30+", v: "bornes en production en France" },
        { k: "0", v: "intervention dev pour les ajustements client" },
      ],
      pt: [
        { k: "−92%", v: "tempo para re-personalizar um quiosque" },
        { k: "30+", v: "quiosques em produção em França" },
        { k: "0", v: "intervenção dev para ajustes do cliente" },
      ],
    },
    metaTitle: {
      en: "Medialink SAAS — Queue Management & Kiosk CMS · DATAFUSE Studio",
      fr: "Medialink SAAS — Gestion de file & CMS Kiosk · DATAFUSE Studio",
      pt: "Medialink SAAS — Gestão de Filas & CMS de Quiosques · DATAFUSE Studio",
    },
    metaDesc: {
      en: "Case study: Medialink SaaS — web platform, mobile companion app and a no-code CMS to customize every self-service kiosk.",
      fr: "Cas client : Medialink SaaS — plateforme web, app mobile compagnon et CMS no-code pour personnaliser chaque borne libre-service.",
      pt: "Case study: Medialink SaaS — plataforma web, app móvel companion e CMS no-code para personalizar cada quiosque self-service.",
    },
  },
  {
    slug: "dimotec-controle",
    title: "Dimotec Contrôle",
    year: "2024",
    grad: "linear-gradient(135deg, oklch(0.70 0.12 50), oklch(0.40 0.10 30))",
    client: "Dimotec Contrôle",
    stack: ["TypeScript", "React", "TanStack Start", "Postgres", "PDF", "DocuSign API"],
    tag: { en: "Web platform · Field operations", fr: "Plateforme web · Opérations terrain", pt: "Plataforma web · Operações de campo" },
    desc: {
      en: "End-to-end platform: quote generation, in-person client signature, mission orders, and a loyalty wallet — all in one tool.",
      fr: "Plateforme tout-en-un : génération de devis, signature client en présentiel, ordres de mission et cagnotte de fidélité.",
      pt: "Plataforma ponta-a-ponta: geração de orçamentos, assinatura presencial do cliente, ordens de missão e carteira de fidelização.",
    },
    industry: { en: "Inspection & maintenance", fr: "Contrôle & maintenance", pt: "Inspeção & manutenção" },
    duration: { en: "10 weeks", fr: "10 semaines", pt: "10 semanas" },
    role: {
      en: "Product design, full-stack engineering, integrations",
      fr: "Design produit, ingénierie full-stack, intégrations",
      pt: "Design de produto, engenharia full-stack, integrações",
    },
    challenge: {
      en: "Dimotec's field technicians juggled three tools — quotes in Word, signatures on paper, mission orders by email — and lost hours per intervention. Clients had no loyalty incentive and the back-office re-typed every quote into the accounting system. They needed one platform that does it all, from the van.",
      fr: "Les techniciens de Dimotec jonglaient entre trois outils — devis Word, signatures papier, ordres de mission par email — et perdaient des heures par intervention. Les clients n'avaient aucun levier de fidélité et le back-office ressaisissait chaque devis dans la compta. Il fallait une plateforme unique, utilisable depuis le camion.",
      pt: "Os técnicos de campo da Dimotec usavam três ferramentas — orçamentos em Word, assinaturas em papel, ordens de missão por email — e perdiam horas por intervenção. Os clientes não tinham qualquer incentivo de fidelidade e o back-office voltava a digitar cada orçamento na contabilidade. Era preciso uma única plataforma, usável a partir da carrinha.",
    },
    approach: {
      en: [
        "Designed a mobile-first quote builder with templated line items and tax handling.",
        "Wired in-person digital signature with timestamped PDF generation and email delivery.",
        "Auto-generated mission orders from signed quotes — synced with the technician roster.",
        "Built a points-based loyalty wallet with referral codes and a customer portal.",
      ],
      fr: [
        "Constructeur de devis mobile-first avec lignes typées et gestion TVA.",
        "Signature digitale en présentiel, PDF horodaté et envoi par email automatique.",
        "Génération automatique d'ordres de mission depuis les devis signés, synchronisée avec le planning.",
        "Cagnotte de fidélité à points avec parrainage et portail client dédié.",
      ],
      pt: [
        "Construtor de orçamentos mobile-first com linhas tipificadas e gestão de IVA.",
        "Assinatura digital presencial com PDF datado e envio automático por email.",
        "Geração automática de ordens de missão a partir de orçamentos assinados — sincronizada com o planeamento.",
        "Carteira de fidelização por pontos com referrals e portal de cliente dedicado.",
      ],
    },
    outcome: {
      en: [
        { k: "−74%", v: "time per intervention paperwork" },
        { k: "+38%", v: "client retention after 6 months" },
        { k: "100%", v: "of quotes signed in one visit" },
      ],
      fr: [
        { k: "−74%", v: "de paperasse par intervention" },
        { k: "+38%", v: "de rétention client après 6 mois" },
        { k: "100%", v: "des devis signés en une visite" },
      ],
      pt: [
        { k: "−74%", v: "de burocracia por intervenção" },
        { k: "+38%", v: "de retenção de clientes após 6 meses" },
        { k: "100%", v: "dos orçamentos assinados numa só visita" },
      ],
    },
    metaTitle: {
      en: "Dimotec Contrôle — Quote, Signature & Mission Orders Platform · DATAFUSE Studio",
      fr: "Dimotec Contrôle — Plateforme Devis, Signature & Ordres de Mission · DATAFUSE Studio",
      pt: "Dimotec Contrôle — Plataforma de Orçamentos, Assinatura & Ordens de Missão · DATAFUSE Studio",
    },
    metaDesc: {
      en: "Case study: an end-to-end field-operations platform — quotes, in-person signature, mission orders and a loyalty wallet.",
      fr: "Cas client : plateforme tout-en-un pour le terrain — devis, signature en présentiel, ordres de mission et cagnotte fidélité.",
      pt: "Case study: plataforma ponta-a-ponta para operações de campo — orçamentos, assinatura presencial, ordens de missão e fidelização.",
    },
  },
  {
    slug: "rio-ave-fc",
    title: "Rio Ave FC",
    year: "2025",
    grad: "linear-gradient(135deg, oklch(0.65 0.18 25), oklch(0.30 0.10 250))",
    client: "Rio Ave Futebol Clube",
    stack: ["React Native", "Expo", "Supabase", "OneSignal", "Sports Data API"],
    tag: { en: "Mobile app · Sports", fr: "App mobile · Sport", pt: "App mobile · Desporto" },
    desc: {
      en: "Official mobile app for the Rio Ave FC team — live scores, squad, news, tickets and push notifications.",
      fr: "Application mobile officielle de l'équipe Rio Ave FC — scores en direct, effectif, actus, billetterie et notifications push.",
      pt: "App móvel oficial do plantel do Rio Ave FC — resultados em direto, plantel, notícias, bilheteira e notificações push.",
    },
    industry: { en: "Sports · Football club", fr: "Sport · Club de football", pt: "Desporto · Clube de futebol" },
    duration: { en: "8 weeks", fr: "8 semaines", pt: "8 semanas" },
    role: {
      en: "Product design, React Native engineering, store submission",
      fr: "Design produit, ingénierie React Native, soumission stores",
      pt: "Design de produto, engenharia React Native, submissão nas stores",
    },
    challenge: {
      en: "Rio Ave FC wanted a single home for fans: live match data, squad and staff, news, ticketing and a direct push channel from the club. The brand had to feel premium and unmistakably the club's — without any of the generic 'sports app' look.",
      fr: "Rio Ave FC voulait un point d'entrée unique pour les supporters : données live du match, effectif et staff, actus, billetterie et un canal push direct depuis le club. La marque devait être premium et reconnaissable — sans tomber dans le look générique 'app de sport'.",
      pt: "O Rio Ave FC queria um único ponto de entrada para os adeptos: dados ao vivo do jogo, plantel e staff, notícias, bilheteira e um canal push direto a partir do clube. A marca tinha de ser premium e inconfundível — sem cair no visual genérico de 'app desportiva'.",
    },
    approach: {
      en: [
        "Designed a club-native visual system: typography, colour and motion that feel like the kit.",
        "Built live-match views with a sports data API: lineups, events, stats, streak history.",
        "Integrated ticketing, news feed and push segments (season tickets, away travel, U23).",
        "Shipped to TestFlight on day 28; published to App Store and Google Play on week 8.",
      ],
      fr: [
        "Système visuel pensé club : typographie, couleur et animations dans l'ADN du maillot.",
        "Vues match en direct via une API de données sportives : compos, événements, stats, série.",
        "Intégration billetterie, fil d'actus et segments push (abonnés, déplacements, U23).",
        "Publication TestFlight au jour 28 ; mise en ligne App Store et Google Play en semaine 8.",
      ],
      pt: [
        "Sistema visual pensado para o clube: tipografia, cor e movimento no ADN do equipamento.",
        "Vistas de jogo ao vivo com API de dados desportivos: onzes, eventos, estatísticas e historial.",
        "Bilheteira integrada, feed de notícias e segmentos push (sócios, deslocações, sub-23).",
        "Publicação na TestFlight ao dia 28; live na App Store e Google Play na semana 8.",
      ],
    },
    outcome: {
      en: [
        { k: "50k+", v: "installs in the first 3 months" },
        { k: "4.7★", v: "average store rating" },
        { k: "+62%", v: "ticket pre-sales via the app" },
      ],
      fr: [
        { k: "50k+", v: "installations en 3 mois" },
        { k: "4.7★", v: "note moyenne sur les stores" },
        { k: "+62%", v: "de pré-ventes de billets via l'app" },
      ],
      pt: [
        { k: "50k+", v: "instalações em 3 meses" },
        { k: "4.7★", v: "avaliação média nas stores" },
        { k: "+62%", v: "de pré-vendas de bilhetes pela app" },
      ],
    },
    metaTitle: {
      en: "Rio Ave FC — Official Football Club Mobile App · DATAFUSE Studio",
      fr: "Rio Ave FC — App mobile officielle du club · DATAFUSE Studio",
      pt: "Rio Ave FC — App móvel oficial do clube · DATAFUSE Studio",
    },
    metaDesc: {
      en: "Case study: the official Rio Ave FC mobile app — live match data, squad, news, ticketing and push.",
      fr: "Cas client : l'app mobile officielle du Rio Ave FC — match en direct, effectif, actus, billetterie et push.",
      pt: "Case study: a app móvel oficial do Rio Ave FC — jogo ao vivo, plantel, notícias, bilheteira e push.",
    },
  },
];

export const PORTFOLIO_BY_SLUG: Record<string, PortfolioProject> = Object.fromEntries(
  PORTFOLIO.map((p) => [p.slug, p])
);

export function localizeProject(p: PortfolioProject, lang: Lang): LocalizedProject {
  return {
    slug: p.slug,
    year: p.year,
    grad: p.grad,
    client: p.client,
    stack: p.stack,
    title: p.title,
    tag: p.tag[lang],
    desc: p.desc[lang],
    industry: p.industry[lang],
    duration: p.duration[lang],
    role: p.role[lang],
    challenge: p.challenge[lang],
    approach: p.approach[lang],
    outcome: p.outcome[lang],
    testimonial: p.testimonial?.[lang],
    metaTitle: p.metaTitle[lang],
    metaDesc: p.metaDesc[lang],
  };
}

export function getLocalizedPortfolio(lang: Lang): LocalizedProject[] {
  return PORTFOLIO.map((p) => localizeProject(p, lang));
}
