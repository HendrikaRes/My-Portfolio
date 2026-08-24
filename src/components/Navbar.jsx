import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);

          const sections = ['home', 'experience', 'skills', 'projects'];
          const scrollPosition = window.scrollY + 220;

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navItems = lang === 'ID'
    ? [
        { label: 'Tentang', id: 'home' },
        { label: 'Pengalaman', id: 'experience' },
        { label: 'Keahlian', id: 'skills' },
        { label: 'Proyek', id: 'projects' },
      ]
    : [
        { label: 'About', id: 'home' },
        { label: 'Experience', id: 'experience' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
      ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      
      {/* Floating Island Glass Nav */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl flex items-center justify-between px-5 sm:px-6 py-3 rounded-full border ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-2xl border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] py-2.5'
            : 'bg-slate-900/40 backdrop-blur-xl border-white/5 py-3.5'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-display font-bold text-sm text-white">
              H
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
              Hendrik<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">.dev</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full p-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-blue-500/40 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls: Language & Hire Me CTA */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Language Toggle Slider */}
          <div className="flex bg-slate-900/90 border border-white/10 rounded-full p-0.5">
            <button
              onClick={() => setLang('ID')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer ${
                lang === 'ID'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer ${
                lang === 'EN'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
          </div>

          {/* Shimmering CTA Button */}
          <a
            href="mailto:hendrikarestu2003@gmail.com"
            className="relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95"
          >
            <span>{lang === 'ID' ? 'Hubungi Saya' : 'Hire Me'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex bg-slate-900 border border-white/10 rounded-full p-0.5 text-[10px]">
            <button
              onClick={() => setLang('ID')}
              className={`px-2 py-0.5 rounded-full ${lang === 'ID' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
            >
              ID
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-2 py-0.5 rounded-full ${lang === 'EN' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 rounded-full"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 max-w-lg mx-auto bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="h-px bg-white/5 my-2"></div>

            <a
              href="mailto:hendrikarestu2003@gmail.com"
              className="w-full py-3 rounded-2xl text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/25"
            >
              {lang === 'ID' ? 'Hubungi Saya' : 'Hire Me'}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}