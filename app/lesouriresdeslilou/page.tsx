'use client';

import React, { useState, useEffect } from 'react';
import {
  Heart, Gift, Users, Camera, MessageCircleHeart, HandHeart,
  ArrowRight, ChevronDown, Menu, X, Mail, Phone, MapPin,
  Sparkles, Smile, Baby, CheckCircle2, Calendar, ChevronLeft, ChevronRight,
  Shield, TrendingUp, PieChart, FileText, Building2, Award, UserCircle2,
  BookOpen, Clock, ExternalLink
} from 'lucide-react';

// --- DONNÉES DE LA PAGE ---

const FAQS = [
  {
    question: "Je n'ai pas beaucoup de moyens, puis-je quand même aider ?",
    answer: "Absolument ! L'association repose sur l'idée que chaque petit geste compte. Vous pouvez donner de votre temps, partager nos actions sur les réseaux sociaux, ou donner des vêtements et jouets que vos enfants n'utilisent plus. L'argent n'est pas le seul moyen d'aider."
  },
  {
    question: "Où vont les dons financiers ?",
    answer: "100% des dons financiers sont utilisés pour financer des actions directes : achat de jouets neufs pour les anniversaires en foyer, matériel créatif pour les ateliers à l'hôpital, et aménagement d'espaces de vie plus chaleureux pour les enfants."
  },
  {
    question: "Acceptez-vous les peluches d'occasion ?",
    answer: "Pour des raisons d'hygiène strictes en milieu hospitalier, nous ne pouvons malheureusement accepter que des peluches neuves (avec étiquette). En revanche, les vêtements d'occasion en parfait état sont les bienvenus pour les foyers."
  },
  {
    question: "Comment puis-je devenir bénévole ?",
    answer: "Il vous suffit de remplir le formulaire de contact ci-dessous en précisant 'Bénévolat' ! Nous vous recontacterons pour discuter de vos envies, de votre temps libre et de la manière dont vous souhaitez vous impliquer (logistique, animation, communication...)."
  }
];

const DONATION_TIERS = [
  { amount: 10, impact: "Offre un kit de dessin ou un livre à un enfant hospitalisé." },
  { amount: 20, impact: "Finance un cadeau d'anniversaire neuf pour un enfant en foyer." },
  { amount: 50, impact: "Permet d'organiser un atelier créatif complet pour un groupe d'enfants." },
  { amount: 100, impact: "Contribue à l'aménagement d'un espace de jeu dans un service pédiatrique." }
];

const UPCOMING_EVENTS = [
  {
    title: "Collecte de Noël",
    date: "15 Décembre 2026",
    description: "Grande collecte de jouets neufs et de vêtements pour les fêtes de fin d'année.",
    location: "Centre communautaire, Paris",
    color: "rose"
  },
  {
    title: "Atelier Créatif à l'Hôpital",
    date: "22 Janvier 2027",
    description: "Animations et activités créatives avec les enfants du service pédiatrique.",
    location: "Hôpital Necker, Paris",
    color: "orange"
  },
  {
    title: "Anniversaires du Mois",
    date: "5 Février 2027",
    description: "Célébration des anniversaires des enfants en foyer avec cadeaux et gâteaux.",
    location: "Foyer d'accueil, Île-de-France",
    color: "blue"
  }
];

const MEMORY_IMAGES = [
  {
    src: "/images/memories/activity1.jpg",
    alt: "Atelier créatif avec les enfants",
    caption: "Moments de créativité partagés"
  },
  {
    src: "/images/memories/activity2.jpg",
    alt: "Fête d'anniversaire en foyer",
    caption: "Des sourires inoubliables"
  },
  {
    src: "/images/memories/activity3.jpg",
    alt: "Distribution de jouets",
    caption: "La magie de Noël"
  },
  {
    src: "/images/memories/activity4.jpg",
    alt: "Activité à l'hôpital",
    caption: "Des moments de joie"
  },
  {
    src: "/images/memories/activity5.jpg",
    alt: "Atelier peinture",
    caption: "L'art qui unit"
  }
];

