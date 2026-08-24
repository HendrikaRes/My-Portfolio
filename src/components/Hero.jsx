import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, FileText, Building2, CheckCircle2, Award, Calendar, Layers, ExternalLink, MapPin } from 'lucide-react';
import Interactive3DOrb from './Interactive3DOrb';
import LanyardIDCard from './LanyardIDCard';
import CVModal from './CVModal';

const experiencesData = {
  ID: [
    {
      company: "PT Pura Barutama (Divisi Engineering)",
      role: "Junior Web Developer (Magang)",
      period: "Maret 2025 – September 2025",
      location: "Kudus, Jawa Tengah",
      badge: "Manufaktur & Enterprise",
      points: [
        "Pengembangan Fitur SIMPG: Menulis logika kueri dan alur Debit Barang Jadi, Input Manual Part & Komponen, serta modul Cetak Ulang LPB.",
        "Web Report Platform: Membangun modul analitik Evapro Material By Order, Evapro Progress, dan visualisasi Jam Kerja Operator.",
        "Dashboard Monitoring SIP: Merancang sistem monitoring logistik & status proses SIP secara terpusat.",
        "Website SPL (Proyek Mandiri): Membangun Sistem Surat Perintah Lembur berbasis Laravel, PostgreSQL & QR Code (Hak Cipta HKI 2026).",
        "Pengelolaan Database: Mengoptimalkan integrasi dan struktur data pada database PostgreSQL dan Oracle."
      ],
      skills: ["Laravel", "PostgreSQL", "Oracle", "JavaScript", "Bootstrap", "AJAX", "QR Code"]
    },
    {
      company: "Rakamin Academy (MSIB Kampus Merdeka Batch 7)",
      role: "Full Stack Developer with Data Science",
      period: "Agustus 2024 – Desember 2024",
      location: "Jakarta (Remote)",
      badge: "Studi Independen Bersertifikat",
      points: [
        "Capstone Project (Medipluse): Mengembangkan platform digital manajemen kesehatan pribadi dengan integrasi pengingat obat otomatis.",
        "Full Stack Web Architecture: Membangun RESTful API menggunakan Laravel & MySQL serta antarmuka frontend interaktif.",
        "Data Science Integration: Mempelajari manipulasi data Python, analisis data terstruktur, dan integrasi pipeline data ke aplikasi web."
      ],
      skills: ["Full Stack", "Laravel", "Python", "Data Science", "MySQL", "RESTful API", "Bootstrap"]
    },
    {
      company: "Multiteknik Pati",
      role: "Mechanical Electronics (PKL)",
      period: "Januari 2020 – Maret 2020",
      location: "Pati, Jawa Tengah",
      badge: "Praktek Kerja Lapangan",
      points: [
        "Memperoleh Sertifikat Praktek Kerja Lapangan dengan nilai rata-rata 80.",
        "Melakukan perawatan dan perbaikan perangkat elektronik rumah tangga dan industri.",
        "Melakukan rekapitulasi pelaporan pencatatan pendapatan harian bengkel."
      ],
      skills: ["Hardware Maintenance", "Troubleshooting", "Daily Reporting"]
    }
  ],
  EN: [
    {
      company: "PT Pura Barutama (Engineering Division)",
      role: "Junior Web Developer (Internship)",
      period: "March 2025 – September 2025",
      location: "Kudus, Central Java",
      badge: "Manufacturing & Enterprise",
      points: [
        "SIMPG Feature Development: Engineered backend query logic for Finished Goods Debit, Manual Parts Debit, and LPB Reprinting.",
        "Web Report Platform: Built data analytics for Evapro Material By Order, Evapro Progress, and Operator Working Hours visualizations.",
        "SIP Monitoring Dashboard: Designed centralized real-time dashboards for tracking logistics workflows and SIP status.",
        "Web SPL (Independent): Architected the Overtime Order System with QR Code signatures via Laravel & PostgreSQL (IP Rights 2026).",
        "Database Optimization: Managed query efficiency and relational data structures in PostgreSQL and Oracle."
      ],
      skills: ["Laravel", "PostgreSQL", "Oracle", "JavaScript", "Bootstrap", "AJAX", "QR Code"]
    },
    {
      company: "Rakamin Academy (MSIB Kampus Merdeka Cohort 7)",
      role: "Full Stack Developer with Data Science",
      period: "August 2024 – December 2024",
      location: "Jakarta (Remote)",
      badge: "Certified Independent Study",
      points: [
        "Capstone Project (Medipluse): Engineered a personal healthcare management platform with automated medication schedule reminders.",
        "Full Stack Web Architecture: Developed RESTful APIs using Laravel & MySQL combined with dynamic interactive user interfaces.",
        "Data Science Integration: Explored Python data manipulation, exploratory data analysis, and integrating models with web platforms."
      ],
      skills: ["Full Stack", "Laravel", "Python", "Data Science", "MySQL", "RESTful API", "Bootstrap"]
    },
    {
      company: "Multiteknik Pati",
      role: "Mechanical Electronics (Vocational Internship)",
      period: "January 2020 – March 2020",
      location: "Pati, Central Java",
      badge: "Vocational Internship",
      points: [
        "Awarded Vocational Internship Certificate with an average grade of 80.",
        "Conducted maintenance and diagnostics for household and industrial electronic equipment.",
        "Managed daily income documentation and operations reporting."
      ],
      skills: ["Hardware Maintenance", "Troubleshooting", "Daily Reporting"]
    }
  ]
};

