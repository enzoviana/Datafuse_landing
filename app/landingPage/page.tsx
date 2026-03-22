'use client';

import React, { useState, useEffect } from 'react';
import { 
  Check, Zap, Globe, Sparkles, ArrowRight, ShieldCheck,
  Menu, X, Layout, MessageSquare, Smartphone, Gauge,
  ChevronDown, PlayCircle, Star, MousePointer2, Undo2,
  Type, Image as ImageIcon, Layers, Clock, TrendingUp,
  Lock, Search, Mail, Twitter, Linkedin, Instagram,
  ChevronRight, RefreshCw, Code, Palette
} from 'lucide-react';

// ==========================================
// DONNÉES STATIQUES (Permet de garder le JSX propre)
// ==========================================

const SHOWCASE_CATEGORIES = ['Tous', 'Artisans', 'Services', 'E-commerce', 'Créatifs'];

const SHOWCASE_DATA = [
  { id: 1, title: "Cabinet Juridique", cat: "Services", color: "bg-blue-50", accent: "bg-blue-600" },
  { id: 2, title: "Coach Sportif", cat: "Services", color: "bg-orange-50", accent: "bg-orange-500" },
  { id: 3, title: "Boulangerie Bio", cat: "Artisans", color: "bg-amber-50", accent: "bg-amber-600" },
  { id: 4, title: "Plombier Express", cat: "Artisans", color: "bg-slate-100", accent: "bg-slate-800" },
  { id: 5, title: "Boutique Vêtements", cat: "E-commerce", color: "bg-rose-50", accent: "bg-rose-500" },
  { id: 6, title: "Portfolio Photographe", cat: "Créatifs", color: "bg-purple-50", accent: "bg-purple-600" },
];

const FEATURES_DATA = [
  { 
    title: "Copywriting IA Intégré", 
    desc: "Notre IA analyse votre métier et rédige des textes persuasifs, sans faute, optimisés pour la conversion.", 
    icon: <MessageSquare className="text-indigo-500" size={24} /> 
  },
  { 
    title: "Responsive Mobile Natif", 
    desc: "Plus de 60% du trafic est mobile. Votre site s'adapte parfaitement à tous les écrans (iOS, Android, Tablettes).", 
    icon: <Smartphone className="text-indigo-500" size={24} /> 
  },
  { 
    title: "Vitesse de Chargement", 
    desc: "Hébergé sur un réseau CDN mondial. Temps de chargement inférieur à 1 seconde pour retenir vos visiteurs.", 
    icon: <Gauge className="text-indigo-500" size={24} /> 
  },
  { 
    title: "Optimisation SEO", 
    desc: "Balises Meta, structure H1/H2, et sitemap générés automatiquement pour plaire à l'algorithme de Google.", 
    icon: <Search className="text-indigo-500" size={24} /> 
  },
  { 
    title: "Sécurité Bancaire SSL", 
    desc: "Certificat SSL inclus par défaut. Le cadenas vert rassure vos clients et protège les données saisies.", 
    icon: <Lock className="text-indigo-500" size={24} /> 
  },
  { 
    title: "Éditeur Visuel No-Code", 
    desc: "Un changement d'horaire ? Une nouvelle photo ? Cliquez, modifiez, publiez. Sans écrire une ligne de code.", 
    icon: <Palette className="text-indigo-500" size={24} /> 
  }
];

const TESTIMONIALS = [
  {
    name: "Marc Aubert",
    role: "Artisan Plombier",
    text: "J'avais un devis d'agence à 3000€. Avec Datafuse, mon site était en ligne le soir même pour moins de 10 balles. Incroyable de simplicité.",
    initials: "MA",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Julie Morel",
    role: "Coach Bien-être",
    text: "L'IA a écrit mes textes mieux que moi-même. Mon taux de réservation a explosé en seulement deux semaines. Je recommande à 100%.",
    initials: "JM",
    color: "from-orange-400 to-rose-500"
  },
  {
    name: "Sophie David",
    role: "E-commerce Bio",
    text: "L'interface est d'une simplicité déconcertante. Je gère mes produits depuis mon téléphone dans le métro. Le design est digne d'une grande marque.",
    initials: "SD",
    color: "from-emerald-400 to-teal-500"
  }
];