const TRANSPARENCY_STATS = [
  {
    icon: PieChart,
    value: "100%",
    label: "Des dons aux enfants",
    description: "Chaque euro collecté finance directement nos actions"
  },
  {
    icon: TrendingUp,
    value: "2,500€",
    label: "Collectés en 2026",
    description: "Grâce à votre générosité"
  },
  {
    icon: Gift,
    value: "150+",
    label: "Enfants aidés",
    description: "Des sourires depuis notre création"
  },
  {
    icon: Users,
    value: "25",
    label: "Bénévoles actifs",
    description: "Une équipe dévouée et passionnée"
  }
];

const PARTNERS = [
  {
    name: "Hôpital Necker",
    type: "Établissement de santé",
    logo: "/images/partners/necker.png",
    description: "Partenaire pour nos ateliers en pédiatrie"
  },
  {
    name: "Foyer Les Papillons",
    type: "Foyer d'accueil",
    logo: "/images/partners/papillons.png",
    description: "Collaboration pour les anniversaires"
  },
  {
    name: "Entreprise TechCare",
    type: "Sponsor privé",
    logo: "/images/partners/techcare.png",
    description: "Soutien financier et collectes"
  },
  {
    name: "Fondation Enfance",
    type: "Organisation caritative",
    logo: "/images/partners/enfance.png",
    description: "Réseau d'entraide et partage"
  }
];

const BLOG_ARTICLES = [
  {
    title: "Retour sur notre collecte de Noël 2025",
    date: "15 Janvier 2026",
    category: "Événement",
    excerpt: "Une collecte exceptionnelle qui a permis d'offrir plus de 200 cadeaux aux enfants.",
    image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/653001301_122093833340918800_639312913511433290_n.jpg?stp=dst-jpegr_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=meehe6fJOXYQ7kNvwFN-1ho&_nc_oc=AdrxVrpTkeMeo7qRjHJzcGBzLg50S43rZpvzPNHdVVw5kuLWKkB3hlvX6rFd4EH7xxY&_nc_zt=23&se=-1&_nc_ht=scontent-cdg4-2.xx&_nc_gid=QC8zp9AcOKaSgmYQ_GvMfg&_nc_ss=8&oh=00_Afx61ZTy1qSOkXrBBGd7QQG4CX2GcRDZpHI55Ey2wPcENw&oe=69C1D1BA",
    readTime: "5 min"
  },
  {
    title: "Comment organiser une collecte dans votre entreprise ?",
    date: "8 Janvier 2026",
    category: "Guide",
    excerpt: "Découvrez nos conseils pour mobiliser vos collègues autour d'une belle cause.",
    image: "/images/blog/guide-collecte.jpg",
    readTime: "8 min"
  },
  {
    title: "Portrait : Rencontre avec Sarah, bénévole",
    date: "22 Décembre 2025",
    category: "Portrait",
    excerpt: "Sarah nous raconte son parcours et pourquoi elle s'investit dans l'association.",
    image: "/images/blog/portrait-sarah.jpg",
    readTime: "6 min"
  }
];

const TEAM_MEMBERS = [
  {
    name: "Sophie Martin",
    role: "Fondatrice & Présidente",
    photo: "/images/team/sophie.jpg",
    description: "À l'origine du projet, Sophie coordonne toutes les actions de l'association.",
    color: "rose"
  },
  {
    name: "Thomas Dubois",
    role: "Trésorier",
    photo: "/images/team/thomas.jpg",
    description: "Responsable de la gestion financière et de la transparence des comptes.",
    color: "blue"
  },
  {
    name: "Marie Leroy",
    role: "Responsable Communication",
    photo: "/images/team/marie.jpg",
    description: "En charge des réseaux sociaux et de la visibilité de l'association.",
    color: "orange"
  },
  {
    name: "Lucas Bernard",
    role: "Coordinateur Événements",
    photo: "/images/team/lucas.jpg",
    description: "Organise et supervise toutes nos activités caritatives.",
    color: "rose"
  }
];

// --- COMPOSANTS UI RÉUTILISABLES ---

const FloatingElement = ({ children, className = "", delay = "0s", duration = "3s" }: { children: React.ReactNode, className?: string, delay?: string, duration?: string }) => (
  <div 
    className={`absolute animate-bounce opacity-30 ${className}`} 
    style={{ animationDuration: duration, animationDelay: delay }}
  >
    {children}
  </div>
);

