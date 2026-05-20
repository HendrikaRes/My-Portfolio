import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll layar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



// Fungsi untuk scroll mulus menggunakan JavaScript
const scrollToSection = (e, sectionId) => {
  e.preventDefault(); // Mencegah lompatan kaku bawaan browser
  const element = document.getElementById(sectionId);
  
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  setIsOpen(false); // Otomatis tutup menu mobile jika sedang terbuka
};

  return (
    // Outer Wrapper: Tetap fixed di atas
    <div className="fixed top-0 w-full z-50 flex justify-center px-4 pt-4 pointer-events-none">
      
      {/* Inner Nav: Berubah jadi "Pill" saat di-scroll */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`pointer-events-auto transition-all duration-500 ease-in-out w-full max-w-6xl flex items-center justify-between px-6 ${
          isScrolled 
            ? 'py-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-full' 
            : 'py-6 bg-transparent border-transparent rounded-none'
        }`}
      >
        {/* Logo Estetik */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-9 h-9 bg-linear-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
            H
          </div>
          <span className="text-xl font-bold text-white tracking-wide flex items-center">
            Hendrik<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">.dev</span>
          </span>
        </a>

        {/* Menu Desktop dengan Animasi Garis Bawah */}
<div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
  {['Home', 'Projects', 'Skills'].map((item) => (
    <a 
      key={item} 
      href={`#${item.toLowerCase()}`} 
      onClick={(e) => scrollToSection(e, item.toLowerCase())} // <--- Tambahkan ini
      className="relative group hover:text-white transition-colors py-2"
    >
      {item}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-linear-to-r from-blue-500 to-emerald-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </a>
  ))}
</div>

        {/* Tombol Aksi Desktop */}
        <div className="hidden md:flex items-center gap-4">
        
          <a href="mailto:hendrikarestu2003@gmail.com" className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] active:scale-95 flex items-center gap-2">
            Hire Me
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </a>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-slate-700/50"
        >
          {/* Animasi Ikon Hamburger to Close */}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.div>
        </button>
      </motion.nav>

      {/* Menu Mobile dengan AnimatePresence (Muncul/Hilang secara Halus) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
  {['Home', 'Projects', 'Skills'].map((item) => (
    <a 
      key={item} 
      href={`#${item.toLowerCase()}`} 
      onClick={(e) => scrollToSection(e, item.toLowerCase())} 
      className="text-slate-300 hover:text-white font-medium hover:bg-slate-800/50 px-4 py-2 rounded-lg transition-colors"
    >
      {item}
    </a>
  ))}
              <div className="h-px bg-slate-800 my-2"></div>
              
              <a href="mailto:emailkamu@gmail.com" className="text-center w-full py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/30 transition-colors">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}