export default function Hero({ lang }) {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const heroRef = useRef(null);

  const internshipImages = [
    "/dokumentasi/pres.jpeg",
    "/dokumentasi/team.jpeg",
    "/dokumentasi/semi.jpg",
    "/dokumentasi/kerja.jpeg",
    "/dokumentasi/pp.jpeg",
  ];

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty('--mouse-x', `${x}px`);
    heroRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const experiences = experiencesData[lang];

  return (
    <section 
      id="home" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 bg-[#030712] overflow-hidden"
    >
      {/* React Bits: Spotlight Glow Background (Hardware accelerated via CSS variables) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(59, 130, 246, 0.12), transparent 80%),
            radial-gradient(800px circle at 80% 20%, rgba(6, 182, 212, 0.08), transparent 70%),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 70%, transparent 100%)',
          maskImage: 'radial-gradient(circle at 50% 40%, black 70%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* === HERO INTRO GRID === */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Executive Bio & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{lang === 'ID' ? 'Terbuka untuk Peluang Kerja / Proyek' : 'Available for Full-time & Projects'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] mb-4">
              {lang === 'ID' ? 'Halo, Saya ' : "Hi, I'm "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Hendrika Restu
              </span>
              <br />
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 block mt-2 h-[48px] sm:h-[54px]">
                <TypeAnimation
                  sequence={[
                    'Fullstack Developer',
                    2200,
                    'Laravel & React Specialist',
                    2200,
                    'Information Systems Analyst',
                    2200,
                    'Database & API Architect',
                    2200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light text-justify sm:text-left">
              {lang === 'ID' ? (
                <>
                  Lulusan <strong className="text-slate-200 font-semibold">S1 Sistem Informasi (IPK 3.94)</strong> yang adaptif dengan spesialisasi arsitektur Backend <strong className="text-slate-200 font-semibold">Laravel</strong> yang kokoh serta antarmuka modern interaktif berbasis <strong className="text-slate-200 font-semibold">React.js</strong>. Terbukti berpengalaman mengoptimalkan sistem internal divisi Engineering manufaktur dan alur logistik enterprise.
                </>
              ) : (
                <>
                  An adaptable <strong className="text-slate-200 font-semibold">Information Systems Graduate (GPA 3.94)</strong> specializing in robust <strong className="text-slate-200 font-semibold">Laravel</strong> backend architecture and dynamic <strong className="text-slate-200 font-semibold">React.js</strong> user interfaces. Proven track record optimizing manufacturing engineering systems and enterprise logistics pipelines.
                </>
              )}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(37,99,235,0.55)] active:scale-98"
              >
                <span>{lang === 'ID' ? 'Lihat Portofolio Proyek' : 'Explore Portfolio'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsCVOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-sm active:scale-98 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>{lang === 'ID' ? 'Curriculum Vitae' : 'View Executive CV'}</span>
              </button>
            </div>

            {/* Quick Metrics Bento Pills */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg mt-10 pt-8 border-t border-slate-800/80">
              <div className="glass-card-interactive p-3 rounded-2xl">
                <div className="font-display font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  3.94
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  {lang === 'ID' ? 'IPK UMK (Cum Laude)' : 'GPA / 4.00 (UMK)'}
                </div>
              </div>

              <div className="glass-card-interactive p-3 rounded-2xl">
                <div className="font-display font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  8+
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  {lang === 'ID' ? 'Proyek & Sistem Web' : 'Completed Systems'}
                </div>
              </div>

              <div className="glass-card-interactive p-3 rounded-2xl">
                <div className="font-display font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  HKI
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  {lang === 'ID' ? 'Hak Cipta Web SPL' : 'IP Rights Certified'}
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: 3D Holographic Constellation & Profile Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[460px]"
          >
            <div className="relative w-full max-w-[420px] flex items-center justify-center">
              
              {/* Radial backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-indigo-600/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

              {/* Three.js Interactive Constellation Canvas in Background */}
              <Interactive3DOrb className="absolute inset-0 w-full h-full -z-5 pointer-events-none opacity-60" />

              {/* Physical Lanyard ID Card (Drops down & swings from top) */}
              <LanyardIDCard lang={lang} />

            </div>
          </motion.div>

        </div>

        {/* === SECTION: PROFESSIONAL EXPERIENCE & MSIB TRAJECTORY === */}
        <div id="experience" className="mt-32 pt-16 border-t border-slate-800/80">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === 'ID' ? 'Pengalaman Profesional' : 'Professional Experience'}</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Career & Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Trajectory</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              {lang === 'ID'
                ? 'Ringkasan pengalaman kerja industri dan program studi independen bersertifikat yang pernah saya jalani.'
                : 'Summary of my industry internships and certified independent study programs.'}
            </p>
          </div>

          {/* Structured Experience List Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-white/5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-blue-400">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Concise Bullet Points List */}
                <div className="pt-5">
                  <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {exp.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/5">
                    {exp.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="text-[10px] font-medium text-slate-400 bg-white/[0.03] border border-white/5 px-2.5 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Photo Carousel */}
          <div className="mt-14 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                {lang === 'ID' ? 'Dokumentasi Aktivitas Lapangan' : 'Field Activity Documentation'}
              </span>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl bg-slate-950/60 border border-white/5 py-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none"></div>

              <motion.div
                className="flex gap-4 sm:gap-6 w-max px-4 will-change-transform"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              >
                {[...internshipImages, ...internshipImages].map((img, index) => (
                  <div
                    key={index}
                    className="w-[260px] h-[160px] sm:w-[320px] sm:h-[200px] rounded-xl overflow-hidden flex-shrink-0 border border-white/10 relative group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Dokumentasi Magang ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors"></div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>

      </div>

      {/* CV Modal Component */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

    </section>
  );
}