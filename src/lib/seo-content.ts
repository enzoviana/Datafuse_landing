import type { Lang } from "./i18n";

export type SeoBlock = {
  kicker: string;
  title: string;
  paragraphs: string[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
};

type Loc<T> = Record<Lang, T>;

/* ---------------- SERVICES ---------------- */

export const SERVICE_SEO: Record<"web" | "mobile" | "design" | "ai", Loc<SeoBlock>> = {
  web: {
    en: {
      kicker: "Deep dive",
      title: "Modern web application development that scales with your business",
      paragraphs: [
        "A web application is no longer a 'nice to have' — for SaaS founders, retail networks, B2B operators and internal teams, it is the product. At DATAFUSE Studio we design and engineer custom web platforms that solve a real business problem on day one and keep solving it as your usage, your team and your data grow.",
        "Every web project we ship is built on a modern TypeScript stack — React on the front, Node and Postgres on the back, deployed on edge infrastructure. That combination gives you sub-second load times across continents, full type-safety from database to UI, and a codebase a senior engineer can pick up in an afternoon. No exotic frameworks, no abandoned dependencies, no surprises in production.",
        "We work as a single, end-to-end studio: product strategy, UX, UI, engineering, DevOps and post-launch support. You get one team, one timeline, one fixed quote — and a repository you own outright. Whether you need a multi-tenant SaaS dashboard, a two-sided marketplace, an admin tool to replace ageing spreadsheets, or a customer portal connected to your existing ERP, the process is the same: ship something real in weeks, then iterate with data.",
        "Our approach is opinionated where it matters and pragmatic where it doesn't. Authentication, billing, file storage, search, transactional email and analytics are wired with battle-tested services so we don't waste your budget reinventing them. Your business logic, your branding and your unique workflows get all the engineering attention they deserve.",
      ],
      faqTitle: "Web development FAQ",
      faqs: [
        { q: "What kind of web apps do you build?", a: "Multi-tenant SaaS, internal admin tools, customer portals, marketplaces, dashboards, public-facing platforms with auth and billing, and headless web fronts wired into existing back-offices." },
        { q: "Which web framework do you use?", a: "TanStack Start with React 19 and TypeScript, Tailwind for styling, Postgres for data, and edge deployments on Cloudflare or Vercel. A modern, fast, and well-supported stack." },
        { q: "Will the web app be SEO-friendly?", a: "Yes. We ship with SSR, semantic HTML, per-route metadata, structured data (JSON-LD), a sitemap and clean URLs — so your platform is indexable from day one." },
        { q: "Can you integrate with my existing tools?", a: "Absolutely. Stripe, HubSpot, Salesforce, Notion, Slack, Google Workspace, Microsoft 365, internal REST or GraphQL APIs — we wire integrations natively, with proper retry and error handling." },
        { q: "How long does a typical web project take?", a: "A focused MVP ships in 15 days. A larger v1 with several modules and integrations runs 6 to 10 weeks. We commit to a fixed scope and a fixed price up front." },
      ],
    },
    fr: {
      kicker: "En profondeur",
      title: "Développement d'applications web modernes qui passent à l'échelle avec votre activité",
      paragraphs: [
        "Une application web n'est plus un simple 'plus' : pour les fondateurs de SaaS, les réseaux retail, les opérateurs B2B et les équipes internes, c'est le produit. Chez DATAFUSE Studio, nous concevons et développons des plateformes web sur mesure qui résolvent un vrai problème métier dès le premier jour — et qui continuent à le résoudre à mesure que vos usages, vos équipes et vos données grandissent.",
        "Chaque projet web que nous livrons repose sur une stack TypeScript moderne — React côté front, Node et Postgres côté back, déployés sur de l'edge. Ce trio vous garantit des temps de chargement sous la seconde sur tous les continents, une typage strict de la base de données à l'interface, et une codebase qu'un ingénieur senior peut reprendre en une après-midi. Pas de framework exotique, pas de dépendances abandonnées, pas de mauvaise surprise en production.",
        "Nous travaillons en studio intégré : stratégie produit, UX, UI, ingénierie, DevOps et support post-lancement. Une seule équipe, un seul calendrier, un seul devis fixe — et un dépôt de code dont vous êtes propriétaire à 100%. Que vous ayez besoin d'un dashboard SaaS multi-tenant, d'une marketplace deux faces, d'un outil d'administration pour remplacer un parc de tableurs ou d'un portail client connecté à votre ERP existant, la méthode est la même : livrer un vrai produit en quelques semaines, puis itérer avec de la donnée.",
        "Notre approche est tranchée là où il faut et pragmatique partout ailleurs. Authentification, facturation, stockage de fichiers, recherche, emails transactionnels, analytics : tout est branché avec des briques éprouvées pour ne pas gaspiller votre budget à les réinventer. Votre logique métier, votre identité de marque et vos workflows spécifiques reçoivent toute l'attention d'ingénierie qu'ils méritent.",
      ],
      faqTitle: "FAQ développement web",
      faqs: [
        { q: "Quels types d'apps web développez-vous ?", a: "SaaS multi-tenant, outils d'admin internes, portails clients, marketplaces, dashboards, plateformes publiques avec auth et billing, et fronts web headless branchés sur des back-offices existants." },
        { q: "Quel framework web utilisez-vous ?", a: "TanStack Start avec React 19 et TypeScript, Tailwind pour le style, Postgres pour la donnée, et déploiements edge sur Cloudflare ou Vercel. Une stack moderne, rapide et durablement supportée." },
        { q: "L'application sera-t-elle SEO-friendly ?", a: "Oui. SSR, HTML sémantique, métadonnées par route, données structurées (JSON-LD), sitemap et URLs propres — votre plateforme est indexable dès le jour 1." },
        { q: "Pouvez-vous intégrer mes outils existants ?", a: "Bien sûr. Stripe, HubSpot, Salesforce, Notion, Slack, Google Workspace, Microsoft 365, APIs REST ou GraphQL internes — intégrés nativement, avec retry et gestion d'erreur propres." },
        { q: "Combien de temps prend un projet web ?", a: "Un MVP ciblé sort en 15 jours. Un v1 plus large avec plusieurs modules et intégrations prend 6 à 10 semaines. Périmètre et prix sont fixés à l'avance." },
      ],
    },
    pt: {
      kicker: "Em profundidade",
      title: "Desenvolvimento de aplicações web modernas que escalam com o seu negócio",
      paragraphs: [
        "Uma aplicação web já não é um 'nice to have' — para founders de SaaS, redes de retalho, operadores B2B e equipas internas, é o produto. Na DATAFUSE Studio desenhamos e desenvolvemos plataformas web à medida que resolvem um problema real de negócio desde o primeiro dia e continuam a resolvê-lo à medida que o uso, a equipa e os dados crescem.",
        "Cada projeto web que entregamos assenta numa stack TypeScript moderna — React no frontend, Node e Postgres no backend, deploy em edge. Esse trio garante carregamentos abaixo do segundo em qualquer continente, type-safety total da base de dados até à UI, e uma codebase que um engenheiro sénior consegue retomar numa tarde. Sem frameworks exóticos, sem dependências abandonadas, sem surpresas em produção.",
        "Trabalhamos como um estúdio integrado: estratégia de produto, UX, UI, engenharia, DevOps e suporte pós-lançamento. Uma equipa, um calendário, um orçamento fixo — e um repositório totalmente seu. Seja um dashboard SaaS multi-tenant, um marketplace de dois lados, uma ferramenta admin para substituir folhas de cálculo, ou um portal de cliente ligado ao seu ERP, o método é o mesmo: lançar algo real em semanas e iterar com dados.",
        "A nossa abordagem é firme onde tem de ser e pragmática em tudo o resto. Autenticação, billing, storage, pesquisa, emails transacionais e analytics ficam ligados a serviços testados em produção para não desperdiçarmos o orçamento a reinventá-los. A sua lógica de negócio, a sua marca e os seus workflows específicos recebem toda a atenção de engenharia que merecem.",
      ],
      faqTitle: "FAQ desenvolvimento web",
      faqs: [
        { q: "Que tipos de aplicações web constroem?", a: "SaaS multi-tenant, ferramentas admin internas, portais de cliente, marketplaces, dashboards, plataformas públicas com auth e billing, e frontends headless ligados a back-offices existentes." },
        { q: "Que framework web usam?", a: "TanStack Start com React 19 e TypeScript, Tailwind para estilo, Postgres para dados, e deploys edge na Cloudflare ou Vercel. Uma stack moderna, rápida e bem suportada." },
        { q: "A app vai estar otimizada para SEO?", a: "Sim. SSR, HTML semântico, metadata por rota, dados estruturados (JSON-LD), sitemap e URLs limpas — a plataforma fica indexável desde o dia 1." },
        { q: "Conseguem integrar com as minhas ferramentas atuais?", a: "Sim. Stripe, HubSpot, Salesforce, Notion, Slack, Google Workspace, Microsoft 365, APIs REST ou GraphQL internas — integrações nativas com retry e tratamento de erros adequados." },
        { q: "Quanto tempo demora um projeto web típico?", a: "Um MVP focado sai em 15 dias. Um v1 maior com vários módulos e integrações leva 6 a 10 semanas. Âmbito e preço são fechados à partida." },
      ],
    },
  },
  mobile: {
    en: {
      kicker: "Deep dive",
      title: "Cross-platform iOS and Android mobile app development",
      paragraphs: [
        "Native-feel mobile apps used to mean two codebases, two teams, two timelines and two bug backlogs. Today, with React Native and Expo, a single senior team can ship one product to both the App Store and Google Play — and reach 100% of the smartphone market without compromising on quality. That's the bet we make on every mobile project at DATAFUSE Studio.",
        "We design mobile experiences that feel like they belong on the device: native gestures, platform-aware navigation, system theming, smooth 60 fps animations and respectful use of permissions. Push notifications, deep links, biometric authentication, offline-first sync, in-app purchases and Bluetooth peripherals are all part of the toolbox — we wire them only when they truly serve your users.",
        "Behind the app, we build the backend that makes it work: authentication, real-time data, file storage, transactional email, push segmentation and analytics. We pick a stack that scales to your audience without you needing a full DevOps team. We then take care of the boring-but-critical part — store assets, App Store and Play Store submission, review feedback, TestFlight, internal QA tracks and OTA updates.",
        "Whether you are launching a consumer app, a companion app for an existing SaaS, a field-ops tool for technicians on the road, or an internal app for a workforce of thousands, we deliver on a fixed timeline and a fixed price. You leave with a published app on both stores, your accounts, your code and a clear roadmap for what to ship next.",
      ],
      faqTitle: "Mobile development FAQ",
      faqs: [
        { q: "Native or cross-platform?", a: "We default to React Native + Expo because it ships to iOS and Android from one codebase with truly native feel. When a project genuinely requires native modules (heavy AR, complex Bluetooth, deeply native UX), we write them in Swift or Kotlin and bridge them in." },
        { q: "Will you submit the app to the stores?", a: "Yes. App Store and Google Play submission, store listings, screenshots, ASO basics, review questionnaires and the first review cycle are included." },
        { q: "How do you handle updates?", a: "OTA updates via Expo for JS-only changes (instant, no store review), native binary updates when needed. We set up TestFlight and Play Internal Testing for safe rollouts." },
        { q: "Can the app work offline?", a: "Yes. We build offline-first sync engines for apps that need to keep working without a connection — field tools, in-store apps, transport, healthcare. Local-first by default, conflict-resolved on reconnect." },
        { q: "Do you do app maintenance?", a: "Yes. After the 30 days of post-launch support included, we offer monthly maintenance retainers for OS updates, library bumps, store policy changes and small enhancements." },
      ],
    },
    fr: {
      kicker: "En profondeur",
      title: "Développement d'applications mobiles iOS et Android cross-platform",
      paragraphs: [
        "Une app mobile au rendu natif, ça voulait dire avant deux bases de code, deux équipes, deux calendriers et deux backlogs de bugs. Avec React Native et Expo, une seule équipe senior livre aujourd'hui un seul produit sur l'App Store et sur Google Play — et touche 100% du marché smartphone sans rien sacrifier à la qualité. C'est le pari que nous prenons sur chaque projet mobile chez DATAFUSE Studio.",
        "Nous concevons des expériences mobiles qui se sentent à leur place sur l'appareil : gestes natifs, navigation cohérente avec la plateforme, theming système, animations fluides à 60 fps et utilisation respectueuse des permissions. Notifications push, deep links, authentification biométrique, sync offline-first, achats in-app et périphériques Bluetooth font partie de la boîte à outils — branchés uniquement quand ils servent vraiment vos utilisateurs.",
        "Derrière l'app, nous construisons le backend qui la fait tourner : authentification, données en temps réel, stockage de fichiers, emails transactionnels, segmentation push et analytics. Nous choisissons une stack qui scale à votre audience sans vous obliger à monter une équipe DevOps. Nous nous chargeons ensuite de la partie ennuyeuse mais critique : assets stores, soumission App Store et Play Store, retours de review, TestFlight, pistes de QA interne et mises à jour OTA.",
        "Que vous lanciez une app consumer, une app compagnon pour un SaaS existant, un outil terrain pour des techniciens sur la route, ou une app interne pour des milliers de collaborateurs, nous livrons à périmètre fixe et prix fixe. Vous repartez avec une app publiée sur les deux stores, vos comptes, votre code et une roadmap claire pour la suite.",
      ],
      faqTitle: "FAQ développement mobile",
      faqs: [
        { q: "Natif ou cross-platform ?", a: "Par défaut React Native + Expo, qui livre iOS et Android depuis une seule base avec un vrai rendu natif. Quand un projet exige réellement du natif (AR lourde, Bluetooth complexe, UX très native), nous écrivons en Swift ou Kotlin et bridgeons proprement." },
        { q: "Vous soumettez l'app sur les stores ?", a: "Oui. Soumission App Store et Google Play, fiches stores, screenshots, bases d'ASO, questionnaires de review et premier cycle de review inclus." },
        { q: "Comment gérez-vous les mises à jour ?", a: "Updates OTA via Expo pour les changements JS (instantanés, sans review), mises à jour binaires natives quand nécessaire. TestFlight et Play Internal Testing en place pour des rollouts sereins." },
        { q: "L'app peut-elle fonctionner hors-ligne ?", a: "Oui. Nous construisons des moteurs de sync offline-first pour les apps qui doivent continuer à marcher sans connexion — terrain, point de vente, transport, santé. Local-first par défaut, résolution de conflits à la reconnexion." },
        { q: "Faites-vous de la maintenance ?", a: "Oui. Après les 30 jours de support post-lancement inclus, nous proposons des forfaits de maintenance mensuels : mises à jour OS, bumps de librairies, changements de politique store et petites évolutions." },
      ],
    },
    pt: {
      kicker: "Em profundidade",
      title: "Desenvolvimento de apps móveis iOS e Android cross-platform",
      paragraphs: [
        "Apps móveis com sensação nativa significavam antes duas codebases, duas equipas, dois calendários e dois backlogs de bugs. Hoje, com React Native e Expo, uma única equipa sénior lança um único produto na App Store e no Google Play — e chega a 100% do mercado smartphone sem comprometer qualidade. É a aposta que fazemos em cada projeto mobile na DATAFUSE Studio.",
        "Desenhamos experiências móveis que parecem pertencer ao dispositivo: gestos nativos, navegação coerente com a plataforma, theming de sistema, animações fluidas a 60 fps e uso respeitoso de permissões. Notificações push, deep links, autenticação biométrica, sync offline-first, compras in-app e periféricos Bluetooth fazem parte da caixa de ferramentas — ligados apenas quando servem mesmo os utilizadores.",
        "Por trás da app construímos o backend que a faz funcionar: autenticação, dados em tempo real, storage, emails transacionais, segmentação push e analytics. Escolhemos uma stack que escala para a sua audiência sem precisar de equipa DevOps. Tratamos depois da parte chata mas crítica: assets das stores, submissão na App Store e Play Store, feedback de review, TestFlight, faixas de QA interno e atualizações OTA.",
        "Quer esteja a lançar uma app consumer, uma app companion para um SaaS existente, uma ferramenta de campo para técnicos, ou uma app interna para milhares de colaboradores, entregamos com âmbito e preço fechados. Sai com uma app publicada nas duas stores, contas suas, código seu, e um roadmap claro para o próximo passo.",
      ],
      faqTitle: "FAQ desenvolvimento mobile",
      faqs: [
        { q: "Nativo ou cross-platform?", a: "Por defeito React Native + Expo, que entrega iOS e Android a partir de uma só codebase com sensação verdadeiramente nativa. Quando um projeto exige nativo a sério (AR pesado, Bluetooth complexo, UX muito nativa), escrevemos em Swift ou Kotlin e fazemos a ponte." },
        { q: "Submetem a app nas stores?", a: "Sim. Submissão na App Store e Google Play, listings, screenshots, ASO básico, questionários de review e primeiro ciclo de review incluídos." },
        { q: "Como tratam atualizações?", a: "Atualizações OTA via Expo para alterações JS (instantâneas, sem review), atualizações binárias nativas quando necessário. TestFlight e Play Internal Testing prontos para rollouts seguros." },
        { q: "A app consegue funcionar offline?", a: "Sim. Construímos motores de sync offline-first para apps que precisam de funcionar sem ligação — campo, retalho, transporte, saúde. Local-first por defeito, resolução de conflitos na reconexão." },
        { q: "Fazem manutenção da app?", a: "Sim. Depois dos 30 dias de suporte pós-lançamento incluídos, oferecemos pacotes mensais de manutenção: atualizações de OS, bumps de bibliotecas, mudanças de política das stores e pequenas evoluções." },
      ],
    },
  },
  design: {
    en: {
      kicker: "Deep dive",
      title: "Product design that makes complex software feel obvious",
      paragraphs: [
        "Great product design isn't about polish — it is about making the right decisions visible. Before a line of code is written, our designers map the flows, sharpen the value proposition, prototype the moments that matter, and turn business goals into screens your users will actually use. The result is software that feels obvious from the first tap and stays coherent as the product grows.",
        "We design UX and UI as one craft. UX defines what the product does and in what order; UI gives it personality, hierarchy and rhythm. We do both inside the same team, on the same Figma file, with the engineers in the room. That is why our designs ship without surprises and survive contact with reality: typography that holds at every screen size, color tokens that work in light and dark mode, spacing that breathes on mobile and structures dense data on desktop.",
        "We don't ship visuals — we ship a design system. Components, tokens, documentation, an accessible color palette, motion guidelines and a Figma library that becomes a single source of truth for your team. When your product evolves, your design stays consistent without you needing to redraw the wheel every quarter.",
        "Whether you need a refined brand identity for your startup, a complete UI for a new SaaS, a redesign of a tired internal tool, or a marketing site that actually converts, we adapt the process to your stage. Discovery, two visual directions, a clickable prototype, the full system, and a hand-off your engineers actually enjoy.",
      ],
      faqTitle: "Product design FAQ",
      faqs: [
        { q: "Do you only design, or also code?", a: "Both — but you can hire us for design only. Many clients use us to design a product they will then build in-house with their own engineers. We always design with implementation in mind." },
        { q: "What design tools do you use?", a: "Figma for everything: UX, UI, design systems and prototypes. Framer or Rive for advanced animation specs. Linear for tracking. We hand-off in Figma with full Dev Mode, tokens and component documentation." },
        { q: "Do you work with my existing brand?", a: "Yes. We can extend an existing brand into product UI, or rebuild the visual identity from scratch when the brand isn't ready for product." },
        { q: "What is a design system, and do I need one?", a: "A design system is a library of reusable components, color and spacing tokens, typography rules and patterns. You need one as soon as your product has more than a few screens or more than one designer." },
        { q: "How is design priced?", a: "Fixed-price engagements from $8,000, depending on scope. We share a detailed quote after a 30-minute discovery call." },
      ],
    },
    fr: {
      kicker: "En profondeur",
      title: "Du design produit qui rend les logiciels complexes évidents",
      paragraphs: [
        "Un bon design produit n'est pas une affaire de vernis — c'est l'art de rendre les bonnes décisions visibles. Avant la première ligne de code, nos designers cartographient les parcours, affinent la proposition de valeur, prototypent les moments qui comptent et traduisent les objectifs business en écrans que vos utilisateurs utilisent vraiment. Le résultat : un logiciel évident dès le premier tap, et cohérent à mesure qu'il grossit.",
        "UX et UI sont chez nous un seul métier. L'UX définit ce que le produit fait et dans quel ordre ; l'UI lui donne sa personnalité, sa hiérarchie et son rythme. Les deux dans la même équipe, sur le même fichier Figma, avec les ingénieurs dans la pièce. C'est pour ça que nos designs s'implémentent sans surprise et survivent au contact du réel : typographies qui tiennent à toutes les tailles, tokens couleur qui fonctionnent en clair et en sombre, espacements qui respirent en mobile et structurent la donnée dense en desktop.",
        "Nous ne livrons pas des visuels — nous livrons un design system. Composants, tokens, documentation, palette accessible, guidelines d'animation et bibliothèque Figma qui devient la source de vérité de votre équipe. Quand le produit évolue, le design reste cohérent sans avoir à tout redessiner chaque trimestre.",
        "Que vous ayez besoin d'une identité de marque affûtée pour votre startup, d'une UI complète pour un nouveau SaaS, d'un redesign d'outil interne fatigué, ou d'un site marketing qui convertit, nous adaptons la méthode à votre stade. Discovery, deux directions visuelles, prototype cliquable, système complet et hand-off que vos ingénieurs apprécient.",
      ],
      faqTitle: "FAQ design produit",
      faqs: [
        { q: "Vous faites uniquement du design, ou aussi du code ?", a: "Les deux — mais vous pouvez nous mandater en design seul. Beaucoup de clients nous engagent pour designer un produit qu'ils développeront en interne. Nous designons toujours en pensant implémentation." },
        { q: "Quels outils de design utilisez-vous ?", a: "Figma pour tout : UX, UI, design systems et prototypes. Framer ou Rive pour les specs d'animation. Linear pour le suivi. Hand-off en Figma avec Dev Mode, tokens et docs composants." },
        { q: "Travaillez-vous avec ma marque existante ?", a: "Oui. Nous pouvons étendre une marque existante dans l'UI produit, ou refondre l'identité visuelle quand la marque n'est pas prête pour le produit." },
        { q: "Un design system, c'est quoi, et m'en faut-il un ?", a: "Une bibliothèque de composants réutilisables, des tokens couleur et espacement, des règles typographiques et des patterns. Vous en avez besoin dès que le produit dépasse quelques écrans ou un seul designer." },
        { q: "Comment est facturé le design ?", a: "Forfaits à partir de 8 000 $, selon le périmètre. Devis détaillé après un échange de 30 minutes." },
      ],
    },
    pt: {
      kicker: "Em profundidade",
      title: "Design de produto que torna software complexo em algo óbvio",
      paragraphs: [
        "Bom design de produto não é polimento — é tornar as decisões certas visíveis. Antes da primeira linha de código, os nossos designers mapeiam fluxos, afinam a proposta de valor, prototipam os momentos que contam e traduzem objetivos de negócio em ecrãs que os utilizadores realmente usam. O resultado é software que parece óbvio ao primeiro toque e mantém-se coerente à medida que cresce.",
        "Tratamos UX e UI como um único ofício. A UX define o que o produto faz e em que ordem; a UI dá-lhe personalidade, hierarquia e ritmo. Os dois dentro da mesma equipa, no mesmo ficheiro Figma, com os engenheiros na sala. Por isso os nossos designs implementam-se sem surpresas e sobrevivem ao contacto com a realidade: tipografia que aguenta em qualquer ecrã, tokens de cor que funcionam em light e dark, espaçamentos que respiram em mobile e estruturam dados densos em desktop.",
        "Não entregamos visuais — entregamos um design system. Componentes, tokens, documentação, paleta acessível, guidelines de animação e biblioteca Figma que se torna a fonte da verdade da sua equipa. Quando o produto evolui, o design mantém-se coerente sem ter de redesenhar tudo a cada trimestre.",
        "Quer precise de uma identidade de marca refinada para o seu startup, de uma UI completa para um novo SaaS, de um redesign de uma ferramenta interna cansada, ou de um site de marketing que converte, adaptamos o método à sua fase. Discovery, duas direções visuais, protótipo clicável, sistema completo e handoff que os seus engenheiros agradecem.",
      ],
      faqTitle: "FAQ design de produto",
      faqs: [
        { q: "Fazem só design ou também código?", a: "Os dois — mas pode contratar-nos só para design. Muitos clientes desenham connosco e depois constroem com a equipa interna. Desenhamos sempre a pensar na implementação." },
        { q: "Que ferramentas de design usam?", a: "Figma para tudo: UX, UI, design systems e protótipos. Framer ou Rive para specs de animação. Linear para tracking. Handoff em Figma com Dev Mode, tokens e docs de componentes." },
        { q: "Trabalham com a minha marca atual?", a: "Sim. Conseguimos estender uma marca existente até à UI do produto, ou reconstruir a identidade do zero quando a marca ainda não está pronta para produto." },
        { q: "O que é um design system, e preciso de um?", a: "É uma biblioteca de componentes reutilizáveis, tokens de cor e espaçamento, regras tipográficas e padrões. Faz falta assim que o produto tem mais do que alguns ecrãs ou mais do que um designer." },
        { q: "Como é o pricing de design?", a: "Pacotes fechados a partir de 8 000 $, conforme o âmbito. Orçamento detalhado após uma conversa de 30 minutos." },
      ],
    },
  },
  ai: {
    en: {
      kicker: "Deep dive",
      title: "AI integration: shipping practical AI into real products, not demos",
      paragraphs: [
        "Most AI features fail because they were built as demos: a clever prompt, a flashy chat bubble, and no thought given to data, evaluation, cost or what happens when the model is wrong. We build AI features the same way we build any other product surface: grounded in your actual data, measured, safe, and shipped behind the same engineering bar as the rest of your stack.",
        "Our AI work spans four practical patterns. Conversational assistants wired into your product with your tone and your data. Retrieval-augmented generation (RAG) over your docs, tickets, knowledge base or transcripts — with citations users can verify. Agents and multi-step workflows that take real actions across your systems, with a human in the loop where it matters. And background AI features — classification, extraction, summarization, ranking — that quietly make your existing product smarter.",
        "We choose models pragmatically. OpenAI, Anthropic, Google Gemini, open-source via the Lovable AI Gateway — whichever combination gives you the best quality, latency and cost for your specific use case. We benchmark them on your real data, set up evaluations to track quality over time, and build cost guardrails so a viral moment doesn't become a viral invoice.",
        "Behind every AI feature we ship, you get the unsexy but essential parts: logging, observability, safety filters, rate limiting, fallback paths, prompt versioning and a runbook. So when something changes — a model deprecation, a price change, an unexpected input — your team knows exactly what to do, and your users barely notice.",
      ],
      faqTitle: "AI integration FAQ",
      faqs: [
        { q: "Which AI models do you use?", a: "We are model-agnostic. We pick the right combination of OpenAI, Anthropic, Google Gemini, or open-source models — based on your quality, latency, cost and privacy constraints. We benchmark on your data before recommending." },
        { q: "Can the AI use my private data?", a: "Yes — securely. We build RAG pipelines that retrieve from your knowledge base, docs, database or transcripts and ground the model's answers in them, with citations. Your data is never used to train public models." },
        { q: "How do you control AI cost?", a: "Caching, smaller models for cheap tasks, larger models only when needed, prompt compression, retrieval to keep context small, per-user and per-day rate limits, and dashboards so you always know what is being spent and on what." },
        { q: "How do you handle hallucinations?", a: "We ground answers in your data via RAG, force citations, validate outputs against schemas, run evaluations against a labelled set, and add safety filters and guardrails for high-stakes flows." },
        { q: "Is on-device or local AI possible?", a: "Yes. For privacy-sensitive use cases we can deploy open-source models in your own cloud or even on-device, and design hybrid flows where sensitive steps stay local and only non-sensitive steps hit external providers." },
      ],
    },
    fr: {
      kicker: "En profondeur",
      title: "Intégration IA : de la vraie IA dans de vrais produits, pas des démos",
      paragraphs: [
        "La plupart des features IA échouent parce qu'elles ont été construites comme des démos : un prompt malin, une bulle de chat clinquante, et zéro réflexion sur la donnée, l'évaluation, le coût ou ce qui se passe quand le modèle se trompe. Nous construisons les features IA comme nous construisons tout produit : ancrées dans vos données, mesurées, sûres, et livrées au même niveau d'exigence que le reste de la stack.",
        "Notre travail IA couvre quatre patterns concrets. Des assistants conversationnels branchés dans votre produit, avec votre ton et vos données. Du RAG sur vos docs, tickets, base de connaissance ou transcripts — avec des citations que les utilisateurs peuvent vérifier. Des agents et workflows multi-étapes qui prennent de vraies actions dans vos systèmes, avec un humain dans la boucle où il faut. Et des features IA d'arrière-plan — classification, extraction, résumé, ranking — qui rendent discrètement votre produit existant plus malin.",
        "Nous choisissons les modèles avec pragmatisme. OpenAI, Anthropic, Google Gemini, open-source via Lovable AI Gateway — la combinaison qui donne la meilleure qualité, latence et coût pour votre cas. Nous les benchmarkons sur vos vraies données, mettons en place des évals pour suivre la qualité dans le temps, et posons des garde-fous coûts pour qu'un moment viral ne se transforme pas en facture virale.",
        "Derrière chaque feature IA livrée, vous avez les parties peu glamour mais essentielles : logs, observabilité, filtres de sécurité, rate limiting, fallbacks, versioning de prompts et runbook. Quand quelque chose change — déprécation de modèle, changement de prix, input inattendu — votre équipe sait exactement quoi faire et vos utilisateurs ne s'en rendent presque pas compte.",
      ],
      faqTitle: "FAQ intégration IA",
      faqs: [
        { q: "Quels modèles IA utilisez-vous ?", a: "Nous sommes model-agnostic. Combinaison d'OpenAI, Anthropic, Google Gemini ou modèles open-source — selon qualité, latence, coût et contraintes de confidentialité. Benchmark sur vos données avant toute recommandation." },
        { q: "L'IA peut-elle utiliser mes données privées ?", a: "Oui — en sécurité. Nous construisons des pipelines RAG qui vont chercher dans votre base de connaissance, vos docs, votre DB ou vos transcripts, et ancrent les réponses dedans, avec citations. Vos données ne servent jamais à entraîner des modèles publics." },
        { q: "Comment contrôlez-vous le coût de l'IA ?", a: "Cache, petits modèles pour les tâches simples, gros modèles uniquement quand il faut, compression de prompt, retrieval pour garder le contexte court, limites par utilisateur et par jour, et dashboards pour savoir en permanence ce qui est dépensé." },
        { q: "Comment gérez-vous les hallucinations ?", a: "Ancrage des réponses via RAG, citations forcées, validation des sorties contre des schémas, évaluations contre un jeu étiqueté, et garde-fous sur les flux à enjeu." },
        { q: "Possibilité d'IA locale ou on-device ?", a: "Oui. Pour les cas sensibles, déploiement de modèles open-source dans votre cloud ou même sur l'appareil, et flux hybrides où les étapes sensibles restent locales et seules les étapes non sensibles passent par des providers externes." },
      ],
    },
    pt: {
      kicker: "Em profundidade",
      title: "Integração de IA: levar IA prática para produtos reais, não para demos",
      paragraphs: [
        "A maioria das funcionalidades de IA falha porque foi construída como demo: um prompt inteligente, uma bolha de chat vistosa e nenhuma reflexão sobre dados, avaliação, custo ou o que acontece quando o modelo se engana. Construímos IA da mesma forma que construímos qualquer outro produto: grounded nos seus dados reais, mensurável, segura e entregue ao mesmo nível de exigência que o resto da stack.",
        "O nosso trabalho em IA cobre quatro padrões práticos. Assistentes conversacionais ligados ao produto, com o seu tom e os seus dados. RAG sobre os seus docs, tickets, base de conhecimento ou transcrições — com citações verificáveis. Agentes e workflows multi-step que tomam ações reais nos seus sistemas, com humano no loop quando importa. E funcionalidades IA de bastidor — classificação, extração, sumarização, ranking — que tornam o produto existente silenciosamente mais inteligente.",
        "Escolhemos modelos com pragmatismo. OpenAI, Anthropic, Google Gemini, open-source via Lovable AI Gateway — a combinação que dá melhor qualidade, latência e custo para o seu caso. Fazemos benchmark com os seus dados reais, montamos avaliações para acompanhar qualidade no tempo, e definimos guardrails de custo para que um momento viral não se transforme numa fatura viral.",
        "Por trás de cada funcionalidade IA entregue, recebe as partes pouco glamorosas mas essenciais: logs, observabilidade, filtros de segurança, rate limiting, caminhos de fallback, versionamento de prompts e runbook. Quando algo muda — depreciação de modelo, mudança de preço, input inesperado — a sua equipa sabe exatamente o que fazer e os utilizadores quase nem reparam.",
      ],
      faqTitle: "FAQ integração de IA",
      faqs: [
        { q: "Que modelos de IA usam?", a: "Somos model-agnostic. Combinamos OpenAI, Anthropic, Google Gemini ou open-source — conforme qualidade, latência, custo e restrições de privacidade. Benchmark com os seus dados antes de qualquer recomendação." },
        { q: "A IA pode usar dados privados meus?", a: "Sim — com segurança. Construímos pipelines RAG que vão buscar à sua base de conhecimento, docs, DB ou transcrições e fazem o modelo basear as respostas neles, com citações. Os seus dados nunca treinam modelos públicos." },
        { q: "Como controlam o custo da IA?", a: "Cache, modelos pequenos para tarefas baratas, modelos grandes só quando preciso, compressão de prompts, retrieval para manter contexto pequeno, limites por utilizador e por dia, e dashboards para saber sempre o que está a ser gasto." },
        { q: "Como lidam com alucinações?", a: "Grounding via RAG, citações obrigatórias, validação de outputs contra schemas, avaliações contra conjunto rotulado, e guardrails para fluxos sensíveis." },
        { q: "É possível IA local ou on-device?", a: "Sim. Para casos sensíveis em privacidade, deploy de modelos open-source no seu cloud ou até no dispositivo, e fluxos híbridos onde os passos sensíveis ficam locais e só os não sensíveis vão a providers externos." },
      ],
    },
  },
};

/* ---------------- PORTFOLIO ---------------- */

export const PORTFOLIO_SEO: Record<"medialink" | "dimotec-controle" | "rio-ave-fc", Loc<SeoBlock>> = {
  medialink: {
    en: {
      kicker: "Industry context",
      title: "Why a custom queue-management SaaS beats off-the-shelf kiosks",
      paragraphs: [
        "Self-service kiosks have quietly become a critical layer of in-person service across retail, healthcare, public administration, telecom stores and post offices. They route footfall, level peaks, capture data and free up staff. But most off-the-shelf kiosk software was built for a single use case — and breaks the moment you try to operate dozens of branded locations with different flows, hardware and brand guidelines.",
        "Medialink came to DATAFUSE with exactly that problem. Their fleet was growing, every client wanted a different look and flow, and each change required an engineer. We rebuilt the platform as a true multi-tenant SaaS: one deployment, dozens of fully branded kiosks, a no-code CMS for the back office, a React Native companion app for staff, and rock-solid ESC/POS thermal printer integration with offline fallback.",
        "The technical core is a TypeScript monorepo on a Postgres backend, with a queue engine that handles ticketing, calling, transfer and statistics in real time. The CMS lets non-technical operators redesign a kiosk — screens, flows, ticket layouts, branding — and preview it live before pushing to production. The companion app gives counter staff a live view of the queue, one-tap call-next and reassignment, plus per-counter analytics.",
        "Beyond the build, the project illustrates what we believe is the right pattern for any operator running fleet-deployed software: tight multi-tenancy, configuration over code, an explicit hardware abstraction layer, and a CMS that puts daily changes back in the hands of the business — not the engineers.",
      ],
      faqTitle: "Project FAQ",
      faqs: [
        { q: "What problem did Medialink solve?", a: "Every customer change to a kiosk used to require an engineer. The new SaaS + CMS gives the operations team total control — re-skinning a kiosk now takes minutes, not days." },
        { q: "What stack powers the platform?", a: "TypeScript, React, React Native, Postgres, Node.js, and ESC/POS thermal-printer drivers with offline fallback. Deployed multi-tenant on a single infrastructure." },
        { q: "Is the kiosk software industry-specific?", a: "No. The same platform powers kiosks in retail, healthcare, public administration and telecom — each with their own flow, branding and ticket layout." },
        { q: "Can we get a similar platform built for our business?", a: "Yes. The same architecture pattern — multi-tenant SaaS, no-code CMS, companion mobile app, hardware integration — applies to many fleet-deployed verticals. Book a discovery call and we will scope it." },
      ],
    },
    fr: {
      kicker: "Contexte sectoriel",
      title: "Pourquoi un SaaS de file d'attente sur mesure bat les bornes sur étagère",
      paragraphs: [
        "Les bornes en libre-service sont devenues une couche critique du service en présentiel dans le retail, la santé, l'administration, les boutiques télécom et les bureaux de poste. Elles routent le flux, lissent les pics, captent la donnée et libèrent les équipes. Mais la plupart des logiciels de borne sur étagère ont été pensés pour un seul usage — et craquent dès qu'il faut opérer des dizaines de sites avec des flux, du hardware et des marques différents.",
        "Medialink est arrivé chez DATAFUSE avec exactement ce problème. Le parc grossissait, chaque client voulait un look et un parcours différents, et chaque changement passait par un ingénieur. Nous avons reconstruit la plateforme en vrai SaaS multi-tenant : un seul déploiement, des dizaines de bornes brandées, un CMS no-code pour le back-office, une app compagnon React Native pour les équipes, et une intégration ESC/POS rock-solid avec fallback offline.",
        "Le cœur technique est un monorepo TypeScript sur un backend Postgres, avec un moteur de file qui gère ticketing, appel, transfert et stats en temps réel. Le CMS permet à un opérateur non-technique de redesigner une borne — écrans, parcours, tickets, branding — avec preview en direct avant publication. L'app compagnon donne au comptoir la file en direct, l'appel suivant en un tap, la réaffectation, et les stats par guichet.",
        "Au-delà du build, le projet illustre le pattern que nous croyons juste pour tout opérateur qui déploie du logiciel en flotte : multi-tenancy serré, configuration plutôt que code, couche d'abstraction hardware explicite, et CMS qui remet les changements quotidiens entre les mains du métier — pas des ingénieurs.",
      ],
      faqTitle: "FAQ du projet",
      faqs: [
        { q: "Quel problème Medialink a-t-il résolu ?", a: "Chaque changement client sur une borne demandait un ingénieur. Le nouveau SaaS + CMS donne aux opérations le contrôle total — re-skinner une borne prend des minutes, plus des jours." },
        { q: "Quelle stack fait tourner la plateforme ?", a: "TypeScript, React, React Native, Postgres, Node.js, et drivers ESC/POS avec fallback offline. Déploiement multi-tenant sur une seule infra." },
        { q: "Le logiciel est-il spécifique à un secteur ?", a: "Non. La même plateforme fait tourner des bornes en retail, santé, administration et télécom — chacun avec son flux, son branding et ses tickets." },
        { q: "Peut-on faire construire une plateforme similaire ?", a: "Oui. Le même pattern d'architecture — SaaS multi-tenant, CMS no-code, app compagnon, intégration hardware — s'applique à beaucoup de verticales déployées en flotte. Réservez un échange et nous cadrons." },
      ],
    },
    pt: {
      kicker: "Contexto setorial",
      title: "Porque é que um SaaS de filas à medida bate quiosques off-the-shelf",
      paragraphs: [
        "Os quiosques self-service tornaram-se uma camada crítica do serviço presencial em retalho, saúde, administração pública, lojas de telecomunicações e correios. Encaminham fluxo, suavizam picos, capturam dados e libertam as equipas. Mas a maioria do software off-the-shelf foi pensado para um único caso — e parte assim que se quer operar dezenas de localizações com fluxos, hardware e marcas diferentes.",
        "A Medialink chegou à DATAFUSE com exatamente esse problema. A frota crescia, cada cliente queria um visual e um fluxo diferentes, e cada alteração passava por um engenheiro. Reconstruímos a plataforma como verdadeiro SaaS multi-tenant: uma única deployment, dezenas de quiosques personalizados, um CMS no-code para o back-office, uma app companion em React Native para as equipas, e integração ESC/POS sólida com fallback offline.",
        "O núcleo técnico é um monorepo TypeScript com backend Postgres, e um motor de fila que gere senhas, chamadas, transferências e estatísticas em tempo real. O CMS permite a um operador não-técnico redesenhar um quiosque — ecrãs, fluxos, senhas, branding — com preview ao vivo antes de publicar. A app companion dá ao balcão a fila ao vivo, chamar próximo num toque, reatribuição, e estatísticas por posto.",
        "Para além do build, o projeto ilustra o padrão que acreditamos ser o certo para qualquer operador que faz deploy de software em frota: multi-tenancy apertado, configuração em vez de código, camada explícita de abstração de hardware, e um CMS que devolve as alterações diárias ao negócio — em vez de à engenharia.",
      ],
      faqTitle: "FAQ do projeto",
      faqs: [
        { q: "Que problema é que a Medialink resolveu?", a: "Cada alteração de cliente num quiosque exigia um engenheiro. O novo SaaS + CMS dá às operações controlo total — re-personalizar um quiosque demora minutos, não dias." },
        { q: "Que stack faz a plataforma funcionar?", a: "TypeScript, React, React Native, Postgres, Node.js, e drivers ESC/POS com fallback offline. Deploy multi-tenant numa única infraestrutura." },
        { q: "O software é específico de um setor?", a: "Não. A mesma plataforma corre quiosques em retalho, saúde, administração e telecomunicações — cada um com o seu fluxo, branding e senha." },
        { q: "Conseguem construir uma plataforma parecida para nós?", a: "Sim. O mesmo padrão — SaaS multi-tenant, CMS no-code, app companion, integração hardware — aplica-se a muitos verticais com deploy em frota. Marque uma conversa e fazemos o âmbito." },
      ],
    },
  },
  "dimotec-controle": {
    en: {
      kicker: "Industry context",
      title: "Digitizing field operations: quotes, signatures and loyalty in one platform",
      paragraphs: [
        "Field-service businesses — inspection, maintenance, installation, repair — are still routinely held back by paper. Quotes in Word, signatures on a clipboard, mission orders by email, and a back-office that re-types every line into the accounting system. The cost is invisible and enormous: lost hours per intervention, lost margin per quote, lost customers to faster competitors.",
        "Dimotec Contrôle asked us to fix exactly that. We built a single platform that follows the technician from the van to the client's site and back to the office: a mobile-first quote builder with templated line items and tax handling, in-person digital signature with timestamped PDF and automatic email, auto-generated mission orders synced with the technician roster, and a points-based loyalty wallet to bring clients back.",
        "Technically, the platform runs on TanStack Start with a Postgres backend, PDF generation server-side, and integration with DocuSign-compatible signing. Everything is responsive-first because every technician uses it on a phone or tablet — but the back-office gets a richer desktop dashboard for planning, invoicing and reporting. Offline edge cases are handled gracefully: a technician can finish a quote in a basement and sync it the moment they come back online.",
        "The pattern generalises far beyond inspection. Any field business that today juggles quote tools, signing tools and dispatch tools — HVAC, telecom installation, real-estate diagnostics, fleet maintenance, B2B services — can collapse all three into one platform their technicians actually like to use, and watch the margin per intervention follow.",
      ],
      faqTitle: "Project FAQ",
      faqs: [
        { q: "What is field-ops software?", a: "Software that follows a service worker outside the office — quoting, signing, dispatching, reporting and invoicing — across phone, tablet and desktop." },
        { q: "Does the in-person signature have legal value?", a: "Yes. We generate a timestamped, hash-sealed PDF and store the signing audit trail (IP, timestamp, signer identity) — equivalent legal value to standard electronic signatures across the EU." },
        { q: "How does the loyalty wallet work?", a: "Clients earn points on signed quotes, redeem against future interventions or services, and get a referral code. The points engine and customer portal are built in." },
        { q: "Can it integrate with our accounting software?", a: "Yes. We can export signed quotes and invoices to Sage, QuickBooks, Pennylane or any tool with an API — eliminating the back-office re-typing step." },
      ],
    },
    fr: {
      kicker: "Contexte sectoriel",
      title: "Digitaliser les opérations terrain : devis, signature et fidélité dans une seule plateforme",
      paragraphs: [
        "Les métiers du terrain — contrôle, maintenance, installation, dépannage — sont encore freinés par le papier. Devis en Word, signature sur planchette, ordres de mission par email, et un back-office qui ressaisit chaque ligne dans la compta. Le coût est invisible et énorme : heures perdues par intervention, marge perdue par devis, clients perdus au profit de concurrents plus rapides.",
        "Dimotec Contrôle nous a demandé de régler exactement ça. Nous avons construit une plateforme unique qui suit le technicien du camion au site client puis au bureau : un constructeur de devis mobile-first avec lignes typées et gestion TVA, signature digitale en présentiel avec PDF horodaté et email automatique, ordres de mission générés automatiquement et synchronisés avec le planning, et une cagnotte de fidélité à points pour faire revenir les clients.",
        "Côté technique, la plateforme tourne sur TanStack Start avec backend Postgres, génération PDF server-side, et signature compatible DocuSign. Tout est responsive-first parce que les techniciens travaillent sur mobile ou tablette — mais le back-office bénéficie d'un dashboard desktop plus riche pour le planning, la facturation et le reporting. Les cas offline sont gérés proprement : un technicien finit son devis dans un sous-sol et tout se synchronise au retour en ligne.",
        "Le pattern se généralise bien au-delà du contrôle. Tout métier terrain qui jongle aujourd'hui entre outils de devis, de signature et de dispatch — CVC, installation télécom, diagnostics immobiliers, maintenance flotte, services B2B — peut tout collapser dans une seule plateforme que ses techniciens aiment utiliser, et voir la marge par intervention suivre.",
      ],
      faqTitle: "FAQ du projet",
      faqs: [
        { q: "C'est quoi un logiciel d'ops terrain ?", a: "Un logiciel qui suit un intervenant hors bureau — devis, signature, dispatch, reporting, facturation — sur téléphone, tablette et desktop." },
        { q: "La signature en présentiel a-t-elle une valeur légale ?", a: "Oui. PDF horodaté et scellé par hash, audit trail conservé (IP, horodatage, identité du signataire) — valeur légale équivalente à la signature électronique standard dans l'UE." },
        { q: "Comment fonctionne la cagnotte ?", a: "Le client gagne des points sur les devis signés, les utilise sur des interventions futures, et reçoit un code de parrainage. Moteur de points et portail client inclus." },
        { q: "Intégration avec notre compta ?", a: "Oui. Export des devis signés et factures vers Sage, QuickBooks, Pennylane ou tout outil avec API — la ressaisie disparaît." },
      ],
    },
    pt: {
      kicker: "Contexto setorial",
      title: "Digitalizar operações de campo: orçamentos, assinaturas e fidelização numa só plataforma",
      paragraphs: [
        "Negócios de campo — inspeção, manutenção, instalação, reparação — continuam presos ao papel. Orçamentos em Word, assinaturas em prancheta, ordens de missão por email, e um back-office que volta a escrever cada linha na contabilidade. O custo é invisível e enorme: horas perdidas por intervenção, margem perdida por orçamento, clientes perdidos para concorrentes mais rápidos.",
        "A Dimotec Contrôle pediu-nos exatamente para resolver isso. Construímos uma plataforma única que segue o técnico da carrinha ao cliente e ao escritório: construtor de orçamentos mobile-first com linhas tipificadas e IVA, assinatura digital presencial com PDF datado e email automático, ordens de missão geradas automaticamente e sincronizadas com o planeamento, e uma carteira de fidelização por pontos para trazer os clientes de volta.",
        "Tecnicamente corre em TanStack Start com backend Postgres, geração de PDF server-side, e assinatura compatível com DocuSign. Tudo responsive-first porque cada técnico usa em telemóvel ou tablet — mas o back-office tem um dashboard desktop mais rico para planeamento, faturação e reporting. Os casos offline ficam tratados: o técnico acaba o orçamento numa cave e tudo sincroniza ao voltar a ter rede.",
        "O padrão estende-se muito para além da inspeção. Qualquer negócio de campo que hoje malabariza entre ferramenta de orçamento, de assinatura e de dispatch — AVAC, instalação telecom, diagnósticos imobiliários, manutenção de frota, serviços B2B — pode colapsar tudo numa só plataforma que os técnicos gostam de usar, e ver a margem por intervenção subir.",
      ],
      faqTitle: "FAQ do projeto",
      faqs: [
        { q: "O que é software de operações de campo?", a: "Software que segue um trabalhador fora do escritório — orçamentação, assinatura, dispatch, reporting e faturação — em telemóvel, tablet e desktop." },
        { q: "A assinatura presencial tem valor legal?", a: "Sim. PDF datado e selado por hash, audit trail guardado (IP, timestamp, identidade do signatário) — valor legal equivalente à assinatura eletrónica padrão na UE." },
        { q: "Como funciona a carteira de fidelização?", a: "Os clientes ganham pontos em orçamentos assinados, usam-nos em intervenções futuras e recebem código de referral. Motor de pontos e portal de cliente incluídos." },
        { q: "Integra com a nossa contabilidade?", a: "Sim. Exportação de orçamentos assinados e faturas para Sage, QuickBooks, Pennylane ou qualquer ferramenta com API — fim da redigitação manual." },
      ],
    },
  },
  "rio-ave-fc": {
    en: {
      kicker: "Industry context",
      title: "What a modern official football club mobile app needs to do",
      paragraphs: [
        "An official football club app is not a microsite. It is the digital home of a fanbase: the place where supporters check the next match, follow live scores, read club news, watch highlights, buy tickets and feel like they belong to something bigger than a result. It also happens to be the most powerful direct channel a club has — owned, push-enabled, segmentable, and immune to the algorithm changes of social platforms.",
        "Rio Ave FC asked DATAFUSE to build that home, from scratch, for both iOS and Android. We designed a brand-native visual system inspired by the club's identity, then wired live match data through a sports data API for lineups, events, stats and historical streaks. We integrated the ticketing flow, the news feed, the squad and staff pages, and a push-notification engine segmented by audience — season-ticket holders, away-day travellers, U23 followers — so the right message lands with the right fan.",
        "On the engineering side, the app is React Native with Expo, a Supabase backend for content management, and OneSignal for push. That stack ships fast, scales to tens of thousands of concurrent users on a matchday, and lets the club's marketing team push content and notifications without needing an engineer. The whole project went from kickoff to App Store live in eight weeks.",
        "Beyond the build, the project is a template for any sports organisation that wants to own its fan relationship. The same architecture works for football, basketball, rugby, esports, motorsport, and any membership-based audience: live data, news, ticketing, push, plus the brand discipline to make it feel like the club — not like a generic 'sports app' template.",
      ],
      faqTitle: "Project FAQ",
      faqs: [
        { q: "How long did the Rio Ave FC app take?", a: "Eight weeks from kickoff to App Store and Google Play live, including design, engineering, sports-data integration and store submission." },
        { q: "How is live match data handled?", a: "Through a commercial sports-data API for lineups, events, statistics and historical streaks. Push notifications fire on key match events." },
        { q: "Can the club publish without involving developers?", a: "Yes. News, squad updates, matchday content and push notifications are managed by the club's marketing team through a Supabase-backed admin — no engineer in the loop." },
        { q: "Can you build a similar app for another club?", a: "Yes. The architecture transfers cleanly to any football, basketball, rugby, esports or motorsport organisation. We start with a discovery call to map the specific data sources, ticketing partner and brand language." },
      ],
    },
    fr: {
      kicker: "Contexte sectoriel",
      title: "Ce que doit faire une vraie app mobile officielle de club de football",
      paragraphs: [
        "Une app officielle de club de foot n'est pas un mini-site. C'est la maison numérique d'une fanbase : l'endroit où les supporters checkent le prochain match, suivent le score en direct, lisent les actus, regardent les buts, achètent leurs billets et sentent qu'ils appartiennent à quelque chose de plus grand qu'un résultat. C'est aussi le canal direct le plus puissant qu'un club possède — owned, push-enabled, segmentable, et hors d'atteinte des changements d'algorithme des réseaux sociaux.",
        "Rio Ave FC nous a demandé de construire cette maison, depuis zéro, pour iOS et Android. Nous avons designé un système visuel club-native inspiré de l'identité du maillot, puis branché les données live via une API de données sportives pour les compos, les événements, les stats et les séries. Nous avons intégré la billetterie, le fil d'actus, les pages effectif et staff, et un moteur de notifications push segmenté — abonnés, déplacements, U23 — pour que le bon message touche le bon supporter.",
        "Côté ingénierie : React Native avec Expo, backend Supabase pour la gestion de contenu, OneSignal pour le push. Une stack qui livre vite, qui scale à des dizaines de milliers d'utilisateurs simultanés un jour de match, et qui permet au marketing du club de publier contenus et notifications sans ingénieur. Du kick-off à la mise en ligne App Store : huit semaines.",
        "Au-delà du build, le projet est un template pour toute organisation sportive qui veut posséder sa relation avec ses fans. La même architecture marche pour le football, le basket, le rugby, l'esport, le sport mécanique, et toute audience basée sur l'adhésion : data live, actus, billetterie, push, plus la discipline de marque pour que l'app sente le club — pas le template générique 'app de sport'.",
      ],
      faqTitle: "FAQ du projet",
      faqs: [
        { q: "Combien de temps a pris l'app Rio Ave FC ?", a: "Huit semaines du kick-off à la mise en ligne App Store et Google Play, design, ingénierie, intégration data sportive et soumission stores compris." },
        { q: "Comment sont gérées les données match live ?", a: "Via une API commerciale de données sportives pour compos, événements, stats et historique. Les notifications push se déclenchent sur les événements clés du match." },
        { q: "Le club peut-il publier sans dev ?", a: "Oui. Actus, mises à jour de l'effectif, contenu jour de match et push sont gérés par le marketing via un admin Supabase — pas d'ingénieur dans la boucle." },
        { q: "Pouvez-vous faire ça pour un autre club ?", a: "Oui. L'architecture se transfère proprement à tout club de football, basket, rugby, esport ou sport mécanique. On démarre par un échange pour mapper les sources data, le partenaire billetterie et le langage de marque." },
      ],
    },
    pt: {
      kicker: "Contexto setorial",
      title: "O que uma app móvel oficial moderna de um clube de futebol precisa de fazer",
      paragraphs: [
        "Uma app oficial de um clube de futebol não é um microsite. É a casa digital de uma fanbase: o sítio onde os adeptos veem o próximo jogo, seguem o resultado ao vivo, leem notícias do clube, veem golos, compram bilhetes e sentem que pertencem a algo maior do que um resultado. É também o canal direto mais poderoso que um clube possui — owned, push-enabled, segmentável, e imune às mudanças de algoritmo das redes sociais.",
        "O Rio Ave FC pediu à DATAFUSE para construir essa casa do zero, para iOS e Android. Desenhámos um sistema visual com a identidade do clube, e ligámos dados ao vivo do jogo via API desportiva para onzes, eventos, estatísticas e historial. Integrámos a bilheteira, o feed de notícias, o plantel e staff, e um motor de notificações push segmentado — sócios, deslocações, sub-23 — para a mensagem certa chegar ao adepto certo.",
        "Na engenharia: React Native com Expo, backend Supabase para gestão de conteúdo, OneSignal para push. Uma stack que entrega rápido, escala para dezenas de milhares de utilizadores simultâneos em dia de jogo, e permite ao marketing do clube publicar conteúdo e notificações sem precisar de engenheiro. Do kickoff à live na App Store: oito semanas.",
        "Para além do build, o projeto é um template para qualquer organização desportiva que queira ser dona da sua relação com os adeptos. A mesma arquitetura serve para futebol, basquetebol, râguebi, esports, motorsport, e qualquer audiência baseada em membership: dados ao vivo, notícias, bilheteira, push, e a disciplina de marca para a app cheirar a clube — não a template genérico de 'app desportiva'.",
      ],
      faqTitle: "FAQ do projeto",
      faqs: [
        { q: "Quanto tempo demorou a app do Rio Ave FC?", a: "Oito semanas do kickoff à live na App Store e Google Play, incluindo design, engenharia, integração de dados desportivos e submissão nas stores." },
        { q: "Como são tratados os dados ao vivo do jogo?", a: "Via API comercial de dados desportivos para onzes, eventos, estatísticas e historial. As notificações push disparam em eventos-chave do jogo." },
        { q: "O clube pode publicar sem envolver developers?", a: "Sim. Notícias, atualizações do plantel, conteúdo de dia de jogo e push são geridos pela equipa de marketing via um admin Supabase — sem engenheiro." },
        { q: "Conseguem fazer uma app parecida para outro clube?", a: "Sim. A arquitetura transfere-se diretamente para qualquer clube de futebol, basquetebol, râguebi, esports ou motorsport. Começamos com uma conversa para mapear as fontes de dados, parceiro de bilheteira e linguagem de marca." },
      ],
    },
  },
};

/* ---------------- OFFER (15-day MVP) ---------------- */

export const OFFER_SEO: Loc<SeoBlock> = {
  en: {
    kicker: "Why this offer exists",
    title: "What a real production MVP looks like in 15 days",
    paragraphs: [
      "The word 'MVP' has been so abused that it now means almost nothing. A Notion page is called an MVP. A Figma prototype is called an MVP. A no-code site stitched together over a weekend is called an MVP. None of these are products. They cannot take a payment, store data securely, scale to a thousand users, or be handed to an engineering team in six months without being thrown away. They are demos.",
      "Our 15-day MVP is the opposite. It is a real production web or mobile application: authentication, database, business logic, payments where relevant, deployment on your own cloud, monitoring, error tracking and 30 days of post-launch support. The codebase is yours — TypeScript, React, Postgres — and any senior engineer can pick it up and extend it from day 16.",
      "How is that possible in 15 days? Three things. First, we run a fixed scope: three core features, no more. Saying no to feature creep is what makes the timeline real. Second, the team that scopes is the team that designs and the team that ships — no hand-offs, no agency overhead. Third, we reuse a battle-tested foundation: auth, billing, file storage, transactional email, analytics and CI/CD are not reinvented on your budget.",
      "This offer is built for founders who need to put their idea in front of real users — not in a deck, not in a prototype, in production. It is also built for product teams inside larger companies who need to test a new direction quickly without committing to a six-month roadmap. Fifteen days, fifteen thousand dollars, one team, one repository.",
    ],
    faqTitle: "MVP delivery FAQ",
    faqs: [
      { q: "What does 'production-ready' actually mean?", a: "Authentication, a real database, business logic, deployment on your own cloud, HTTPS, error monitoring, analytics, backups, and a build pipeline. Your first real user can sign up, use the product, and pay if relevant — on day 15." },
      { q: "Three features only — what counts as a feature?", a: "A coherent module like 'onboarding + auth', 'a marketplace listing flow with payment', 'a dashboard with three core widgets'. During scoping we explicitly write down what is in and what is out." },
      { q: "Do you build mobile MVPs too?", a: "Yes. Mobile MVPs ship to TestFlight by day 12 and to the App Store / Play Store right after. Store submission is included." },
      { q: "What if I want changes after 15 days?", a: "30 days of post-launch support are included for bug fixes and small refinements. After that, we offer monthly retainers or one-off iteration sprints." },
      { q: "Can I see your code before signing?", a: "Yes. We share code samples and reference architectures during the discovery call. We are happy to sign an NDA first." },
      { q: "How do I get started?", a: "Book a 30-minute discovery call. We tell you straight whether your idea fits the 15-day window, and if it does, we kick off within a week." },
    ],
  },
  fr: {
    kicker: "Pourquoi cette offre existe",
    title: "À quoi ressemble un vrai MVP en production en 15 jours",
    paragraphs: [
      "Le mot 'MVP' a été tellement maltraité qu'il ne veut plus rien dire. Une page Notion est appelée MVP. Un prototype Figma est appelé MVP. Un site no-code bricolé en un week-end est appelé MVP. Aucun n'est un produit. Aucun ne peut encaisser un paiement, stocker des données sécurisées, scaler à mille utilisateurs ou être repris par une équipe d'ingénierie dans six mois sans être jeté. Ce sont des démos.",
      "Notre MVP en 15 jours est l'inverse. C'est une vraie application web ou mobile en production : authentification, base de données, logique métier, paiements si pertinent, déploiement sur votre cloud, monitoring, error tracking et 30 jours de support post-lancement. Le code est à vous — TypeScript, React, Postgres — et n'importe quel ingénieur senior peut le reprendre et l'étendre dès le jour 16.",
      "Comment c'est possible en 15 jours ? Trois choses. D'abord, un périmètre fixe : trois features clés, pas plus. Dire non au feature creep est ce qui rend le calendrier réel. Ensuite, l'équipe qui cadre est l'équipe qui design et qui livre — pas de hand-off, pas d'overhead d'agence. Enfin, on réutilise une fondation éprouvée : auth, facturation, stockage, emails transactionnels, analytics et CI/CD ne sont pas réinventés sur votre budget.",
      "Cette offre est faite pour les fondateurs qui doivent mettre leur idée devant de vrais utilisateurs — pas dans un deck, pas dans un prototype, en production. Elle est aussi faite pour les équipes produit dans des entreprises plus grandes qui veulent tester rapidement une nouvelle direction sans s'engager sur six mois. Quinze jours, quinze mille dollars, une équipe, un dépôt.",
    ],
    faqTitle: "FAQ livraison MVP",
    faqs: [
      { q: "Que veut vraiment dire 'production-ready' ?", a: "Authentification, vraie base de données, logique métier, déploiement sur votre cloud, HTTPS, error monitoring, analytics, sauvegardes, pipeline de build. Votre premier vrai utilisateur peut s'inscrire, utiliser le produit, et payer si pertinent — au jour 15." },
      { q: "Trois features seulement — c'est quoi une feature ?", a: "Un module cohérent type 'onboarding + auth', 'flux marketplace avec paiement', 'dashboard avec trois widgets clés'. Le cadrage liste explicitement ce qui est dedans et ce qui est dehors." },
      { q: "Vous faites aussi des MVP mobile ?", a: "Oui. Les MVP mobile livrent en TestFlight au jour 12 et sur App Store / Play Store juste après. Soumission stores incluse." },
      { q: "Et si je veux des changements après 15 jours ?", a: "30 jours de support post-lancement inclus pour bugs et petites finitions. Ensuite, forfaits mensuels ou sprints d'itération ponctuels." },
      { q: "Puis-je voir votre code avant de signer ?", a: "Oui. Nous partageons des échantillons de code et des architectures de référence lors de l'échange. NDA possible en amont." },
      { q: "Comment on démarre ?", a: "Vous réservez un échange de 30 minutes. On vous dit franchement si votre idée tient en 15 jours, et si oui, on lance dans la semaine." },
    ],
  },
  pt: {
    kicker: "Porque é que esta oferta existe",
    title: "Como é, na prática, um MVP em produção em 15 dias",
    paragraphs: [
      "A palavra 'MVP' foi tão maltratada que já não quer dizer quase nada. Uma página Notion é chamada MVP. Um protótipo Figma é chamado MVP. Um site no-code montado num fim-de-semana é chamado MVP. Nenhum é um produto. Nenhum consegue receber um pagamento, guardar dados em segurança, escalar para mil utilizadores ou ser entregue a uma equipa de engenharia daqui a seis meses sem ser deitado fora. São demos.",
      "O nosso MVP em 15 dias é o oposto. É uma verdadeira aplicação web ou mobile em produção: autenticação, base de dados, lógica de negócio, pagamentos quando faz sentido, deploy no seu cloud, monitorização, error tracking e 30 dias de suporte pós-lançamento. O código é seu — TypeScript, React, Postgres — e qualquer engenheiro sénior consegue pegar nele e estendê-lo a partir do dia 16.",
      "Como é possível em 15 dias? Três coisas. Primeiro, âmbito fixo: três funcionalidades-chave, nada mais. Dizer não ao feature creep é o que torna o calendário real. Segundo, a equipa que faz o âmbito é a que desenha e a que entrega — sem handoffs, sem overhead de agência. Terceiro, reutilizamos uma fundação testada em produção: auth, billing, storage, emails transacionais, analytics e CI/CD não são reinventados com o seu orçamento.",
      "Esta oferta é para founders que precisam de pôr a ideia à frente de utilizadores reais — não num deck, não num protótipo, em produção. É também para equipas de produto dentro de empresas maiores que precisam de testar rapidamente uma nova direção sem se comprometerem com seis meses de roadmap. Quinze dias, quinze mil dólares, uma equipa, um repositório.",
    ],
    faqTitle: "FAQ entrega de MVP",
    faqs: [
      { q: "O que quer mesmo dizer 'production-ready'?", a: "Autenticação, base de dados real, lógica de negócio, deploy no seu cloud, HTTPS, monitorização, analytics, backups e pipeline de build. O primeiro utilizador real consegue registar-se, usar o produto, e pagar quando aplicável — no dia 15." },
      { q: "Três funcionalidades só — o que conta como funcionalidade?", a: "Um módulo coerente do tipo 'onboarding + auth', 'fluxo de marketplace com pagamento', 'dashboard com três widgets chave'. Durante o âmbito escrevemos explicitamente o que está dentro e o que fica fora." },
      { q: "Também fazem MVPs mobile?", a: "Sim. MVPs mobile chegam a TestFlight ao dia 12 e à App Store / Play Store logo a seguir. Submissão nas stores incluída." },
      { q: "E se eu quiser alterações depois dos 15 dias?", a: "30 dias de suporte pós-lançamento incluídos para correções e pequenos ajustes. Depois, pacotes mensais ou sprints pontuais de iteração." },
      { q: "Posso ver o vosso código antes de assinar?", a: "Sim. Partilhamos amostras de código e arquiteturas de referência durante a conversa. Podemos assinar NDA antes." },
      { q: "Como é que começamos?", a: "Marca uma conversa de 30 minutos. Dizemos com franqueza se a ideia entra em 15 dias, e se sim, arrancamos na semana." },
    ],
  },
};

/* ---------------- HOME ---------------- */

export const HOME_SEO: Loc<SeoBlock> = {
  en: {
    kicker: "Why DATAFUSE Studio",
    title: "A senior software studio for founders who care about craft",
    paragraphs: [
      "DATAFUSE Studio is a software agency for founders, scale-ups and operators who treat their product as a serious craft. We design and engineer modern web applications, native-feel mobile apps, refined product experiences and practical AI features — and we ship them on fixed timelines and fixed prices, with full source-code ownership on day one.",
      "We are deliberately small. Every project is led end-to-end by a senior team — a product designer, a senior engineer, a tech lead — and you talk to them directly. There is no junior practicing on your budget, no project manager translating between silos, no agency overhead. This is the only way we know to ship software that we are proud of, and that you can scale on top of.",
      "Our work spans SaaS dashboards, two-sided marketplaces, internal tools, customer portals, kiosk software, field-operations platforms, mobile apps for consumers and for staff, and AI features grounded in real business data. We work in TypeScript, React, React Native, Postgres and the modern edge stack — boring in the best sense of the word: fast, durable, and easy to hand over to your future team.",
      "Whether you need a flagship 15-day MVP, a multi-month v1, or a senior team to ship a feature your in-house developers cannot get to, the way we work stays the same: scope honestly, design carefully, engineer cleanly, ship on time, hand over completely. That is the studio. That is the only way we know to work.",
    ],
    faqTitle: "About DATAFUSE Studio",
    faqs: [
      { q: "Who is DATAFUSE Studio for?", a: "Founders, scale-up product teams, and operators who need a senior team to design and ship a real software product — web, mobile, or both — on a fixed timeline and a fixed price." },
      { q: "Where are you based?", a: "We work fully remote, with a European base, and we ship for clients in Europe, North America and Africa. Async by default, sync where it matters." },
      { q: "What does 'full source-code ownership' mean?", a: "The repository is in your GitHub organisation from day one. No proprietary lock-in, no licensing fees, no hidden dependencies. You can take any senior engineer and continue from day after delivery." },
      { q: "Do you do retainers?", a: "Yes. After launch we offer monthly retainers for ongoing product work, maintenance, AI feature additions and growth experiments." },
      { q: "How do I start a project?", a: "Email enzo_viana@datafuse.fr or use the contact form. We reply within 24 hours and book a discovery call." },
    ],
  },
  fr: {
    kicker: "Pourquoi DATAFUSE Studio",
    title: "Un studio logiciel senior pour des fondateurs qui prennent leur produit au sérieux",
    paragraphs: [
      "DATAFUSE Studio est une agence logicielle pour les fondateurs, scale-ups et opérateurs qui traitent leur produit comme un vrai métier. Nous concevons et développons des applications web modernes, des apps mobiles au rendu natif, des expériences produit raffinées et des features IA concrètes — livrées à calendrier fixe et prix fixe, avec propriété totale du code source dès le jour 1.",
      "Nous sommes volontairement petits. Chaque projet est porté de bout en bout par une équipe senior — un designer produit, un ingénieur senior, un tech lead — et vous parlez directement avec eux. Pas de junior qui s'entraîne sur votre budget, pas de chef de projet qui traduit entre silos, pas d'overhead d'agence. C'est la seule façon que nous connaissons de livrer du logiciel dont nous sommes fiers, et que vous pouvez scaler.",
      "Notre travail couvre les dashboards SaaS, les marketplaces, les outils internes, les portails clients, le logiciel de borne, les plateformes terrain, les apps mobiles consumer et staff, et les features IA ancrées dans la vraie donnée métier. Nous travaillons en TypeScript, React, React Native, Postgres et la stack edge moderne — ennuyeuse au meilleur sens du terme : rapide, durable, facile à passer à votre future équipe.",
      "Que vous ayez besoin d'un MVP phare en 15 jours, d'un v1 sur plusieurs mois, ou d'une équipe senior pour livrer une feature que vos devs internes n'arrivent pas à finir, notre méthode reste la même : cadrer honnêtement, designer soigneusement, coder proprement, livrer à temps, passer la main complètement. C'est ça le studio.",
    ],
    faqTitle: "À propos de DATAFUSE Studio",
    faqs: [
      { q: "À qui s'adresse DATAFUSE Studio ?", a: "Aux fondateurs, équipes produit de scale-ups et opérateurs qui ont besoin d'une équipe senior pour designer et livrer un vrai produit logiciel — web, mobile, ou les deux — à calendrier et prix fixes." },
      { q: "Où êtes-vous basés ?", a: "Full remote, base européenne, livraisons pour clients en Europe, Amérique du Nord et Afrique. Async par défaut, sync quand il faut." },
      { q: "Que veut dire 'propriété totale du code' ?", a: "Le dépôt est dans votre organisation GitHub dès le jour 1. Pas de lock-in propriétaire, pas de licence cachée, pas de dépendance opaque. N'importe quel ingénieur senior peut continuer dès le lendemain de la livraison." },
      { q: "Faites-vous du forfait mensuel ?", a: "Oui. Après le lancement, forfaits mensuels pour produit en continu, maintenance, ajouts de features IA et expérimentations growth." },
      { q: "Comment démarrer un projet ?", a: "Email à enzo_viana@datafuse.fr ou via le formulaire. Réponse sous 24h et calendrier d'échange." },
    ],
  },
  pt: {
    kicker: "Porquê a DATAFUSE Studio",
    title: "Um estúdio de software sénior para founders que levam o produto a sério",
    paragraphs: [
      "A DATAFUSE Studio é uma agência de software para founders, scale-ups e operadores que tratam o produto como ofício a sério. Desenhamos e desenvolvemos aplicações web modernas, apps móveis com sensação nativa, experiências de produto refinadas e funcionalidades de IA práticas — entregues com calendário e preço fechados, e com 100% de propriedade do código fonte desde o dia 1.",
      "Somos deliberadamente pequenos. Cada projeto é conduzido de ponta-a-ponta por uma equipa sénior — designer de produto, engenheiro sénior, tech lead — e fala diretamente com eles. Sem júnior a treinar com o seu orçamento, sem chefe de projeto a traduzir entre silos, sem overhead de agência. É a única forma que conhecemos de entregar software de que nos orgulhamos e que consegue escalar.",
      "O nosso trabalho cobre dashboards SaaS, marketplaces, ferramentas internas, portais de cliente, software de quiosques, plataformas de operações de campo, apps móveis consumer e para staff, e funcionalidades de IA ancoradas em dados de negócio reais. Trabalhamos em TypeScript, React, React Native, Postgres e a stack edge moderna — chata no melhor sentido: rápida, durável e fácil de passar para a sua equipa futura.",
      "Quer precise de um MVP de 15 dias, de um v1 de vários meses, ou de uma equipa sénior para entregar uma funcionalidade que a sua equipa interna não consegue terminar, o método mantém-se: âmbito honesto, design cuidadoso, engenharia limpa, entrega no tempo, handoff total. É isto o estúdio.",
    ],
    faqTitle: "Sobre a DATAFUSE Studio",
    faqs: [
      { q: "Para quem é a DATAFUSE Studio?", a: "Para founders, equipas de produto em scale-ups e operadores que precisam de uma equipa sénior para desenhar e entregar um verdadeiro produto de software — web, mobile, ou ambos — com calendário e preço fechados." },
      { q: "Onde estão sediados?", a: "Trabalhamos totalmente remoto, com base europeia, e entregamos para clientes na Europa, América do Norte e África. Async por defeito, sync quando é preciso." },
      { q: "O que significa '100% propriedade do código'?", a: "O repositório está na sua organização GitHub desde o dia 1. Sem lock-in proprietário, sem licenças escondidas, sem dependências opacas. Qualquer engenheiro sénior consegue continuar a partir do dia seguinte à entrega." },
      { q: "Fazem avenças mensais?", a: "Sim. Depois do lançamento oferecemos avenças mensais para produto contínuo, manutenção, novas funcionalidades de IA e experimentação de growth." },
      { q: "Como é que começo um projeto?", a: "Email para enzo_viana@datafuse.fr ou via o formulário. Resposta em 24h e marcação de uma conversa de descoberta." },
    ],
  },
};