const FAQ_DATA = [
  { 
    q: "Qu'est-ce qui est inclus dans l'abonnement à 9,99€ ?", 
    a: "Absolument tout : l'hébergement cloud ultra-rapide, un nom de domaine offert la première année, le certificat SSL, l'éditeur visuel IA, des modifications illimitées et un support client prioritaire." 
  },
  { 
    q: "Puis-je utiliser mon propre nom de domaine ?", 
    a: "Oui. Si vous possédez déjà un domaine chez OVH, GoDaddy ou autre, vous pouvez le connecter à votre site Datafuse en quelques clics depuis vos paramètres." 
  },
  { 
    q: "Suis-je engagé sur la durée ?", 
    a: "Non, nos offres sont totalement sans engagement. Vous pouvez annuler votre abonnement d'un simple clic depuis votre espace client, sans avoir à appeler qui que ce soit." 
  },
  { 
    q: "L'IA peut-elle créer un site e-commerce ou de réservation ?", 
    a: "Oui, notre système intègre des modules de prise de rendez-vous et des catalogues produits simples. Pour des besoins très complexes, notre IA vous guidera vers les meilleures intégrations tierces." 
  },
  { 
    q: "À qui appartient le site une fois créé ?", 
    a: "Vous êtes 100% propriétaire du contenu généré (textes, images uploadées, structure). Datafuse vous fournit la technologie de rendu et l'hébergement." 
  }
];

// ==========================================
// COMPOSANT PRINCIPAL
// ==========================================

