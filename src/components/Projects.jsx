import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  // State untuk melacak project mana yang deskripsinya sedang dibuka
  const [activeId, setActiveId] = useState(null);

  const toggleDropdown = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const projects = [
 {
    "id": 1,
    "title": "Overtime Order System (SPL)",
    "desc": "An integrated overtime automation system featuring QR Code-based Digital Signatures. Developed using the Agile methodology and Laravel framework to optimize corporate administrative efficiency.",
    "tech": ["Laravel", "PostgreSQL", "QR Code"],
    "image": "/dokumentasi/spl.png",
    "githubLink": "#",
    "liveLink": "#"
  },
  {
    "id": 2,
    "title": "Medipluse",
    "desc": "A collaborative capstone project for the MSIB Batch 7 program at Rakamin Academy, developed as a Full Stack Developer. This application digitizes and integrates personal healthcare management with automated medication reminders.",
    "tech": ["Laravel", "MySQL", "Bootstrap", "API Integration", "Python"],
    "image": "/dokumentasi/digi.png",
    "githubLink": "#",
    "liveLink": "#"
  },
  {
    "id": 3,
    "title": "SIMPG (Pura Engineering Management Information System)",
    "desc": "An integrated internal information system designed to digitize, monitor, and automate operational management, administration, and data reporting within the Engineering Division of PT. Pura Barutama.",
    "tech": ["Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
    "image": "/dokumentasi/simpg.png",
    "githubLink": "#",
    "liveLink": "#"
  },
  {
    "id": 4,
    "title": "Digishelf",
    "desc": "A modern library management system developed to optimize book cataloging, track circulation and borrowing history, and manage member data in real-time.",
    "tech": ["Laravel", "Tailwind", "MySQL"],
    "image": "/dokumentasi/perpus.png",
    "githubLink": "https://github.com/HendrikaRes/DigiShelf_",
    "liveLink": "#"
  },
  {
    "id": 5,
    "title": "Employee E-Attendance (QR Code)",
    "desc": "An automated employee attendance management system integrated with QR Code signatures to improve checking efficiency, eliminate manual paperwork, and enhance data tracking security.",
    "tech": ["Laravel", "MySQL", "Bootstrap"],
    "image": "/dokumentasi/abs.png",
    "githubLink": "#",
    "liveLink": "#"
  },
  {
    "id": 6,
    "title": "Maintenix - Smart Mobile Maintenance Application",
    "desc": "A smart mobile maintenance application equipped with automated damage classification features that analyze machine temperature, RPM, and voltage to predict and identify faults in real-time.",
    "tech": ["Flutter", "Python", "PostgreSQL"],
    "image": "/dokumentasi/mesin.png",
    "githubLink": "#",
    "liveLink": "#"
  }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Ornamen Background (Opsional, agar tidak terlalu polos) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
              Kumpulan sistem yang telah saya kerjakan, dari otomatisasi kantor hingga integrasi dan manajemen data gudang.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://github.com/username-kamu" 
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800/50 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700 hover:border-slate-500 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
            Lihat GitHub
          </motion.a>
        </div>

        {/* Grid Card Project */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
              key={project.id} 
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-colors duration-500 flex flex-col shadow-2xl group"
            >
              {/* Gambar Project */}
              <div className="relative overflow-hidden aspect-[4/3] border-b border-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Hitam Transparan saat Hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.githubLink} className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg" title="Lihat Source Code">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
                  </a>
                </div>
              </div>

              {/* Konten Card */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{project.title}</h3>

                <div className="mt-auto">
                  {/* Dropdown Toggle */}
                  <button 
                    onClick={() => toggleDropdown(project.id)}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-400 transition-colors w-full focus:outline-none"
                  >
                    {activeId === project.id ? 'Sembunyikan Detail' : 'Baca Selengkapnya'}
                    <motion.svg 
                      animate={{ rotate: activeId === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  {/* Konten Deskripsi dengan Animasi Halus Framer Motion */}
                  <AnimatePresence>
                    {activeId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-blue-500/50 pl-4 py-1">
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