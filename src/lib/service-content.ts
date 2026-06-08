import type { Lang } from "./i18n";

export type ServiceSlug = "web" | "mobile" | "design" | "ai";

type Loc<T> = Record<Lang, T>;

export type ServiceDetail = {
  slug: ServiceSlug;
  number: string;
  pricingFrom: string;
  stack: string[];
  title: Loc<string>;
  tagline: Loc<string>;
  intro: Loc<string>;
  capabilities: Loc<{ t: string; d: string }[]>;
  deliverables: Loc<string[]>;
  timeline: Loc<{ d: string; t: string; c: string }[]>;
  metaTitle: Loc<string>;
  metaDesc: Loc<string>;
};

export type LocalizedService = {
  slug: ServiceSlug;
  number: string;
  pricingFrom: string;
  stack: string[];
  title: string;
  tagline: string;
  intro: string;
  capabilities: { t: string; d: string }[];
  deliverables: string[];
  timeline: { d: string; t: string; c: string }[];
  metaTitle: string;
  metaDesc: string;
};

export const SERVICES: Record<ServiceSlug, ServiceDetail> = {
  web: {
    slug: "web",
    number: "01",
    pricingFrom: "$15,000",
    stack: ["TypeScript", "React", "TanStack Start", "Tailwind CSS", "Postgres", "Stripe", "Cloudflare / Vercel"],
    title: { en: "Web Applications", fr: "Applications Web", pt: "Aplicações Web" },
    tagline: {
      en: "SaaS, marketplaces, dashboards — built to scale from day one.",
      fr: "SaaS, marketplaces, dashboards — pensés pour passer à l'échelle dès le jour un.",
      pt: "SaaS, marketplaces, dashboards — desenhados para escalar desde o dia um.",
    },
    intro: {
      en: "We design and engineer modern web products on a stack that won't embarrass you in two years. SaaS dashboards, multi-sided marketplaces, internal tools — shipped fast, written cleanly, ready to grow.",
      fr: "Nous concevons et développons des produits web modernes sur une stack qui ne vous fera pas honte dans deux ans. Dashboards SaaS, marketplaces multi-faces, outils internes — livrés vite, codés proprement, prêts à grandir.",
      pt: "Desenhamos e desenvolvemos produtos web modernos numa stack que não o deixará envergonhado daqui a dois anos. Dashboards SaaS, marketplaces multi-lado, ferramentas internas — entregues rápido, escritos com cuidado, prontos a crescer.",
    },
    capabilities: {
      en: [
        { t: "SaaS dashboards", d: "Multi-tenant, role-based, billing-ready. The plumbing is the boring part — we just make it work." },
        { t: "Marketplaces", d: "Two-sided products with onboarding, search, payments and trust built in." },
        { t: "Internal tools", d: "Replace fragile spreadsheets and ageing back-offices with software your team actually likes." },
        { t: "API & integrations", d: "REST, webhooks, third-party syncs (Stripe, Resend, Supabase, etc.) — wired the right way." },
      ],
      fr: [
        { t: "Dashboards SaaS", d: "Multi-tenant, rôles, facturation prête. La plomberie est ennuyeuse — on fait juste en sorte que ça marche." },
        { t: "Marketplaces", d: "Produits deux faces avec onboarding, recherche, paiements et confiance intégrés." },
        { t: "Outils internes", d: "Remplacez les tableurs fragiles et les vieux back-offices par un logiciel que votre équipe aime utiliser." },
        { t: "API & intégrations", d: "REST, webhooks, syncs tierces (Stripe, Resend, Supabase…) — branchés comme il faut." },
      ],
      pt: [
        { t: "Dashboards SaaS", d: "Multi-tenant, com papéis e billing. A canalização é a parte chata — nós fazemos com que funcione." },
        { t: "Marketplaces", d: "Produtos de dois lados com onboarding, pesquisa, pagamentos e confiança incluídos." },
        { t: "Ferramentas internas", d: "Substitua folhas de cálculo frágeis e back-offices antigos por software que a sua equipa gosta de usar." },
        { t: "API & integrações", d: "REST, webhooks, syncs com terceiros (Stripe, Resend, Supabase…) — ligados da maneira certa." },
      ],
    },
    deliverables: {
      en: [
        "Architecture & technical specs",
        "Pixel-perfect responsive UI",
        "Authentication, roles & permissions",
        "Database schema with migrations",
        "Production deployment on your cloud",
        "Source code in your GitHub",
        "Documentation & handover",
      ],
      fr: [
        "Architecture & specs techniques",
        "UI responsive au pixel près",
        "Authentification, rôles & permissions",
        "Schéma de base de données avec migrations",
        "Déploiement en production sur votre cloud",
        "Code source dans votre GitHub",
        "Documentation & passation",
      ],
      pt: [
        "Arquitetura & especificações técnicas",
        "UI responsiva pixel-perfect",
        "Autenticação, papéis & permissões",
        "Schema de base de dados com migrações",
        "Deploy em produção no seu cloud",
        "Código fonte no seu GitHub",
        "Documentação & handover",
      ],
    },
    timeline: {
      en: [
        { d: "Week 1", t: "Scope & design", c: "Product brief, user flows, full UI in Figma." },
        { d: "Week 2", t: "Foundation", c: "Auth, schema, layouts, design system in code." },
        { d: "Week 3", t: "Feature build", c: "Core modules, integrations, polish." },
        { d: "Week 4", t: "Launch", c: "QA, deploy, monitoring, handover." },
      ],
      fr: [
        { d: "Semaine 1", t: "Cadrage & design", c: "Brief produit, parcours utilisateurs, UI complète sur Figma." },
        { d: "Semaine 2", t: "Fondations", c: "Auth, schéma, layouts, design system en code." },
        { d: "Semaine 3", t: "Build", c: "Modules clés, intégrations, finition." },
        { d: "Semaine 4", t: "Lancement", c: "QA, déploiement, monitoring, passation." },
      ],
      pt: [
        { d: "Semana 1", t: "Âmbito & design", c: "Brief de produto, fluxos, UI completa em Figma." },
        { d: "Semana 2", t: "Fundações", c: "Auth, schema, layouts, design system em código." },
        { d: "Semana 3", t: "Build", c: "Módulos principais, integrações, polimento." },
        { d: "Semana 4", t: "Lançamento", c: "QA, deploy, monitorização, handover." },
      ],
    },
    metaTitle: {
      en: "Web Application Development · DATAFUSE Studio",
      fr: "Développement d'Applications Web · DATAFUSE Studio",
      pt: "Desenvolvimento de Aplicações Web · DATAFUSE Studio",
    },
    metaDesc: {
      en: "Modern web apps engineered for scale — SaaS, marketplaces, dashboards. Fixed-scope projects from $15k.",
      fr: "Apps web modernes pensées pour l'échelle — SaaS, marketplaces, dashboards. Projets à périmètre fixe à partir de 15k$.",
      pt: "Apps web modernas pensadas para escala — SaaS, marketplaces, dashboards. Projetos de âmbito fixo a partir de 15k$.",
    },
  },
  mobile: {
    slug: "mobile",
    number: "02",
    pricingFrom: "$18,000",
    stack: ["React Native", "Expo", "TypeScript", "Supabase / Postgres", "RevenueCat", "Sentry", "OneSignal"],
    title: { en: "Mobile Applications", fr: "Applications Mobile", pt: "Aplicações Mobile" },
    tagline: {
      en: "iOS & Android apps with a native feel and cross-platform velocity.",
      fr: "Apps iOS & Android au rendu natif, avec la vélocité du cross-platform.",
      pt: "Apps iOS & Android com sensação nativa e a velocidade do cross-platform.",
    },
    intro: {
      en: "We build mobile apps that feel native, ship to both stores from one codebase, and don't make your users wait. From the first wireframe to App Store review, you have one team end to end.",
      fr: "Nous concevons des apps mobiles au rendu natif, livrées sur les deux stores depuis une seule base de code, et qui ne font pas attendre vos utilisateurs. Du premier wireframe à la review App Store, une seule équipe de bout en bout.",
      pt: "Construímos apps móveis com sensação nativa, publicadas em ambas as stores a partir de uma única codebase, e que não fazem os utilizadores esperar. Do primeiro wireframe à review na App Store, uma única equipa ponta-a-ponta.",
    },
    capabilities: {
      en: [
        { t: "Consumer apps", d: "Onboarding, social, content, commerce — fast, smooth, beautiful." },
        { t: "Companion apps", d: "Mobile experiences that extend an existing SaaS or hardware product." },
        { t: "Offline-first", d: "Sync engines that just work, even on the metro — local-first by default." },
        { t: "Native modules", d: "Bluetooth, camera, payments, push, deep links — we wire whatever you need." },
      ],
      fr: [
        { t: "Apps consumer", d: "Onboarding, social, contenu, commerce — rapide, fluide, beau." },
        { t: "Apps compagnon", d: "Expériences mobiles qui prolongent un SaaS ou un produit hardware existant." },
        { t: "Offline-first", d: "Moteurs de sync qui marchent même dans le métro — local-first par défaut." },
        { t: "Modules natifs", d: "Bluetooth, caméra, paiements, push, deep links — on branche ce qu'il faut." },
      ],
      pt: [
        { t: "Apps consumer", d: "Onboarding, social, conteúdo, comércio — rápido, fluido, bonito." },
        { t: "Apps companion", d: "Experiências mobile que estendem um SaaS ou produto hardware existente." },
        { t: "Offline-first", d: "Motores de sync que funcionam mesmo no metro — local-first por defeito." },
        { t: "Módulos nativos", d: "Bluetooth, câmara, pagamentos, push, deep links — ligamos o que for preciso." },
      ],
    },
    deliverables: {
      en: [
        "iOS + Android from one codebase",
        "Full UI/UX in Figma",
        "App Store & Play Store submission",
        "Push notifications & deep links",
        "Backend API & authentication",
        "TestFlight & internal testing setup",
        "Source code & store credentials",
      ],
      fr: [
        "iOS + Android depuis une seule base de code",
        "UI/UX complète sur Figma",
        "Soumission App Store & Play Store",
        "Notifications push & deep links",
        "API backend & authentification",
        "Mise en place TestFlight & tests internes",
        "Code source & accès stores",
      ],
      pt: [
        "iOS + Android a partir de uma só codebase",
        "UI/UX completa em Figma",
        "Submissão na App Store & Play Store",
        "Notificações push & deep links",
        "API backend & autenticação",
        "Setup de TestFlight & testes internos",
        "Código fonte & acessos das stores",
      ],
    },
    timeline: {
      en: [
        { d: "Week 1", t: "Scope & design", c: "User flows, native interactions, full screens in Figma." },
        { d: "Week 2", t: "Foundation", c: "Auth, navigation, design system, API." },
        { d: "Week 3", t: "Feature build", c: "Core modules, native integrations, animations." },
        { d: "Week 4", t: "Store launch", c: "TestFlight, store assets, submission." },
      ],
      fr: [
        { d: "Semaine 1", t: "Cadrage & design", c: "Parcours utilisateurs, interactions natives, écrans complets sur Figma." },
        { d: "Semaine 2", t: "Fondations", c: "Auth, navigation, design system, API." },
        { d: "Semaine 3", t: "Build", c: "Modules clés, intégrations natives, animations." },
        { d: "Semaine 4", t: "Stores", c: "TestFlight, assets stores, soumission." },
      ],
      pt: [
        { d: "Semana 1", t: "Âmbito & design", c: "Fluxos, interações nativas, ecrãs completos em Figma." },
        { d: "Semana 2", t: "Fundações", c: "Auth, navegação, design system, API." },
        { d: "Semana 3", t: "Build", c: "Módulos principais, integrações nativas, animações." },
        { d: "Semana 4", t: "Stores", c: "TestFlight, assets das stores, submissão." },
      ],
    },
    metaTitle: {
      en: "Mobile App Development (iOS & Android) · DATAFUSE Studio",
      fr: "Développement d'Apps Mobile (iOS & Android) · DATAFUSE Studio",
      pt: "Desenvolvimento de Apps Mobile (iOS & Android) · DATAFUSE Studio",
    },
    metaDesc: {
      en: "Native-feeling iOS & Android apps shipped from one codebase. From scope to App Store in weeks, not months.",
      fr: "Apps iOS & Android au rendu natif depuis une seule base de code. Du cadrage à l'App Store en semaines, pas en mois.",
      pt: "Apps iOS & Android com sensação nativa a partir de uma única codebase. Do âmbito à App Store em semanas, não em meses.",
    },
  },
  design: {
    slug: "design",
    number: "03",
    pricingFrom: "$8,000",
    stack: ["Figma", "Framer", "Rive", "Lottie", "Linear"],
    title: { en: "Product Design", fr: "Design Produit", pt: "Design de Produto" },
    tagline: {
      en: "Interface design that turns a rough idea into a product people use daily.",
      fr: "Un design d'interface qui transforme une idée brute en produit utilisé tous les jours.",
      pt: "Design de interface que transforma uma ideia bruta num produto usado todos os dias.",
    },
    intro: {
      en: "Design isn't decoration. We pair sharp product thinking with refined visual craft so the thing you ship feels obvious to use — and obviously yours. We design with the engineers in the room.",
      fr: "Le design n'est pas de la décoration. Nous associons une pensée produit affûtée à un savoir-faire visuel raffiné pour que votre produit soit évident à utiliser — et évidemment à vous. Nous designons avec les ingénieurs dans la pièce.",
      pt: "Design não é decoração. Combinamos pensamento de produto afiado com um savoir-faire visual refinado para que aquilo que entrega seja óbvio de usar — e obviamente seu. Desenhamos com os engenheiros na sala.",
    },
    capabilities: {
      en: [
        { t: "Product UX", d: "Flows, IA, prototypes. We obsess over the first five minutes of your product." },
        { t: "Visual identity", d: "Brand systems that translate from a homepage to an in-app empty state without breaking." },
        { t: "Design systems", d: "Tokens, components, documentation — design that scales with the team." },
        { t: "Marketing sites", d: "Landing pages and storytelling that convert without feeling like a template." },
      ],
      fr: [
        { t: "UX produit", d: "Parcours, IA, prototypes. Nous sommes obsédés par les cinq premières minutes de votre produit." },
        { t: "Identité visuelle", d: "Des systèmes de marque qui tiennent de la home à l'empty state in-app sans casser." },
        { t: "Design systems", d: "Tokens, composants, documentation — un design qui passe à l'échelle avec l'équipe." },
        { t: "Sites marketing", d: "Landing pages et storytelling qui convertissent sans avoir l'air d'un template." },
      ],
      pt: [
        { t: "UX de produto", d: "Fluxos, IA, protótipos. Somos obcecados pelos primeiros cinco minutos do seu produto." },
        { t: "Identidade visual", d: "Sistemas de marca que aguentam da homepage ao empty state in-app sem partir." },
        { t: "Design systems", d: "Tokens, componentes, documentação — design que escala com a equipa." },
        { t: "Sites de marketing", d: "Landing pages e storytelling que convertem sem parecer um template." },
      ],
    },
    deliverables: {
      en: [
        "Discovery & competitive audit",
        "User flows & wireframes",
        "Full hi-fi UI in Figma",
        "Clickable prototype",
        "Design system & token spec",
        "Hand-off ready for engineering",
        "Asset library (icons, illustrations)",
      ],
      fr: [
        "Discovery & audit concurrentiel",
        "Parcours utilisateurs & wireframes",
        "UI hi-fi complète sur Figma",
        "Prototype cliquable",
        "Design system & spec des tokens",
        "Hand-off prêt pour l'ingénierie",
        "Bibliothèque d'assets (icônes, illustrations)",
      ],
      pt: [
        "Discovery & auditoria competitiva",
        "Fluxos de utilizador & wireframes",
        "UI hi-fi completa em Figma",
        "Protótipo clicável",
        "Design system & spec de tokens",
        "Handoff pronto para a engenharia",
        "Biblioteca de assets (ícones, ilustrações)",
      ],
    },
    timeline: {
      en: [
        { d: "Day 1–3", t: "Discovery", c: "Audit, user flows, content inventory, success criteria." },
        { d: "Day 4–8", t: "Direction", c: "Two visual directions, brand language, sample key screens." },
        { d: "Day 9–14", t: "System", c: "Full design system + every screen in hi-fi." },
        { d: "Day 15", t: "Hand-off", c: "Prototype, spec, working session with engineering." },
      ],
      fr: [
        { d: "Jour 1–3", t: "Discovery", c: "Audit, parcours, inventaire de contenu, critères de succès." },
        { d: "Jour 4–8", t: "Direction", c: "Deux directions visuelles, langage de marque, écrans clés." },
        { d: "Jour 9–14", t: "Système", c: "Design system complet + tous les écrans en hi-fi." },
        { d: "Jour 15", t: "Hand-off", c: "Prototype, spec, session de travail avec l'ingénierie." },
      ],
      pt: [
        { d: "Dia 1–3", t: "Discovery", c: "Auditoria, fluxos, inventário de conteúdo, critérios de sucesso." },
        { d: "Dia 4–8", t: "Direção", c: "Duas direções visuais, linguagem de marca, ecrãs-chave." },
        { d: "Dia 9–14", t: "Sistema", c: "Design system completo + todos os ecrãs em hi-fi." },
        { d: "Dia 15", t: "Handoff", c: "Protótipo, spec, sessão de trabalho com engenharia." },
      ],
    },
    metaTitle: {
      en: "Product Design (UI/UX & Brand) · DATAFUSE Studio",
      fr: "Design Produit (UI/UX & Marque) · DATAFUSE Studio",
      pt: "Design de Produto (UI/UX & Marca) · DATAFUSE Studio",
    },
    metaDesc: {
      en: "Refined product design — UX, UI, design systems, brand. From wireframes to a system your engineers love.",
      fr: "Design produit raffiné — UX, UI, design systems, marque. Des wireframes à un système que vos ingénieurs adorent.",
      pt: "Design de produto refinado — UX, UI, design systems, marca. Dos wireframes a um sistema que os seus engenheiros adoram.",
    },
  },
  ai: {
    slug: "ai",
    number: "04",
    pricingFrom: "$12,000",
    stack: ["OpenAI", "Google Gemini", "Lovable AI Gateway", "Postgres + pgvector", "TypeScript"],
    title: { en: "AI Integration", fr: "Intégration IA", pt: "Integração de IA" },
    tagline: {
      en: "From chat to RAG to agents — practical AI that moves your product forward.",
      fr: "Du chat au RAG aux agents — une IA concrète qui fait avancer votre produit.",
      pt: "De chat a RAG a agentes — IA prática que faz o seu produto avançar.",
    },
    intro: {
      en: "Most AI features fail because they're a demo, not a product. We build AI that earns its place in your app: grounded in your data, measurable, safe, and shipped behind the same engineering bar as the rest of your stack.",
      fr: "La plupart des features IA échouent parce que ce sont des démos, pas des produits. Nous construisons une IA qui gagne sa place dans votre app : ancrée dans vos données, mesurable, sûre, et livrée au même niveau d'exigence que le reste de la stack.",
      pt: "A maior parte das funcionalidades de IA falham porque são demos, não produtos. Construímos IA que ganha o seu lugar na sua app: grounded nos seus dados, mensurável, segura, e entregue ao mesmo nível de exigência que o resto da stack.",
    },
    capabilities: {
      en: [
        { t: "Chat & assistants", d: "Conversational features wired into your product, your tone, your data." },
        { t: "RAG over your data", d: "Search and answer across docs, tickets, transcripts — with citations users can trust." },
        { t: "Agents & workflows", d: "Multi-step automations that take real actions, with humans in the loop where it matters." },
        { t: "Evals & guardrails", d: "We measure quality, prevent drift, and keep costs under control as you scale." },
      ],
      fr: [
        { t: "Chat & assistants", d: "Des features conversationnelles branchées dans votre produit, votre ton, vos données." },
        { t: "RAG sur vos données", d: "Recherche et réponses dans vos docs, tickets, transcripts — avec des citations dignes de confiance." },
        { t: "Agents & workflows", d: "Automatisations multi-étapes qui prennent de vraies actions, avec un humain dans la boucle où il faut." },
        { t: "Évals & garde-fous", d: "On mesure la qualité, on évite la dérive, on garde les coûts sous contrôle à l'échelle." },
      ],
      pt: [
        { t: "Chat & assistentes", d: "Funcionalidades conversacionais ligadas ao seu produto, ao seu tom, aos seus dados." },
        { t: "RAG sobre os seus dados", d: "Pesquisa e respostas em docs, tickets, transcrições — com citações em que se pode confiar." },
        { t: "Agentes & workflows", d: "Automatizações multi-step que tomam ações reais, com humano no loop quando importa." },
        { t: "Avals & guardrails", d: "Medimos qualidade, evitamos drift, e mantemos custos sob controlo à medida que escala." },
      ],
    },
    deliverables: {
      en: [
        "AI feature scoping & success metrics",
        "Model selection & cost plan",
        "Prompt + evaluation suite",
        "Vector / hybrid search pipeline",
        "Streaming UI components",
        "Logging, observability, safety filters",
        "Production deployment & runbook",
      ],
      fr: [
        "Cadrage de la feature IA & métriques de succès",
        "Choix du modèle & plan de coûts",
        "Suite de prompts + évals",
        "Pipeline de recherche vectorielle / hybride",
        "Composants UI en streaming",
        "Logs, observabilité, filtres de sécurité",
        "Déploiement en production & runbook",
      ],
      pt: [
        "Âmbito da funcionalidade IA & métricas de sucesso",
        "Escolha de modelo & plano de custos",
        "Suite de prompts + avaliações",
        "Pipeline de pesquisa vetorial / híbrida",
        "Componentes UI em streaming",
        "Logs, observabilidade, filtros de segurança",
        "Deploy em produção & runbook",
      ],
    },
    timeline: {
      en: [
        { d: "Day 1–3", t: "Discovery", c: "Use case, data audit, model & cost plan, success metrics." },
        { d: "Day 4–8", t: "Prototype", c: "First working feature behind a feature flag, internal evals." },
        { d: "Day 9–14", t: "Productionise", c: "Streaming UI, safety, monitoring, cost guardrails." },
        { d: "Day 15", t: "Launch", c: "Ship to users with dashboards and a runbook." },
      ],
      fr: [
        { d: "Jour 1–3", t: "Discovery", c: "Cas d'usage, audit des données, plan modèle & coûts, métriques." },
        { d: "Jour 4–8", t: "Prototype", c: "Première feature derrière un feature flag, évals internes." },
        { d: "Jour 9–14", t: "Production", c: "UI en streaming, sécurité, monitoring, garde-fous coûts." },
        { d: "Jour 15", t: "Lancement", c: "Mise à disposition des utilisateurs avec dashboards et runbook." },
      ],
      pt: [
        { d: "Dia 1–3", t: "Discovery", c: "Caso de uso, auditoria de dados, plano de modelo & custos, métricas." },
        { d: "Dia 4–8", t: "Protótipo", c: "Primeira funcionalidade atrás de feature flag, avaliações internas." },
        { d: "Dia 9–14", t: "Produção", c: "UI em streaming, segurança, monitorização, guardrails de custo." },
        { d: "Dia 15", t: "Lançamento", c: "Disponibilizar a utilizadores com dashboards e runbook." },
      ],
    },
    metaTitle: {
      en: "AI Integration (Chat, RAG, Agents) · DATAFUSE Studio",
      fr: "Intégration IA (Chat, RAG, Agents) · DATAFUSE Studio",
      pt: "Integração de IA (Chat, RAG, Agentes) · DATAFUSE Studio",
    },
    metaDesc: {
      en: "Practical AI features shipped into your product — chat, RAG, agents — measurable, grounded, safe.",
      fr: "Des features IA concrètes livrées dans votre produit — chat, RAG, agents — mesurables, ancrées, sûres.",
      pt: "Funcionalidades de IA práticas entregues no seu produto — chat, RAG, agentes — mensuráveis, grounded, seguras.",
    },
  },
};

export function localizeService(s: ServiceDetail, lang: Lang): LocalizedService {
  return {
    slug: s.slug,
    number: s.number,
    pricingFrom: s.pricingFrom,
    stack: s.stack,
    title: s.title[lang],
    tagline: s.tagline[lang],
    intro: s.intro[lang],
    capabilities: s.capabilities[lang],
    deliverables: s.deliverables[lang],
    timeline: s.timeline[lang],
    metaTitle: s.metaTitle[lang],
    metaDesc: s.metaDesc[lang],
  };
}