const SectionTitle = ({ children, subtitle, align = "left" }: { children: React.ReactNode, subtitle?: string, align?: "left" | "center" }) => (
  <div className={`mb-16 space-y-4 ${align === "center" ? "text-center" : ""}`}>
    {subtitle && (
      <span className="inline-block text-rose-500 font-bold tracking-widest uppercase text-xs px-4 py-2 bg-rose-50/80 rounded-full border border-rose-100">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
      {children}
    </h2>
  </div>
);

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-rose-100/50 last:border-none">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-rose-500' : 'text-slate-800 group-hover:text-rose-400'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-rose-100 rotate-180' : 'bg-slate-50 group-hover:bg-rose-50'}`}>
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-rose-500' : 'text-slate-400'}`} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL DE LA PAGE ---

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);
  const [customDonation, setCustomDonation] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gérer le fond de la navbar au scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % MEMORY_IMAGES.length);
    }, 5000); // Change d'image toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);

  // Fonctions de navigation du carrousel
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % MEMORY_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? MEMORY_IMAGES.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#FCFAFA] text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between px-6 transition-all duration-500 ${isScrolled ? 'h-16 bg-white/80 backdrop-blur-xl shadow-lg shadow-rose-100/40 rounded-full border border-white' : 'h-16 bg-transparent'}`}>
            
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer z-50">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-200 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white w-5 h-5 fill-current" />
              </div>
              <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Les Sourires de Lilou
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-4 text-sm font-bold text-slate-600">
              <a href="#histoire" className="hover:text-rose-500 transition-colors">Histoire</a>
              <a href="#equipe" className="hover:text-rose-500 transition-colors">Équipe</a>
              <a href="#transparence" className="hover:text-rose-500 transition-colors">Transparence</a>
              <a href="#actualites" className="hover:text-rose-500 transition-colors">Actualités</a>
              <a href="#don" className="bg-rose-500 text-white px-5 py-2.5 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-200 transition-all active:scale-95 flex items-center gap-2">
                Faire un don <Heart className="w-4 h-4 fill-current" />
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden z-50 p-2 text-slate-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-5 text-xl font-black text-slate-800 overflow-y-auto py-20">
            <a href="#histoire" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Notre Histoire</a>
            <a href="#activites" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Activités</a>
            <a href="#souvenirs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Souvenirs</a>
            <a href="#equipe" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">L'Équipe</a>
            <a href="#transparence" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Transparence</a>
            <a href="#partenaires" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Partenaires</a>
            <a href="#actualites" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Actualités</a>
            <a href="#statut-legal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Statut Légal</a>
            <a href="#agir" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Comment aider ?</a>
            <a href="#don" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Faire un don</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500">Contact</a>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Décors organiques d'arrière-plan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
        </div>

        <FloatingElement className="top-1/4 left-[10%]" delay="0s" duration="4s"><Heart className="text-rose-300 w-8 h-8 fill-current" /></FloatingElement>
        <FloatingElement className="bottom-1/3 right-[15%]" delay="1s" duration="5s"><Smile className="text-orange-300 w-10 h-10" /></FloatingElement>
        <FloatingElement className="top-1/3 right-[20%]" delay="2s" duration="6s"><Sparkles className="text-yellow-300 w-6 h-6" /></FloatingElement>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50/80 border border-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            Association Officielle Loi 1901
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]">
            Redonner le pouvoir au <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">sourire</span>
              <svg className="absolute -bottom-4 left-0 w-full h-6 text-rose-300 -z-10" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0 15 Q 100 -5 200 15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span> 
            <span className="text-rose-500 italic font-serif ml-4">des enfants</span>.
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            L'union fait la force. Si chacun fait un petit peu, ensemble nous ferons quelque chose de grand, de beau et de profondément humain.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#agir" className="group relative bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2">
              Rejoindre l'aventure <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#histoire" className="bg-white text-slate-800 border-2 border-slate-100 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
              Lire notre histoire
            </a>
          </div>
        </div>
      </section>

      {/* ================= IMPACT BUBBLES ================= */}
      <section className="pb-24 px-6 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-rose-50/50 border border-slate-50 flex items-center gap-6">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Baby className="w-8 h-8 text-rose-500" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Enfants en foyer</h3>
              <p className="text-slate-500 text-sm font-medium mt-1">Apporter de la chaleur dans leur quotidien.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-rose-50/50 border border-slate-50 flex items-center gap-6 md:-translate-y-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-8 h-8 text-orange-500 fill-current" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Hospitalisation</h3>
              <p className="text-slate-500 text-sm font-medium mt-1">Adoucir les séjours à l'hôpital.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-rose-50/50 border border-slate-50 flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Solidarité</h3>
              <p className="text-slate-500 text-sm font-medium mt-1">L'union des forces citoyennes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY / MANIFESTE ================= */}
      <section id="histoire" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image & Composition organique */}
            <div className="relative group order-2 lg:order-1">
              {/* Forme de fond Blob */}
              <svg className="absolute -inset-10 w-[120%] h-[120%] text-rose-50 -z-10 transform -rotate-12 transition-transform duration-700 group-hover:rotate-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.6,-2.9C94.4,12.2,86.1,26.8,75.7,39.3C65.3,51.8,52.8,62.1,39.1,68.9C25.4,75.7,10.5,78.9,-4.1,84.5C-18.7,90.1,-33,98.1,-45.5,94.2C-58,90.3,-68.7,74.5,-77.4,60.1C-86.1,45.7,-92.8,32.7,-95.1,19.2C-97.4,5.7,-95.3,-8.3,-90.1,-21.5C-84.9,-34.7,-76.6,-47.1,-65.3,-56C-54,-64.9,-39.7,-70.3,-26.1,-75.4C-12.5,-80.5,0.4,-85.3,14.2,-83C28,-80.7,42.7,-71.3,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
              
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                {/* Espace pour une vraie photo. En attendant : composition chaleureuse */}
                <div className="aspect-[4/5] bg-gradient-to-br from-rose-100 to-orange-50 p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <MessageCircleHeart className="text-rose-400 w-16 h-16" />
                  <div>
                    <h3 className="text-3xl font-serif italic text-slate-800 mb-4">"Ce projet, auquel je pense depuis tant d'années, a enfin vu le jour."</h3>
                    <p className="font-bold text-rose-600 uppercase tracking-widest text-sm">— Le Fondateur</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[2rem] shadow-xl border border-rose-50 max-w-[250px] hidden md:block animate-bounce" style={{ animationDuration: '6s' }}>
                <p className="text-slate-600 font-medium text-sm">
                  <span className="text-2xl">💖</span> <br />Chaque sourire offert est une victoire.
                </p>
              </div>
            </div>

            {/* Texte de l'histoire */}
            <div className="space-y-8 order-1 lg:order-2">
              <SectionTitle subtitle="La naissance du projet">
                Une ambition <br />profondément <span className="text-rose-500 italic font-serif">humaine</span>.
              </SectionTitle>
              
              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  C’est avec une immense fierté et beaucoup d’émotion que je vous annonce la naissance officielle de l’association <strong>Les Sourires de Lilou</strong>.
                </p>
                <div className="pl-6 border-l-4 border-rose-300 py-2">
                  <p className="font-medium text-slate-800 italic">
                    "Aujourd’hui, je peux enfin commencer à mettre ma petite pierre à l’édifice pour apporter du bonheur et du réconfort aux enfants hospitalisés ou vivant en foyer."
                  </p>
                </div>
                <p>
                  Nous sommes mamans, papas, sœurs, frères, tantes, oncles… et avant tout des êtres humains. 
                  <span className="font-bold text-slate-800"> Aucun enfant ne mérite de vivre des situations aussi difficiles. </span> 
                  À notre échelle, avec nos moyens, nous pouvons leur offrir des moments de joie, de l’attention et de la douceur.
                </p>
                <p>
                  Merci du fond du cœur à toutes celles et ceux qui soutiendront cette aventure, de près ou de loin.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COMMENT AIDER (CARTES DÉTAILLÉES) ================= */}
      <section id="agir" className="py-24 px-6 bg-[#FCFAFA] border-t border-rose-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Comment agir ?" align="center">
            Toute petite action peut faire de <br />
            <span className="text-rose-500 underline decoration-4 decoration-rose-200 underline-offset-8">très grandes choses</span>.
          </SectionTitle>

          <p className="text-center text-slate-600 text-xl max-w-3xl mx-auto mb-16">
            Nous n’avons pas tous les mêmes moyens, ni le même temps. 
            Et ce n’est absolument pas un problème. Votre aide précieuse peut prendre plusieurs formes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Vêtements */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/20 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                <Baby className="text-rose-500 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Vêtements</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Un don de vêtements en très bon état permet de redonner de la dignité et du confort aux enfants.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Propre et sans trous</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> De 0 à 16 ans</li>
              </ul>
            </div>

            {/* Jouets */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/20 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Gift className="text-orange-500 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Jouets Neufs</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Pour des raisons médicales et pour la magie des fêtes, nous récoltons uniquement des jouets neufs.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Jeux de société</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Livres et coloriages</li>
              </ul>
            </div>

            {/* Temps */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/20 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <Users className="text-blue-500 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Votre Temps</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Préparer une activité créative, aider lors d'une collecte, ou proposer une idée d'atelier.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Bénévolat ponctuel</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Savoir-faire manuel</li>
              </ul>
            </div>

            {/* Partage */}
            <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-slate-900/20 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Camera className="text-rose-400 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Votre Voix</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Un partage sur les réseaux sociaux, un mot à votre entreprise pour organiser une collecte...
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-rose-400 font-bold hover:text-rose-300 transition-colors">
                  Nous contacter <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ACTIVITÉS PRÉVUES ================= */}
      <section id="activites" className="py-24 px-6 bg-gradient-to-br from-rose-50 to-orange-50 relative overflow-hidden border-t border-rose-100/50">
        {/* Décor d'arrière-plan */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle subtitle="Agenda" align="center">
            Nos prochaines <br />
            <span className="text-rose-500 underline decoration-4 decoration-rose-200 underline-offset-8">activités caritatives</span>
          </SectionTitle>

          <p className="text-center text-slate-600 text-xl max-w-3xl mx-auto mb-16">
            Rejoignez-nous lors de nos événements pour partager des moments de joie et d'entraide avec les enfants.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.map((event, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Bande de couleur en haut */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${
                  event.color === 'rose' ? 'from-rose-400 to-rose-500' :
                  event.color === 'orange' ? 'from-orange-400 to-orange-500' :
                  'from-blue-400 to-blue-500'
                }`}></div>

                {/* Icône et date */}
                <div className="flex items-center gap-4 mb-6 mt-2">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    event.color === 'rose' ? 'bg-rose-50 text-rose-500' :
                    event.color === 'orange' ? 'bg-orange-50 text-orange-500' :
                    'bg-blue-50 text-blue-500'
                  } group-hover:scale-110 transition-transform`}>
                    <Calendar className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date</p>
                    <p className={`text-sm font-black ${
                      event.color === 'rose' ? 'text-rose-600' :
                      event.color === 'orange' ? 'text-orange-600' :
                      'text-blue-600'
                    }`}>{event.date}</p>
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-black text-slate-900 mb-4">{event.title}</h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">{event.description}</p>

                {/* Localisation */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{event.location}</span>
                </div>

                {/* Badge "À venir" */}
                <div className="absolute top-8 right-8">
                  <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full">
                    À venir
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA pour s'inscrire */}
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 transition-all hover:-translate-y-1"
            >
              Participer aux événements <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= NOS SOUVENIRS (CARROUSEL) ================= */}
      <section id="souvenirs" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Galerie" align="center">
            Nos plus beaux <br />
            <span className="text-rose-500 italic font-serif">souvenirs</span>
          </SectionTitle>

          <p className="text-center text-slate-600 text-xl max-w-3xl mx-auto mb-16">
            Retour en images sur les moments de joie partagés avec les enfants lors de nos activités.
          </p>

          {/* Carrousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Container du carrousel */}
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-900/10">
              {/* Images */}
              <div className="relative w-full h-full">
                {MEMORY_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentImageIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    {/* Placeholder avec gradient - remplacer par vraies images */}
                    <div className="w-full h-full bg-gradient-to-br from-rose-100 via-orange-50 to-pink-100 flex items-center justify-center relative">
                      {/* Overlay sombre pour le texte */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                      {/* Icône placeholder */}
                      <Camera className="text-rose-300/30 w-32 h-32 absolute" />

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                        <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                          {image.caption}
                        </p>
                        <p className="text-white/80 text-sm mt-2 drop-shadow">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                    {/* Pour utiliser de vraies images, remplacer le div ci-dessus par :
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>
                ))}
              </div>

              {/* Boutons de navigation */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all group z-10"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6 text-slate-800 group-hover:text-rose-500 transition-colors" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all group z-10"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6 text-slate-800 group-hover:text-rose-500 transition-colors" />
              </button>
            </div>

            {/* Indicateurs (dots) */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {MEMORY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImageIndex
                      ? 'w-12 h-3 bg-rose-500'
                      : 'w-3 h-3 bg-slate-300 hover:bg-rose-300'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Message encourageant */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-rose-50 to-orange-50 px-8 py-6 rounded-[2rem] border border-rose-100">
              <p className="text-slate-700 font-medium text-lg max-w-2xl">
                <Heart className="inline w-5 h-5 text-rose-500 fill-current mr-2" />
                Chaque photo raconte une histoire de partage et d'espoir.
                <strong className="text-rose-600"> Ensemble, continuons à créer ces moments magiques.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= L'ÉQUIPE ================= */}
      <section id="equipe" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-rose-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Notre équipe" align="center">
            Les visages derrière <br />
            <span className="text-rose-500 italic font-serif">Les Sourires de Lilou</span>
          </SectionTitle>

          <p className="text-center text-slate-600 text-xl max-w-3xl mx-auto mb-16">
            Une équipe de passionnés qui donnent de leur temps et de leur cœur pour faire la différence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Photo */}
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    member.color === 'rose' ? 'from-rose-200/50 to-rose-100/30' :
                    member.color === 'orange' ? 'from-orange-200/50 to-orange-100/30' :
                    'from-blue-200/50 to-blue-100/30'
                  } flex items-center justify-center`}>
                    <UserCircle2 className={`w-32 h-32 ${
                      member.color === 'rose' ? 'text-rose-300' :
                      member.color === 'orange' ? 'text-orange-300' :
                      'text-blue-300'
                    }`} />
                  </div>
                  {/* Pour vraies photos : <img src={member.photo} alt={member.name} className="w-full h-full object-cover" /> */}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 mb-1">{member.name}</h3>
                  <p className={`text-sm font-bold mb-3 ${
                    member.color === 'rose' ? 'text-rose-500' :
                    member.color === 'orange' ? 'text-orange-500' :
                    'text-blue-500'
                  }`}>{member.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Rejoindre */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white px-8 py-6 rounded-[2rem] border border-slate-200 shadow-lg">
              <p className="text-slate-700 font-medium mb-4">
                Vous souhaitez rejoindre l'aventure ?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-600 transition-colors"
              >
                Devenir bénévole <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENCE ================= */}
      <section id="transparence" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Transparence" align="center">
            Nos actions en <br />
            <span className="text-rose-500 underline decoration-4 decoration-rose-200 underline-offset-8">toute transparence</span>
          </SectionTitle>

          <p className="text-center text-slate-600 text-xl max-w-3xl mx-auto mb-16">
            La confiance est au cœur de notre mission. Voici nos chiffres clés et notre engagement envers vous.
          </p>

          {/* Statistiques */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {TRANSPARENCY_STATS.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/30 text-center hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-rose-500" />
                </div>
                <p className="text-4xl font-black text-slate-900 mb-2">{stat.value}</p>
                <p className="text-lg font-bold text-slate-700 mb-2">{stat.label}</p>
                <p className="text-sm text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Engagements */}
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-[3rem] p-8 md:p-12 border border-rose-100">
            <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">
              Nos engagements
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-7 h-7 text-rose-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Traçabilité complète</h4>
                <p className="text-slate-600 text-sm">Tous les dons sont enregistrés et justifiés par des reçus détaillés.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <FileText className="w-7 h-7 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Rapports annuels</h4>
                <p className="text-slate-600 text-sm">Publication d'un rapport d'activité détaillé chaque année.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle2 className="w-7 h-7 text-blue-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Aucun salaire</h4>
                <p className="text-slate-600 text-sm">100% de bénévolat : aucun membre n'est rémunéré.</p>
              </div>
            </div>

            {/* Bouton téléchargement */}
            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Télécharger notre rapport annuel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTENAIRES / ENTREPRISES ================= */}
      <section id="partenaires" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle subtitle="Nos partenaires" align="center">
            <span className="text-white">Ils croient en notre </span>
            <span className="text-rose-400 italic font-serif">mission</span>
          </SectionTitle>

          <p className="text-center text-slate-400 text-xl max-w-3xl mx-auto mb-16">
            Grâce à nos partenaires, nous pouvons agir plus fort et toucher plus d'enfants.
          </p>

          {/* Grille de partenaires */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-700 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Logo placeholder */}
                <div className="aspect-video bg-slate-700/50 rounded-xl mb-4 flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-slate-500" />
                  {/* Pour vrais logos : <img src={partner.logo} alt={partner.name} /> */}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{partner.name}</h3>
                <p className="text-xs font-medium text-rose-400 mb-3">{partner.type}</p>
                <p className="text-sm text-slate-400">{partner.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Entreprises */}
          <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-[3rem] p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Votre entreprise souhaite s'engager ?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Organisez une collecte, sponsorisez un événement ou devenez partenaire officiel.
              Ensemble, donnons du sens à votre engagement RSE.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl"
            >
              Devenir partenaire <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= ACTUALITÉS / BLOG ================= */}
      <section id="actualites" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Actualités" align="center">
            Suivez nos <br />
            <span className="text-rose-500 italic font-serif">dernières nouvelles</span>
          </SectionTitle>

          <p className="text-center text-slate-600 text-xl max-w-3xl mx-auto mb-16">
            Découvrez nos actions récentes, nos conseils et les histoires qui nous inspirent.
          </p>

          {/* Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="aspect-[16/9] bg-gradient-to-br from-rose-100 to-orange-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-rose-300/50" />
                  </div>
                  {/* Pour vraies images : <img src={article.image} alt={article.title} className="w-full h-full object-cover" /> */}

                  {/* Catégorie badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-rose-500 font-bold text-sm hover:gap-3 transition-all"
                  >
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Voir tous les articles */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors"
            >
              Voir tous les articles <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= STATUT LÉGAL / FISCAL ================= */}
      <section id="statut-legal" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="Informations légales" align="center">
            Un cadre <span className="text-rose-500">légal solide</span>
          </SectionTitle>

          <p className="text-center text-slate-600 text-xl max-w-3xl mx-auto mb-16">
            Notre association respecte toutes les obligations légales et fiscales en vigueur.
          </p>

          {/* Cartes informatives */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Statut */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Association Loi 1901</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Enregistrée au Journal Officiel depuis [Date]</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>N° RNA : W123456789</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>N° SIRET : 123 456 789 00012</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Siège social : [Adresse complète]</span>
                </p>
              </div>
            </div>

            {/* Avantages fiscaux */}
            <div className="bg-gradient-to-br from-rose-500 to-orange-500 p-8 rounded-[2.5rem] text-white shadow-xl shadow-rose-200/50">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Avantages fiscaux</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <p className="font-bold mb-1">Pour les particuliers</p>
                  <p className="text-white/90">
                    <strong className="text-2xl">66%</strong> de réduction d'impôt sur le revenu
                    (dans la limite de 20% du revenu imposable)
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <p className="font-bold mb-1">Pour les entreprises</p>
                  <p className="text-white/90">
                    <strong className="text-2xl">60%</strong> de réduction d'impôt sur les sociétés
                    (dans la limite de 0,5% du CA)
                  </p>
                </div>
                <p className="text-xs text-white/80 italic mt-4">
                  Un reçu fiscal vous sera automatiquement envoyé pour chaque don.
                </p>
              </div>
            </div>
          </div>

          {/* Documents téléchargeables */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Documents officiels
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-rose-50 hover:border-rose-200 border border-transparent transition-all group"
              >
                <FileText className="w-8 h-8 text-slate-400 group-hover:text-rose-500 transition-colors" />
                <div>
                  <p className="font-bold text-sm text-slate-900">Statuts</p>
                  <p className="text-xs text-slate-500">PDF - 250 Ko</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-rose-50 hover:border-rose-200 border border-transparent transition-all group"
              >
                <FileText className="w-8 h-8 text-slate-400 group-hover:text-rose-500 transition-colors" />
                <div>
                  <p className="font-bold text-sm text-slate-900">Récépissé JO</p>
                  <p className="text-xs text-slate-500">PDF - 180 Ko</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-rose-50 hover:border-rose-200 border border-transparent transition-all group"
              >
                <FileText className="w-8 h-8 text-slate-400 group-hover:text-rose-500 transition-colors" />
                <div>
                  <p className="font-bold text-sm text-slate-900">Rapport annuel</p>
                  <p className="text-xs text-slate-500">PDF - 1.2 Mo</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION DONS FINANCIERS ================= */}
      <section id="don" className="py-24 px-6 bg-rose-500 relative overflow-hidden">
        {/* Motifs de fond */}
        <div className="absolute inset-0 opacity-10">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="hearts" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                 <path fill="currentColor" d="M50 30 C50 10 20 10 20 30 C20 50 50 70 50 70 C50 70 80 50 80 30 C80 10 50 10 50 30 Z" transform="scale(0.3)"/>
               </pattern>
             </defs>
             <rect x="0" y="0" width="100%" height="100%" fill="url(#hearts)" />
           </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Faire un don financier</h2>
            <p className="text-rose-100 text-xl max-w-2xl mx-auto">
              Bien que non obligatoire, votre soutien financier nous permet d'acheter ce qui manque cruellement : jouets neufs, matériel médical spécifique, ou d'organiser des fêtes d'anniversaire.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-900/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Choisissez votre impact</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {DONATION_TIERS.map((tier, index) => (
                <button
                  key={index}
                  onClick={() => { setSelectedDonation(tier.amount); setCustomDonation(""); }}
                  className={`py-4 rounded-2xl font-bold text-xl border-2 transition-all ${selectedDonation === tier.amount ? 'border-rose-500 bg-rose-50 text-rose-600' : 'border-slate-100 text-slate-600 hover:border-rose-200'}`}
                >
                  {tier.amount} €
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-500 mb-2">Ou un montant libre</label>
              <div className="relative">
                <input 
                  type="number" 
                  placeholder="Ex: 35"
                  value={customDonation}
                  onChange={(e) => { setCustomDonation(e.target.value); setSelectedDonation(null); }}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-xl font-bold text-slate-900 focus:outline-none focus:border-rose-500 transition-colors"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">€</span>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 mb-8 text-center min-h-[100px] flex items-center justify-center border border-orange-100">
              <p className="text-orange-800 font-medium">
                {selectedDonation 
                  ? DONATION_TIERS.find(t => t.amount === selectedDonation)?.impact || "Merci pour votre générosité qui nous aide à avancer."
                  : customDonation 
                    ? `Avec ${customDonation}€, vous nous aidez à accomplir notre mission auprès des enfants.`
                    : "Sélectionnez un montant pour voir son impact concret."}
              </p>
            </div>

            <button className="w-full bg-rose-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200">
              Contribuer {selectedDonation ? `${selectedDonation}€` : customDonation ? `${customDonation}€` : ''} 💖
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">Paiement sécurisé. Un reçu fiscal vous sera envoyé si applicable.</p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Questions fréquentes" align="center">
            Vous avez des <span className="text-rose-500">questions</span> ? <br />Nous avons les réponses.
          </SectionTitle>

          <div className="bg-white border border-rose-100 rounded-[2rem] p-6 md:p-10 shadow-xl shadow-slate-100">
            {FAQS.map((faq, index) => (
              <AccordionItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORMULAIRE DE CONTACT ================= */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white rounded-t-[4rem] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Info Contact */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                Prêt à faire rayonner <br /><span className="text-rose-400">un visage ?</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Que ce soit pour un don matériel, une proposition de bénévolat ou juste pour nous encourager, votre message nous ira droit au cœur.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                    <Mail className="w-5 h-5 text-rose-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Écrivez-nous</p>
                    <p className="font-bold text-lg">contact@lessouriresdelilou.fr</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                    <MapPin className="w-5 h-5 text-rose-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Où nous trouver ?</p>
                    <p className="font-bold text-lg">Association située en France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-slate-700">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Prénom & Nom</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-3 px-5 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-3 px-5 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Sujet</label>
                  <select className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-3 px-5 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all appearance-none">
                    <option>Je souhaite faire un don matériel</option>
                    <option>Je souhaite devenir bénévole</option>
                    <option>Proposition de partenariat</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Votre message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-3 px-5 text-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all resize-none"
                    placeholder="Dites-nous tout..."
                  ></textarea>
                </div>
                <button className="w-full bg-rose-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2">
                  Envoyer le message <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <HandHeart className="text-rose-500 w-6 h-6" />
            <span className="font-bold text-white text-lg tracking-tight">Les Sourires de Lilou</span>
          </div>
          
          <div className="text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} Association Loi 1901. Tous droits réservés.</p>
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-rose-400 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}