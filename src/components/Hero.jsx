import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  // Daftar foto magang (Ganti path 'src' dengan lokasi foto aslimu di folder public)
  const internshipImages = [
    "/dokumentasi/pres.jpeg",
    "/dokumentasi/team.jpeg",
    "/dokumentasi/semi.jpg",
    "/dokumentasi/kerja.jpeg",
    "/dokumentasi/pp.jpeg",
  ];

  return (
    // Section utama: Latar belakang gelap
    <section id="home" className="pt-36 pb-12 px-6 bg-slate-950 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Kolom Teks (Kiri di Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left order-2 md:order-1"
        >
          {/* Badge Kecil Estetik */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 animate-pulse hover:bg-blue-500/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Open to Work / Internship
          </div>

          {/* Heading with Color Highlight */}
<h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
  I am <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Hendrik</span>
  <br />
  {/* Animated Typing Effect */}
  <span className="text-4xl md:text-5xl text-slate-300 font-bold block mt-2 h-[60px]">
    <TypeAnimation
      sequence={[
        'Web Developer',
        2000, // 2-second pause
        'Fullstack Developer',
        2000,
        'Laravel & React Expert',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h1>

{/* Professional Description */}
<motion.p 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="text-slate-400 max-w-2xl mx-auto md:mx-0 mb-10 text-lg leading-relaxed"
>
  An adaptable Information Systems graduate with a high enthusiasm for exploring new technologies. Experienced in optimizing efficient internal systems, specializing in robust Backend architecture using <span className="text-slate-200 font-medium">Laravel</span> and crafting modern, interactive Frontend interfaces built on <span className="text-slate-200 font-medium">React.js</span>.
</motion.p>

          {/* Tombol Aksi */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95 flex items-center gap-2 group">
              Explore My Work
              {/* Icon Panah dengan animasi hover bawaan Tailwind */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Kolom Gambar Profil (Kanan di Desktop) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 order-1 md:order-2 flex justify-center md:justify-end"
        >
          {/* Animasi Melayang (Floating) menggunakan Framer Motion */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative group"
          >
            {/* Efek Cahaya Belakang (Glowing Effect) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Bingkai Gambar Bulat Estetik */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-500">
              <img 
                src="img/pp12.jpeg" 
                alt="Hendrik - Fullstack Developer" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- TAMBAHAN: SLIDER FOTO MAGANG --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-32 w-full relative"
      >
        <div className="text-center mb-8 flex flex-col items-center">
          <p className="text-slate-400 text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            Pengalaman Magang & Profesional
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white">PT. Pura Barutama</h3>
        </div>

        {/* Wrapper Slider dengan efek fade (gradient) di tepi kiri dan kanan */}
        <div className="relative w-full overflow-hidden flex">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>

          {/* Animasi pergerakan dari x: 0% ke -50% (karena array digandakan 2x) */}
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 25 // Ubah durasi untuk mengatur kecepatan (semakin besar semakin lambat)
            }}
          >
            {/* Render array dua kali ([...images, ...images]) untuk menciptakan ilusi loop tanpa batas */}
            {[...internshipImages, ...internshipImages].map((img, index) => (
              <div 
                key={index} 
                className="w-[260px] h-[160px] md:w-[350px] md:h-[220px] rounded-2xl overflow-hidden flex-shrink-0 border border-slate-800/80 group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Dokumentasi Magang ${index + 1}`} 
                  className="w-full h-full object-cover transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      {/* --- AKHIR TAMBAHAN --- */}

    </section>
  );
}