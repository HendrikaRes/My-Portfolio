import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiBootstrap, SiJquery, 
  SiLaravel, SiPhp, 
  SiPostgresql, SiMysql, SiGit, 
  SiPython,
  SiJavascript
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { Cpu, CheckCircle2, Sparkles, Terminal, Database, Layout } from 'lucide-react';

export default function Skills({ lang }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const skills = [
    { name: "React.js", category: "FRONTEND", icon: <SiReact className="w-8 h-8 text-[#61DAFB]" /> },
    { name: "Laravel", category: "BACKEND", icon: <SiLaravel className="w-8 h-8 text-[#FF2D20]" /> },
    { name: "PostgreSQL", category: "DATABASE", icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" /> },
    { name: "MySQL", category: "DATABASE", icon: <SiMysql className="w-8 h-8 text-[#4479A1]" /> },
    { name: "Python", category: "BACKEND", icon: <SiPython className="w-8 h-8 text-[#3776AB]" /> },
    { name: "JavaScript", category: "FRONTEND", icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" /> },
    { name: "PHP", category: "BACKEND", icon: <SiPhp className="w-8 h-8 text-[#777BB4]" /> },
    { name: "Tailwind CSS", category: "FRONTEND", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> },
    { name: "Java", category: "BACKEND", icon: <FaJava className="w-8 h-8 text-[#007396]" /> },
    { name: "Bootstrap", category: "FRONTEND", icon: <SiBootstrap className="w-8 h-8 text-[#7952B3]" /> },
    { name: "jQuery", category: "FRONTEND", icon: <SiJquery className="w-8 h-8 text-[#0769AD]" /> },
    { name: "Git", category: "TOOLS", icon: <SiGit className="w-8 h-8 text-[#F05032]" /> },
    { name: "HTML5", category: "FRONTEND", icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" /> },
    { name: "CSS3", category: "FRONTEND", icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" /> },
  ];

  const categories = [
    { id: 'ALL', labelID: 'Semua Keahlian', labelEN: 'All Technologies' },
    { id: 'FRONTEND', labelID: 'Frontend Architecture', labelEN: 'Frontend' },
    { id: 'BACKEND', labelID: 'Backend & APIs', labelEN: 'Backend' },
    { id: 'DATABASE', labelID: 'Database Systems', labelEN: 'Databases' },
    { id: 'TOOLS', labelID: 'Tools & DevOps', labelEN: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-[#030712] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Keahlian & Teknologi' : 'Core Competencies'}</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Stack & Expertise</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            {lang === 'ID'
              ? 'Rangkaian teknologi dan perangkat yang saya manfaatkan untuk membangun sistem perangkat lunak yang aman, efisien, dan berskala tinggi.'
              : 'Production-tested technologies and frameworks utilized to construct secure, high-performance, and scalable software.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10'
                }`}
              >
                {lang === 'ID' ? cat.labelID : cat.labelEN}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="glass-card-interactive p-4 rounded-2xl flex flex-col items-center text-center justify-center group"
            >
              {/* Category Pill */}
              <div className="w-full flex justify-center items-center mb-2">
                <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                  {skill.category}
                </span>
              </div>

              {/* Icon Container with Subtle Glow */}
              <div className="my-2 p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 group-hover:scale-105 transition-all duration-300">
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="font-display font-semibold text-sm text-slate-200 group-hover:text-white transition-colors mt-1">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Highlights Glass Callout */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Layout className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-base text-white">Frontend Architecture</h4>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              {lang === 'ID' 
                ? 'Membangun antarmuka modern yang cepat, responsif di segala ukuran layar, dan berfokus pada pengalaman pengguna yang intuitif.'
                : 'Crafting responsive, performance-driven interfaces with intuitive ergonomics and seamless micro-interactions.'}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-base text-white">Backend & System Logic</h4>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              {lang === 'ID' 
                ? 'Arsitektur RESTful API yang aman dengan framework Laravel, validasi data berlapis, dan integrasi tanda tangan digital QR Code.'
                : 'Architecting secure RESTful APIs in Laravel with structured data validation and automated QR digital signatures.'}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-base text-white">Database Optimization</h4>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              {lang === 'ID' 
                ? 'Optimasi query PostgreSQL dan MySQL untuk penarikan data transaksi gudang, rekapitulasi jam kerja, dan pelaporan real-time.'
                : 'Optimizing PostgreSQL and MySQL query pipelines for warehouse logistics, attendance monitoring, and live analytics.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}