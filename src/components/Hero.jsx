import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CVModal from './CVModal';

const timelineData = {
  ID: [
    {
      month: "Maret 2025",
      phase: "Fase 1: Onboarding & SIMPG",
      title: "Adaptasi Database & Inisiasi SIMPG",
      desc: "Melakukan adaptasi lingkungan kerja dan mempelajari struktur database internal perusahaan. Bergabung dengan tim EDP untuk pengerjaan <strong>SIMPG</strong> (berjalan setengah jalan) untuk alur Debit Barang Jadi, Input Manual Debit Barang Jadi Part & Komponen, serta Cetak Ulang LPB."
    },
    {
      month: "April 2025",
      phase: "Fase 2: SIMPG Development",
      title: "Pengembangan Fitur Input Logistik SIMPG",
      desc: "Melanjutkan pengembangan backend sistem <strong>SIMPG</strong> dengan memfokuskan pengerjaan pada penulisan logika query database dan fungsi input manual Debit Barang Jadi Part dan Komponen secara terstruktur."
    },
    {
      month: "Mei 2025",
      phase: "Fase 3: Refinement SIMPG",
      title: "Modul Cetak LPB & Pengujian Sistem",
      desc: "Merampungkan pengerjaan modul Cetak Ulang LPB (Laporan Penerimaan Barang) pada SIMPG, melakukan integrasi data logistik internal divisi Engineering, serta menguji keandalan fungsionalitas sistem."
    },
    {
      month: "Juni 2025",
      phase: "Fase 4: Web Report - Evapro",
      title: "Inisiasi Web Report & Modul Evapro",
      desc: "Bergabung dengan tim proyek EDP untuk mulai mengembangkan platform <strong>Web Report</strong>. Melakukan pemrosesan data untuk menampilkan modul <em>Evapro Material By Order</em>, <em>Evapro Pengerjaan</em>, dan <em>Evapro Progress</em>."
    },
    {
      month: "Juli 2025",
      phase: "Fase 5: Web Report - SIP & Operator",
      title: "Dashboard Monitoring SIP & Jam Kerja",
      desc: "Melanjutkan pengembangan Web Report dengan membuat visualisasi data untuk modul <em>Monitoring SIP</em>, <em>Monitoring SIP Name</em>, <em>Monitoring SIP SUM</em>, serta modul rekapitulasi data <em>Jam Kerja By Operator</em>."
    },
    {
      month: "Agustus 2025",
      phase: "Fase 6: Proyek Mandiri",
      title: "Pembangunan Web SPL & Integrasi Payroll",
      desc: "Membangun proyek mandiri berupa website <strong>Sistem Surat Perintah Lembur (SPL)</strong> menggunakan database <strong>PostgreSQL</strong>. Mengintegrasikannya dengan database <strong>Payroll</strong> untuk otomatisasi penarikan nama karyawan secara dinamis."
    },
    {
      month: "September 2025",
      phase: "Fase 7: Handover Proyek",
      title: "Pembangunan Monitoring SIP & Serah Terima",
      desc: "Mengembangkan proyek <strong>Website Monitoring SIP</strong> secara menyeluruh, melakukan pengujian fungsionalitas sistem (testing), serta menyelesaikan serah terima (handover) dokumentasi teknis sistem kepada perusahaan."
    }
  ],
  EN: [
    {
      month: "March 2025",
      phase: "Phase 1: Onboarding & SIMPG",
      title: "Database Adaptation & SIMPG Initiation",
      desc: "Adapted to the workplace and studied the company's internal database structure. Joined the EDP team to continue developing <strong>SIMPG</strong> (already half-way), with an initial focus on the Finished Goods Debit, Manual Parts & Components Debit Entry, and LPB Reprinting features."
    },
    {
      month: "April 2025",
      phase: "Phase 2: SIMPG Development",
      title: "SIMPG Logistics Input Development",
      desc: "Continued developing the <strong>SIMPG</strong> backend system, focusing on database query logic and manual input functions for Finished Goods Parts & Components in a structured manner."
    },
    {
      month: "May 2025",
      phase: "Phase 3: SIMPG Refinement",
      title: "LPB Module & System Testing",
      desc: "Finalized the LPB (Goods Receipt Report) Reprinting module in SIMPG, integrated internal logistics data for the Engineering division, and verified system reliability."
    },
    {
      month: "June 2025",
      phase: "Phase 4: Web Report - Evapro",
      title: "Web Report Initiation & Evapro Modules",
      desc: "Joined the EDP team to develop the <strong>Web Report</strong> platform. Processed logistics data to implement the <em>Evapro Material By Order</em>, <em>Evapro Pengerjaan</em>, and <em>Evapro Progress</em> modules."
    },
    {
      month: "July 2025",
      phase: "Phase 5: Web Report - SIP & Operator",
      title: "SIP Monitoring Dashboard & Working Hours",
      desc: "Continued Web Report development, building data visualizations for the <em>Monitoring SIP</em>, <em>Monitoring SIP Name</em>, <em>Monitoring SIP SUM</em>, and <em>Jam Kerja By Operator</em> modules."
    },
    {
      month: "August 2025",
      phase: "Phase 6: Independent Project",
      title: "Web SPL Development & Payroll Integration",
      desc: "Independently designed and built the web-based Overtime Order System (SPL) using <strong>PostgreSQL</strong>. Integrated the system with the **Payroll** database for dynamic employee name verification."
    },
    {
      month: "September 2025",
      phase: "Phase 7: Project Handover",
      title: "Monitoring SIP Finalization & Handover",
      desc: "Developed the Website Monitoring SIP project, executed complete system testing, and finalized technical handover and documentation to the company."
    }
  ]
};

