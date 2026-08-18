import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, FolderGit2, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = {
  ID: [
    {
      "id": 1,
      "category": "WEB",
      "title": "Tech Desa",
      "subtitle": "Marketplace Jasa Teknologi & Digitalisasi UMKM",
      "desc": "Platform marketplace penyedia jasa teknologi pribadi, seperti pembuatan website kustom (profil sekolah/perusahaan, landing page, e-commerce) dan aplikasi web interaktif, yang dirancang untuk mendigitalisasi UMKM lokal.",
      "tech": ["React.js", "Tailwind CSS", "Laravel", "MySQL"],
      "image": "/dokumentasi/techdesa.JPG",
      "githubLink": "#",
      "liveLink": "https://techdesa.my.id/",
      "badge": "Live Production"
    },
    {
      "id": 2,
      "category": "ENTERPRISE",
      "title": "Overtime Order System (SPL)",
      "subtitle": "Sistem Surat Perintah Lembur dengan QR Signature",
      "desc": "Sistem otomatisasi lembur terintegrasi yang dilengkapi dengan Tanda Tangan Digital berbasis QR Code. Dikembangkan menggunakan metodologi Agile dan framework Laravel untuk mengoptimalkan efisiensi administratif perusahaan.",
      "tech": ["Laravel", "PostgreSQL", "QR Code", "Agile"],
      "image": "/dokumentasi/spl.png",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Hak Cipta HKI"
    },
    {
      "id": 3,
      "category": "WEB",
      "title": "Medipluse",
      "subtitle": "Platform Manajemen Kesehatan & Pengingat Obat",
      "desc": "Proyek kolaboratif capstone untuk program MSIB Batch 7 di Rakamin Academy, dikembangkan sebagai Full Stack Developer. Aplikasi ini mendigitalisasi dan mengintegrasikan manajemen kesehatan pribadi dengan pengingat obat otomatis.",
      "tech": ["Laravel", "MySQL", "Bootstrap", "API Integration", "Python"],
      "image": "/dokumentasi/digi.png",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "MSIB Capstone"
    },
    {
      "id": 4,
      "category": "ENTERPRISE",
      "title": "SIMPG (Pura Engineering Management)",
      "subtitle": "Sistem Informasi Manajemen Logistik & Operasional",
      "desc": "Sistem informasi internal terintegrasi yang dirancang untuk mendigitalisasi, memantau, dan mengotomatisasi manajemen operasional, administrasi, dan pelaporan data dalam Divisi Engineering PT. Pura Barutama.",
      "tech": ["Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
      "image": "/dokumentasi/simpg.webp",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Enterprise MIS"
    },
    {
      "id": 5,
      "category": "WEB",
      "title": "Digishelf",
      "subtitle": "Sistem Manajemen Perpustakaan Terintegrasi",
      "desc": "Sistem manajemen perpustakaan modern yang dikembangkan untuk mengoptimalkan katalogisasi buku, melacak riwayat sirkulasi dan peminjaman, serta mengelola data anggota secara real-time.",
      "tech": ["Laravel", "Tailwind CSS", "MySQL"],
      "image": "/dokumentasi/perpus.png",
      "githubLink": "https://github.com/HendrikaRes/DigiShelf_",
      "liveLink": "#",
      "badge": "Open Source"
    },
    {
      "id": 6,
      "category": "ENTERPRISE",
      "title": "Employee E-Attendance",
      "subtitle": "Presensi Karyawan Otomatis Berbasis QR Code",
      "desc": "Sistem manajemen kehadiran karyawan otomatis yang terintegrasi dengan tanda tangan QR Code untuk meningkatkan efisiensi pencatatan, mengeliminasi penggunaan kertas manual, dan memperkuat keamanan pelacakan data.",
      "tech": ["Laravel", "MySQL", "Bootstrap"],
      "image": "/dokumentasi/abs.png",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Automated QR"
    },
    {
      "id": 7,
      "category": "AI_IOT",
      "title": "Maintenix - Smart Mobile Maintenance",
      "subtitle": "Aplikasi Pemeliharaan Mesin Cerdas IoT & ML",
      "desc": "Aplikasi pemeliharaan seluler cerdas yang dilengkapi dengan fitur klasifikasi kerusakan otomatis yang menganalisis suhu mesin, RPM, dan tegangan untuk memprediksi serta mengidentifikasi kerusakan secara real-time.",
      "tech": ["Flutter", "Python", "PostgreSQL"],
      "image": "/dokumentasi/mesin.png",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Smart Mobile IoT"
    },
    {
      "id": 8,
      "category": "AI_IOT",
      "title": "Plantix - Rice Leaf Disease Classifier",
      "subtitle": "Deteksi Penyakit Daun Padi Berbasis Deep Learning",
      "desc": "Aplikasi web klasifikasi penyakit tanaman padi berbasis kecerdasan buatan (AI) menggunakan algoritma deep learning. Pengguna cukup mengunggah foto daun padi untuk mendeteksi secara instan apakah padi tersebut sehat atau terkena penyakit (seperti Blas, Hawar Daun Bakteri, atau Tungro).",
      "tech": ["Python", "TensorFlow", "React.js", "FastAPI", "Tailwind CSS"],
      "image": "/dokumentasi/plantix.jpg",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Deep Learning AI"
    }
  ],
  EN: [
    {
      "id": 1,
      "category": "WEB",
      "title": "Tech Desa",
      "subtitle": "MSME Digitalization & Tech Services Marketplace",
      "desc": "A personal technology services marketplace platform offering custom website development (school/company profiles, landing pages, e-commerce) and interactive web applications designed to digitize local MSMEs.",
      "tech": ["React.js", "Tailwind CSS", "Laravel", "MySQL"],
      "image": "/dokumentasi/techdesa.JPG",
      "githubLink": "#",
      "liveLink": "https://techdesa.my.id/",
      "badge": "Live Production"
    },
    {
      "id": 2,
      "category": "ENTERPRISE",
      "title": "Overtime Order System (SPL)",
      "subtitle": "Overtime Automation with QR Digital Signatures",
      "desc": "An integrated overtime automation system featuring QR Code-based Digital Signatures. Developed using the Agile methodology and Laravel framework to optimize corporate administrative efficiency.",
      "tech": ["Laravel", "PostgreSQL", "QR Code", "Agile"],
      "image": "/dokumentasi/spl.png",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "IP Certified"
    },
    {
      "id": 3,
      "category": "WEB",
      "title": "Medipluse",
      "subtitle": "Healthcare Management & Medication Reminder Platform",
      "desc": "A collaborative capstone project for the MSIB Batch 7 program at Rakamin Academy, developed as a Full Stack Developer. This application digitizes and integrates personal healthcare management with automated medication reminders.",
      "tech": ["Laravel", "MySQL", "Bootstrap", "API Integration", "Python"],
      "image": "/dokumentasi/digi.png",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "MSIB Capstone"
    },
    {
      "id": 4,
      "category": "ENTERPRISE",
      "title": "SIMPG (Pura Engineering Management)",
      "subtitle": "Logistics Management & Operational Information System",
      "desc": "An integrated internal information system designed to digitize, monitor, and automate operational management, administration, and data reporting within the Engineering Division of PT. Pura Barutama.",
      "tech": ["Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
      "image": "/dokumentasi/simpg.webp",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Enterprise MIS"
    },
    {
      "id": 5,
      "category": "WEB",
      "title": "Digishelf",
      "subtitle": "Modern Library Information & Cataloging System",
      "desc": "A modern library management system developed to optimize book cataloging, track circulation and borrowing history, and manage member data in real-time.",
      "tech": ["Laravel", "Tailwind CSS", "MySQL"],
      "image": "/dokumentasi/perpus.png",
      "githubLink": "https://github.com/HendrikaRes/DigiShelf_",
      "liveLink": "#",
      "badge": "Open Source"
    },
    {
      "id": 6,
      "category": "ENTERPRISE",
      "title": "Employee E-Attendance",
      "subtitle": "Automated Workforce Attendance via QR Signatures",
      "desc": "An automated employee attendance management system integrated with QR Code signatures to improve checking efficiency, eliminate manual paperwork, and enhance data tracking security.",
      "tech": ["Laravel", "MySQL", "Bootstrap"],
      "image": "/dokumentasi/abs.png",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Automated QR"
    },
    {
      "id": 7,
      "category": "AI_IOT",
      "title": "Maintenix - Smart Mobile Maintenance",
      "subtitle": "Predictive Industrial Machine Diagnostic App",
      "desc": "A smart mobile maintenance application equipped with automated damage classification features that analyze machine temperature, RPM, and voltage to predict and identify faults in real-time.",
      "tech": ["Flutter", "Python", "PostgreSQL"],
      "image": "/dokumentasi/mesin.png",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Smart Mobile IoT"
    },
    {
      "id": 8,
      "category": "AI_IOT",
      "title": "Plantix - Rice Leaf Disease Classifier",
      "subtitle": "Deep Learning Agricultural Diagnostic Web App",
      "desc": "An AI-powered rice plant disease classification web application utilizing deep learning algorithms. Users upload photos of rice leaves to instantly detect whether the plant is healthy or infected with diseases (e.g., Blast, Bacterial Leaf Blight, or Tungro).",
      "tech": ["Python", "TensorFlow", "React.js", "FastAPI", "Tailwind CSS"],
      "image": "/dokumentasi/plantix.jpg",
      "githubLink": "#",
      "liveLink": "#",
      "badge": "Deep Learning AI"
    }
  ]
};

export default function Projects({ lang }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeId, setActiveId] = useState(null);

  const toggleDropdown = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const categories = [
    { id: 'ALL', labelID: 'Semua Proyek', labelEN: 'All Projects' },
    { id: 'ENTERPRISE', labelID: 'Sistem Enterprise', labelEN: 'Enterprise' },
    { id: 'WEB', labelID: 'Aplikasi Web & SaaS', labelEN: 'Web Apps' },
    { id: 'AI_IOT', labelID: 'AI & Smart Mobile', labelEN: 'AI & IoT' },
  ];

  const projects = projectsData[lang];
  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-[#030712] relative overflow-hidden">
      
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'ID' ? 'Koleksi Portofolio' : 'Featured Work'}</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects & Systems</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              {lang === 'ID'
                ? 'Kumpulan sistem yang telah saya kembangkan, mulai dari otomasi administratif internal kantor, AI diagnostics, hingga manajemen rantai pasok manufaktur.'
                : 'A curated showcase of engineering applications, ranging from enterprise automation to AI-powered diagnostics and logistics systems.'}
            </p>
          </div>

          <a
            href="https://github.com/HendrikaRes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all self-start md:self-auto"
          >
            <FaGithub className="w-4 h-4" />
            <span>{lang === 'ID' ? 'Lihat Semua di GitHub' : 'View Full GitHub Profile'}</span>
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
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

        {/* Projects Glass Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Project Visual Thumbnail */}
              <div className="relative overflow-hidden aspect-[16/10] bg-slate-950 border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-medium text-cyan-400 px-2.5 py-1 rounded-full">
                  {project.badge}
                </div>

                {/* Hover Links Overlay */}
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-900/90 hover:bg-blue-600 text-white border border-white/10 rounded-full transition-all duration-300 shadow-lg"
                      title="GitHub Repository"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30"
                      title="Live Web Application"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium text-slate-400 bg-white/[0.04] border border-white/5 px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors leading-snug mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light mb-3">
                    {project.subtitle}
                  </p>

                  {/* Direct Action Buttons (Always Visible on Mobile & Desktop) */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all active:scale-95"
                      >
                        <span>{lang === 'ID' ? 'Lihat Demo' : 'Live Demo'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-white/5 transition-all active:scale-95"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Expandable Overview Accordion */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <button
                    onClick={() => toggleDropdown(project.id)}
                    className="flex items-center justify-between w-full text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    <span>
                      {activeId === project.id
                        ? (lang === 'ID' ? 'Tutup Detail' : 'Hide Overview')
                        : (lang === 'ID' ? 'Lihat Detail Proyek' : 'View System Details')}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeId === project.id ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 10 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-300 text-xs leading-relaxed text-justify bg-slate-900/60 p-3 rounded-xl border border-white/5 font-light">
                          {project.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}