export default function LandingPage() {
  // États de l'interface
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // États des sections interactives
  const [activeShowcaseTab, setActiveShowcaseTab] = useState('Tous');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Compteur dynamique simulé
  const [siteCount, setSiteCount] = useState(14520);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setSiteCount(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);
    return () => clearInterval(countInterval);
  }, []);

  // Auto-rotation des témoignages
  useEffect(() => {
    const testInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(testInterval);
  }, []);

  // Simulation du bouton "Générer"
  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.length < 3) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // Redirection simulée vers l'app
      alert("Redirection vers l'éditeur avec le prompt : " + prompt);
    }, 2500);
  };

  const filteredShowcase = activeShowcaseTab === 'Tous' 
    ? SHOWCASE_DATA 
    : SHOWCASE_DATA.filter(item => item.cat === activeShowcaseTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden relative">
      
      {/* ========================================= */}
      {/* ARRIÈRE-PLAN & EFFETS GLOBAUX */}
      {/* ========================================= */}
      <div className="fixed inset-0 z-0 opacity-[0.3] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-indigo-100/60 via-slate-50/40 to-transparent pointer-events-none z-0"></div>

      {/* ========================================= */}
      {/* NAVIGATION */}
      {/* ========================================= */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto backdrop-blur-xl bg-white/70 sticky top-4 rounded-2xl border border-slate-200 shadow-sm mt-4 mx-4 xl:mx-auto transition-all duration-300">
        <div className="text-xl font-black tracking-tighter flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
            <Zap size={20} fill="white" className="text-white" />
          </div>
          <span>DATAFUSE</span>
          <span className="text-indigo-600 text-[11px] uppercase tracking-[0.2em] font-bold bg-indigo-50 px-2 py-1 rounded-md ml-1">AI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">Concept</a>
          <a href="#showcase" className="hover:text-indigo-600 transition-colors">Exemples</a>
          <a href="#features" className="hover:text-indigo-600 transition-colors">Technologie</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Tarifs</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
            Connexion
          </a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-600 transition-all shadow-md active:scale-95 flex items-center gap-2">
            Créer un site <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-28 px-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {['Concept', 'Exemples', 'Technologie', 'Tarifs', 'Connexion'].map((item, i) => (
          <a key={i} href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center group">
            {item} <ChevronRight className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
          </a>
        ))}
        <button className="mt-8 bg-indigo-600 text-white w-full py-4 rounded-xl font-black text-lg shadow-xl shadow-indigo-200 flex justify-center items-center gap-2">
          Générer mon site <Zap size={20} fill="currentColor" />
        </button>
      </div>

      {/* ========================================= */}
      {/* HERO SECTION */}
      {/* ========================================= */}
      <section className="relative z-10 pt-20 lg:pt-28 pb-16 px-6 text-center max-w-5xl mx-auto">
        {/* Badge Live Counter */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-[13px] font-bold mb-8 shadow-sm animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          {siteCount.toLocaleString('fr-FR')} sites générés par l'IA
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tight mb-8 text-slate-900 leading-[1.05]">
          Votre site professionnel, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            généré en 60 secondes.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-slate-500 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Dites adieu aux agences hors de prix et aux éditeurs complexes. Décrivez votre activité, l'IA s'occupe du design, du contenu et de la mise en ligne pour <span className="text-slate-900 font-bold border-b-2 border-indigo-400">9,99€/mois</span>.
        </p>

        {/* Search / Prompt Input */}
        <form onSubmit={handleGenerate} className="max-w-3xl mx-auto mb-8 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[32px] blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className={`relative p-2 bg-white rounded-[24px] shadow-2xl shadow-indigo-100/50 border flex items-center transition-all duration-300 ${isGenerating ? 'border-indigo-400 ring-4 ring-indigo-50' : 'border-slate-200 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50'}`}>
            <textarea 
              rows={1}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isGenerating}
              placeholder="Ex: Je suis un avocat spécialisé en droit des affaires à Lyon..."
              className="w-full bg-transparent border-none focus:ring-0 text-slate-700 p-4 md:p-5 text-lg md:text-xl placeholder:text-slate-300 resize-none overflow-hidden outline-none disabled:opacity-50"
            />
            <button 
              type="submit"
              disabled={isGenerating}
              className={`bg-indigo-600 text-white p-4 md:px-8 rounded-[18px] transition-all flex items-center gap-2 font-black text-lg md:text-xl shrink-0 ${isGenerating ? 'opacity-80 cursor-wait' : 'hover:bg-indigo-700 shadow-lg shadow-indigo-200 active:scale-95'}`}
            >
              {isGenerating ? (
                <><RefreshCw className="animate-spin" size={24} /> Création...</>
              ) : (
                <><span className="hidden sm:inline">Générer mon site</span><span className="sm:hidden">Générer</span> <Sparkles size={24} /></>
              )}
            </button>
          </div>
        </form>
        
        {/* Trust features */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2"><Globe size={16} className="text-indigo-400" /> Domaine Offert</span>
          <span className="hidden md:block text-slate-200">|</span>
          <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-indigo-400" /> Hébergement Inclus</span>
          <span className="hidden md:block text-slate-200">|</span>
          <span className="flex items-center gap-2"><Lock size={16} className="text-indigo-400" /> 100% Sécurisé</span>
        </div>
      </section>

      {/* ========================================= */}
      {/* MOCKUP / PREVIEW (Interface Fake) */}
      {/* ========================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-32">
        <div className="rounded-[24px] md:rounded-[40px] border-[8px] md:border-[16px] border-white bg-white shadow-2xl shadow-slate-300/60 overflow-hidden relative group">
          
          {/* Mac Header */}
          <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-4 md:px-6 gap-2 relative">
            <div className="flex gap-2 z-10">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bg-white border border-slate-200 text-slate-400 text-xs font-bold px-12 md:px-32 py-1.5 rounded-lg flex items-center gap-2 shadow-sm">
              <Lock size={12}/> monsite-pro.fr
            </div>
          </div>

          {/* Fake Website Content */}
          <div className="h-[400px] md:h-[600px] bg-slate-50 relative overflow-hidden flex flex-col">
            
            {/* Fake Nav */}
            <div className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8">
               <div className="w-32 h-6 bg-slate-200 rounded-md"></div>
               <div className="hidden md:flex gap-6">
                 {[1,2,3,4].map(i => <div key={i} className="w-16 h-4 bg-slate-100 rounded-full"></div>)}
               </div>
               <div className="w-24 h-8 bg-indigo-600 rounded-lg"></div>
            </div>

            {/* Fake Hero */}
            <div className="flex-1 bg-slate-900 flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
               <div className="w-3/4 md:w-1/2 h-12 md:h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm z-10"></div>
               <div className="w-2/3 md:w-1/3 h-6 bg-white/10 rounded-full mb-10 z-10"></div>
               <div className="flex gap-4 z-10">
                 <div className="w-40 h-12 bg-indigo-500 rounded-xl"></div>
                 <div className="w-40 h-12 bg-white/10 rounded-xl"></div>
               </div>
            </div>

            {/* Fake Grid */}
            <div className="h-64 bg-white p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
               {[1,2,3,4].map(i => (
                 <div key={i} className="bg-slate-50 rounded-2xl p-6 flex flex-col gap-4 border border-slate-100">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full"></div>
                    <div className="w-full h-4 bg-slate-200 rounded-full"></div>
                    <div className="w-2/3 h-4 bg-slate-200 rounded-full"></div>
                 </div>
               ))}
            </div>

            {/* OVERLAY GENERATION STATE */}
            {isGenerating && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center z-50">
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600" size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Génération de l'interface...</h3>
                <p className="text-slate-500 font-medium bg-white px-6 py-2 rounded-full border border-slate-200 shadow-sm animate-pulse">
                  Analyse du secteur : "{prompt.substring(0, 30)}..."
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SOCIAL PROOF / LOGOS */}
      {/* ========================================= */}
      <section className="relative z-10 py-10 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">La technologie approuvée par les standards du web</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {['React', 'Next.js', 'Tailwind', 'Stripe', 'AWS', 'Vercel'].map((logo, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-black text-slate-800 tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* HOW IT WORKS (3 STEPS) */}
      {/* ========================================= */}
      <section id="how-it-works" className="relative z-10 py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Fonctionnement</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">De l'idée à la réalité <br/>en 3 étapes simples.</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 relative">
            {/* Ligne connectrice (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-[2px] bg-slate-200 z-0"></div>
            
            {[
              { 
                step: "01", 
                title: "Décrivez votre activité", 
                desc: "Un simple texte suffit. Précisez votre métier, votre ville et ce que vous proposez.", 
                icon: <MessageSquare size={32} className="text-indigo-600" /> 
              },
              { 
                step: "02", 
                title: "L'IA conçoit le site", 
                desc: "Notre moteur génère le design, rédige les textes commerciaux et intègre les images adaptées.", 
                icon: <Code size={32} className="text-indigo-600" /> 
              },
              { 
                step: "03", 
                title: "Publiez en un clic", 
                desc: "Ajustez les détails avec notre éditeur visuel si besoin, puis cliquez sur 'Mettre en ligne'.", 
                icon: <Globe size={32} className="text-indigo-600" /> 
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-32 h-32 bg-white border border-slate-200 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-slate-200/50 group-hover:-translate-y-2 transition-transform duration-300 relative">
                  {item.icon}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black border-4 border-slate-50 shadow-sm">
                    {item.step}
                  </div>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SHOWCASE / TEMPLATES TABS */}
      {/* ========================================= */}
      <section id="showcase" className="relative z-10 py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">Conçu pour s'adapter <br/>à votre secteur.</h2>
              <p className="text-slate-500 font-medium text-lg">Découvrez des exemples de structures générées par notre IA pour différents métiers.</p>
            </div>
            
            {/* Onglets (Tabs) */}
            <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-xl">
              {SHOWCASE_CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveShowcaseTab(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeShowcaseTab === cat ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShowcase.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className={`aspect-[4/3] rounded-[32px] ${item.color} border border-slate-100 p-8 flex flex-col relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200`}>
                  
                  {/* Fake UI Structure */}
                  <div className="flex justify-between items-center mb-8">
                    <div className={`w-16 h-4 ${item.accent} rounded-full`}></div>
                    <div className="flex gap-2">
                      <div className="w-8 h-2 bg-slate-200 rounded-full"></div>
                      <div className="w-8 h-2 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="w-3/4 h-8 bg-slate-200/50 rounded-lg mb-4"></div>
                  <div className="w-1/2 h-4 bg-slate-200/50 rounded-full mb-8"></div>
                  
                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"></div>
                    <div className="h-24 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"></div>
                  </div>

                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
                </div>
                
                <div className="mt-6 flex justify-between items-center px-2">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{item.cat}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* FEATURES GRID */}
      {/* ========================================= */}
      <section id="features" className="relative z-10 py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Les avantages</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Une technologie d'agence, <br/>accessible à tous.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES_DATA.map((feature, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors duration-300">
                <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/50">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Subtle background grid dark */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* ========================================= */}
      {/* COMPARISON TABLE (AI vs AGENCY) */}
      {/* ========================================= */}
      <section className="relative z-10 py-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Pourquoi Datafuse AI ?</h2>
            <p className="text-slate-500 text-lg font-medium">Comparez par vous-même. Le choix est vite fait.</p>
          </div>
          
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 md:p-8 font-black text-slate-400 uppercase text-xs tracking-wider w-1/3">Critères</th>
                  <th className="p-6 md:p-8 font-black text-indigo-600 uppercase text-sm md:text-base text-center bg-indigo-50/50 w-1/3">Datafuse AI</th>
                  <th className="p-6 md:p-8 font-black text-slate-500 uppercase text-xs tracking-wider text-center w-1/3">Agence / Freelance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { label: "Coût de création", ai: "Inclus (0€)", old: "1 500€ à 5 000€" },
                  { label: "Délai de mise en ligne", ai: "60 secondes", old: "4 à 8 semaines" },
                  { label: "Hébergement & Maintenance", ai: "9,99€ / mois", old: "50€ à 150€ / mois" },
                  { label: "Modifications de contenu", ai: "Instantanées & Autonomes", old: "Sur devis (24h-48h)" },
                  { label: "Rédaction SEO", ai: "Générée par l'IA", old: "Facturée en supplément" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 md:p-8 font-bold text-slate-700 text-sm md:text-base">{row.label}</td>
                    <td className="p-6 md:p-8 text-center bg-indigo-50/30 font-black text-indigo-600">{row.ai}</td>
                    <td className="p-6 md:p-8 text-center text-slate-500 font-semibold text-sm md:text-base">{row.old}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* TESTIMONIALS SLIDER */}
      {/* ========================================= */}
      <section className="relative z-10 py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Avis Clients</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-16 text-slate-900 tracking-tight">Ils ont sauté le pas.</h3>

          <div className="relative max-w-4xl mx-auto">
             {/* Quote icon background */}
             <div className="absolute -top-10 -left-10 text-[150px] font-serif text-slate-200 opacity-50 leading-none pointer-events-none">"</div>
             
             <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 min-h-[300px] flex flex-col justify-center items-center relative z-10 transition-all duration-500">
               <div className="flex gap-1 mb-8">
                 {[1,2,3,4,5].map(s => <Star key={s} size={24} fill="#818cf8" className="text-indigo-400" />)}
               </div>
               <p className="text-xl md:text-3xl font-bold text-slate-700 mb-10 italic leading-snug">
                 "{TESTIMONIALS[activeTestimonial].text}"
               </p>
               <div className="flex items-center gap-4">
                 <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${TESTIMONIALS[activeTestimonial].color} flex items-center justify-center text-white font-black text-lg shadow-inner`}>
                   {TESTIMONIALS[activeTestimonial].initials}
                 </div>
                 <div className="text-left">
                   <h5 className="font-black text-slate-900 text-lg">{TESTIMONIALS[activeTestimonial].name}</h5>
                   <p className="text-sm text-indigo-600 font-bold uppercase tracking-wider">{TESTIMONIALS[activeTestimonial].role}</p>
                 </div>
               </div>
             </div>

             {/* Navigation Dots */}
             <div className="flex justify-center gap-3 mt-10">
               {TESTIMONIALS.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setActiveTestimonial(idx)}
                   className={`h-3 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-10 bg-indigo-600' : 'w-3 bg-slate-300 hover:bg-slate-400'}`}
                 />
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* PRICING SECTION */}
      {/* ========================================= */}
      <section id="pricing" className="relative z-10 py-32 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Simple. Clair. Sans surprise.</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
              Un seul abonnement pour tout gérer. Pas de frais cachés, pas de devis compliqué.
            </p>
            
            {/* Toggle Annuel/Mensuel */}
            <div className="inline-flex items-center gap-4 bg-slate-100 p-2 rounded-full mx-auto">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${!isAnnual ? 'bg-white shadow-md text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Mensuel
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${isAnnual ? 'bg-indigo-600 shadow-md text-white' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Annuel <span className={isAnnual ? 'bg-white/20 px-2 py-0.5 rounded text-[10px]' : 'bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded text-[10px]'}>-20%</span>
              </button>
            </div>
          </div>

          <div className="max-w-md mx-auto relative group">
            {/* Decorative Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[48px] blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            
            <div className="relative bg-white border-2 border-slate-200 rounded-[40px] p-10 md:p-12 text-center shadow-2xl">
              <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[11px] font-black uppercase tracking-widest mb-8">
                Pack Unique Pro
              </div>
              
              <div className="flex justify-center items-baseline gap-2 mb-2">
                <span className="text-6xl md:text-7xl font-black text-slate-900">
                  {isAnnual ? '7,99€' : '9,99€'}
                </span>
                <span className="text-slate-500 font-bold text-lg">/mois</span>
              </div>
              <p className="text-slate-400 text-sm font-semibold mb-10">
                {isAnnual ? 'Facturé 95,88€ par an' : 'Sans engagement de durée'}
              </p>

              <button className="w-full py-5 bg-indigo-600 text-white rounded-[20px] font-black text-xl hover:bg-slate-900 transition-all shadow-xl shadow-indigo-200 active:scale-95 mb-10">
                Créer mon site
              </button>

              <div className="space-y-4 text-left">
                {[
                  "Génération du site par IA",
                  "Hébergement Cloud ultra-rapide",
                  "Nom de domaine (.com ou .fr) offert*",
                  "Modifications illimitées via éditeur",
                  "Certificat de sécurité SSL",
                  "Optimisation SEO native",
                  "Support technique par email"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-700 font-semibold text-sm">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-indigo-600" strokeWidth={4} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* FAQ SECTION */}
      {/* ========================================= */}
      <section id="faq" className="relative z-10 py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Questions Fréquentes</h2>
            <p className="text-slate-500 font-medium text-lg">Tout ce que vous devez savoir avant de vous lancer.</p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-300 hover:shadow-md">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-lg md:text-xl pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === index ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-slate-200 text-slate-400'}`}>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-4 text-base md:text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* BIG BOTTOM CTA */}
      {/* ========================================= */}
      <section className="relative z-10 py-32 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-indigo-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">Prêt à développer <br/>votre activité ?</h2>
          <p className="text-slate-300 text-xl md:text-2xl mb-12 font-medium">Rejoignez plus de 14 000 professionnels. Générez votre site maintenant.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-indigo-900 px-10 py-5 rounded-full font-black text-xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-2xl shadow-black/50 inline-flex items-center gap-3">
            Générer mon site <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* ========================================= */}
      {/* MEGA FOOTER */}
      {/* ========================================= */}
      <footer className="relative z-10 bg-white border-t border-slate-200 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6 cursor-pointer">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap size={16} fill="white" className="text-white" />
                </div>
                <span>DATAFUSE</span><span className="text-indigo-600 text-xs uppercase tracking-[0.2em] font-bold">AI</span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 max-w-sm">
                L'intelligence artificielle au service des entrepreneurs. Créez un site web professionnel, performant et optimisé SEO en moins d'une minute.
              </p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-colors"><Instagram size={18} /></a>
              </div>
            </div>

            {/* Links Col 1 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Produit</h4>
              <ul className="space-y-4 text-slate-500 font-medium text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Modèles</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Mises à jour</a></li>
              </ul>
            </div>

            {/* Links Col 2 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Ressources</h4>
              <ul className="space-y-4 text-slate-500 font-medium text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Tutoriels</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Communauté</a></li>
              </ul>
            </div>

            {/* Newsletter Col */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
              <p className="text-slate-500 text-sm font-medium mb-4">Recevez nos astuces SEO et IA chaque mois.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400" />
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <div>© {new Date().getFullYear()} DATAFUSE STUDIO. TOUS DROITS RÉSERVÉS.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900 transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-slate-900 transition-colors">CGV</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}