export default function Hero({ lang }) {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const internshipImages = [
    "/dokumentasi/pres.jpeg",
    "/dokumentasi/team.jpeg",
    "/dokumentasi/semi.jpg",
    "/dokumentasi/kerja.jpeg",
    "/dokumentasi/pp.jpeg",
  ];

  return (
    <section id="home" className="pt-36 pb-12 px-6 bg-slate-950 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Kolom Teks */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left order-2 md:order-1"
        >
          {/* Badge Kecil */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 animate-pulse hover:bg-blue-500/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            {lang === 'ID' ? 'Terbuka untuk Bekerja / Magang' : 'Open to Work / Internship'}
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
            I am <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Hendrik</span>
            <br />
            <span className="text-4xl md:text-5xl text-slate-300 font-bold block mt-2 h-[60px]">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
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
            className="text-slate-400 max-w-2xl mx-auto md:mx-0 mb-10 text-lg leading-relaxed text-justify sm:text-left"
          >
            {lang === 'ID' ? (
              <>
                Lulusan Sistem Informasi yang adaptif dengan antusiasme tinggi untuk mengeksplorasi teknologi baru. Berpengalaman dalam mengoptimalkan sistem internal yang efisien, mengkhususkan diri pada arsitektur Backend yang kokoh menggunakan <span className="text-slate-200 font-medium">Laravel</span> dan merancang antarmuka Frontend yang modern serta interaktif berbasis <span className="text-slate-200 font-medium">React.js</span>.
              </>
            ) : (
              <>
                An adaptable Information Systems graduate with a high enthusiasm for exploring new technologies. Experienced in optimizing efficient internal systems, specializing in robust Backend architecture using <span className="text-slate-200 font-medium">Laravel</span> and crafting modern, interactive Frontend interfaces built on <span className="text-slate-200 font-medium">React.js</span>.
              </>
            )}
          </motion.p>

          {/* Tombol Aksi */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95 flex items-center gap-2 group">
              {lang === 'ID' ? 'Lihat Karya Saya' : 'Explore My Work'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <button 
              onClick={() => setIsCVOpen(true)}
              className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 hover:border-slate-700 px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(15,23,42,0.3)] active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {lang === 'ID' ? 'Lihat CV' : 'View CV'}
            </button>
          </motion.div>
        </motion.div>

        {/* Kolom Gambar Profil */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 order-1 md:order-2 flex justify-center md:justify-end"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-500">
              <img 
                src="img/pp12.webp" 
                alt="Hendrik - Fullstack Developer" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- TIMELINE MAGANG --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-36 w-full relative"
      >
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="px-4 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3 uppercase tracking-wider">
            {lang === 'ID' ? 'Laporan Aktivitas Magang' : 'Internship Activity Report'}
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            PT. Pura Barutama
          </h3>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
            {lang === 'ID' 
              ? 'Junior Web Developer — Divisi Engineering (Maret 2025 – September 2025)' 
              : 'Junior Web Developer — Engineering Division (March 2025 – September 2025)'}
          </p>
        </div>

        {/* Timeline Bulanan */}
        <div className="max-w-3xl mx-auto mb-20 px-4 relative border-l-2 border-slate-800/80 ml-6 md:mx-auto">
          {timelineData[lang].map((item, index) => (
            <div key={index} className={`relative pl-8 ${index < timelineData[lang].length - 1 ? 'pb-10' : ''} group`}>
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              <div className="bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/20 rounded-2xl p-5 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20 uppercase tracking-wider">
                    {item.month}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{item.phase}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Slider */}
        <div className="relative w-full overflow-hidden flex">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>

          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 25 
            }}
          >
            {[...internshipImages, ...internshipImages].map((img, index) => (
              <div 
                key={index} 
                className="w-[260px] h-[160px] md:w-[350px] md:h-[220px] rounded-2xl overflow-hidden flex-shrink-0 border border-slate-800/80 group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Internship Documentation ${index + 1}`} 
                  className="w-full h-full object-cover transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Modal CV */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </section>
  );
}