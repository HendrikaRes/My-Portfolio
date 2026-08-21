import { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, X, Mail, MapPin, Globe, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const cvData = {
  ID: {
    title: "Hendrika Restu Prayoga",
    subtitle: "Lulusan Sistem Informasi & Fullstack Developer",
    location: "Pati, Jawa Tengah",
    email: "hendrikarestu2003@gmail.com",
    website: "https://hendrika-portfolio.vercel.app/",
    summary: "Lulusan Sistem Informasi dengan keahlian komprehensif di bidang pengembangan web dan tata kelola administrasi. Terampil dalam analisis sistem, pengelolaan database, serta pengolahan laporan menggunakan Microsoft Excel. Memiliki minat besar pada bagaimana teknologi dapat menyederhanakan proses kerja. Fokus saya tidak hanya pada pengembangan IT, melainkan juga pada bidang administrasi dan manajemen operasional. Berbekal kemampuan adaptasi yang cepat dan kemauan belajar yang tinggi.",
    experienceTitle: "Pengalaman Kerja / Magang",
    educationTitle: "Riwayat Pendidikan",
    orgTitle: "Organisasi & Aktivitas",
    certTitle: "Sertifikasi & Lisensi",
    skillsTitle: "Kemampuan & Bahasa",
    experiences: [
      {
        role: "Junior Web Developer (Magang)",
        company: "PT Pura Barutama Engineering – Kudus, Jawa Tengah",
        date: "Maret 2025 – September 2025",
        bullets: [
          "Mengembangkan modul sistem <strong>SIMPG</strong>: Debit Barang Jadi, Input Manual Debit Barang Jadi Part & Komponen, dan Cetak Ulang LPB.",
          "Membangun modul analitik data <strong>Web Report</strong> (Evapro Material, Progress) serta visualisasi Jam Kerja Operator.",
          "Merancang <strong>Website Monitoring SIP</strong> dan integrasi data logistik real-time.",
          "Membangun <strong>Sistem Surat Perintah Lembur (SPL)</strong> berbasis Laravel, PostgreSQL & QR Code (Hak Cipta HKI).",
          "Mengelola dan mengoptimalkan relasi database enterprise PostgreSQL dan Oracle."
        ]
      },
      {
        role: "Full Stack Developer with Data Science (MSIB Kampus Merdeka Batch 7)",
        company: "Rakamin Academy – Jakarta (Remote)",
        date: "Agustus 2024 – Desember 2024",
        bullets: [
          "Mengembangkan proyek capstone <strong>Medipluse</strong> (aplikasi web manajemen kesehatan pribadi & pengingat jadwal obat otomatis).",
          "Merancang arsitektur backend RESTful API menggunakan Laravel & MySQL serta antarmuka web interaktif.",
          "Mempelajari dasar analisis data, manipulasi data Python, dan integrasi pipeline data ke dalam aplikasi web."
        ]
      },
      {
        role: "Mechanical Electronics (PKL)",
        company: "Multiteknik Pati – Pati, Jawa Tengah",
        date: "Januari 2020 – Maret 2020",
        bullets: [
          "Memperoleh Sertifikat Praktek Kerja Lapangan dengan nilai rata-rata 80.",
          "Melakukan perawatan dan perbaikan perangkat elektronik rumah tangga dan komersial.",
          "Mencatat dan melaporkan rekapitulasi pendapatan harian operasional."
        ]
      }
    ],
    education: [
      {
        degree: "S1 Sistem Informasi",
        school: "Universitas Muria Kudus – Kudus, Jawa Tengah",
        date: "September 2022 – Februari 2026",
        bullets: [
          "Lulus 3,5 tahun melalui 7 semester dengan perolehan <strong>IPK 3,94</strong>.",
          "Lolos dalam ujian Sertifikasi Microsoft Office Specialist.",
          "Menjadi analis sistem perancangan dan front end pembuatan Website tugas manajemen proyek.",
          "Membuat perancangan sistem pada tugas analisis dan perancangan sistem Informasi.",
          "Membuat project akhir Website Pengingat Obat sebagai Quality Assurance.",
          "Menjadi narasumber Sharing MBKM Industri.",
          "Jadi pengajar web untuk mahasiswa calon magang di Ezpages."
        ]
      },
      {
        degree: "Teknik Elektronika",
        school: "SMK Negeri 2 Pati – Pati, Jawa Tengah",
        date: "September 2018 – Februari 2021",
        bullets: [
          "Memperoleh Sertifikat Kompetensi dari Badan Nasional Sertifikasi Profesi (BNSP).",
          "Membuat Led Matrix dengan Arduino.",
          "Merancang pembuatan rangkaian Amplifier."
        ]
      }
    ],
    organizations: [
      { text: "Berhasil Mendapatkan Hak Kekayaan Intelektual (HKI) Program Komputer Website SPL", date: "2026" },
      { text: "Magang Di PT. Pura Barutama Divisi Engineering - Pura Barutama", date: "2025" },
      { text: "Menyelesaikan Program Magang Studi Independent Bersertifikat (MSIB) - Kampus Merdeka", date: "2024" },
      { text: "Hadir Acara Dicoding Web Series – Muria Computer Club", date: "2022" },
      { text: "Mengikuti Mentoring Pendidikan Agama Islam – Universitas Muria Kudus", date: "2022" },
      { text: "Mengikuti Latihan Keterampilan Manajemen Mahasiswa – Universitas Muria Kudus", date: "2022" }
    ],
    certifications: [
      { text: "Pemilik Hak Kekayaan Intelektual (HKI) Program Komputer Website SPL", date: "2026" },
      { text: "Sertifikat Keterampilan Wajib Komputer, Bahasa Inggris dan Wirausaha", date: "2023 - 2025" },
      { text: "Studi Independen Fullstack Developer Bersertifikat Angkatan 7 – Client", date: "2024" },
      { text: "Microsoft Office Specialist – MySkill", date: "2024" },
      { text: "Badan Nasional Sertifikasi Profesi – MySkill", date: "2021" }
    ],
    skills: {
      soft: "Pemecahan Masalah (Problem Solving), Adaptabilitas, Berpikir Analitis",
      hard: "Microsoft Office, Microsoft Excel, Microsoft PowerPoint, Canva, PostgreSQL, Laravel",
      indonesian: "Fasih",
      english: "Cukup",
      langLabels: {
        soft: "Soft-skill",
        hard: "Hard-skill",
        indonesian: "Bahasa Indonesia",
        english: "Bahasa Inggris"
      }
    }
  },
  EN: {
    title: "Hendrika Restu Prayoga",
    subtitle: "Information Systems Graduate & Fullstack Developer",
    location: "Pati, Central Java, Indonesia",
    email: "hendrikarestu2003@gmail.com",
    website: "https://hendrika-portfolio.vercel.app/",
    summary: "Information Systems graduate with comprehensive expertise in web development and administrative governance. Skilled in systems analysis, database management, and data reporting using Microsoft Excel. Strongly interested in how technology can streamline workflows. Focuses not only on IT development but also on administration and operational management. Equipped with rapid adaptability and a strong desire to learn.",
    experienceTitle: "Professional Experience",
    educationTitle: "Education History",
    orgTitle: "Organizations & Activities",
    certTitle: "Certifications & Licenses",
    skillsTitle: "Skills & Languages",
    experiences: [
      {
        role: "Junior Web Developer (Internship)",
        company: "PT Pura Barutama Engineering – Kudus, Central Java",
        date: "March 2025 – September 2025",
        bullets: [
          "Developed core modules for <strong>SIMPG</strong>: Finished Goods Debit, Manual Parts & Components Debit Entry, and LPB Reprinting.",
          "Engineered <strong>Web Report</strong> platform analytics (Evapro Material & Progress) and visual tracking for Operator Working Hours.",
          "Designed and deployed the <strong>SIP Monitoring Website</strong> for real-time logistics oversight.",
          "Architected the <strong>Overtime Order System (SPL)</strong> with QR Code digital signatures via Laravel & PostgreSQL (IP Rights Certified).",
          "Managed enterprise relational database structures and queries in PostgreSQL and Oracle."
        ]
      },
      {
        role: "Full Stack Developer with Data Science (MSIB Kampus Merdeka Cohort 7)",
        company: "Rakamin Academy – Jakarta (Remote)",
        date: "August 2024 – December 2024",
        bullets: [
          "Engineered the capstone project <strong>Medipluse</strong> (personal healthcare management web platform with automated medication reminders).",
          "Architected backend RESTful APIs with Laravel & MySQL combined with dynamic interactive user interfaces.",
          "Explored data analytics fundamentals, Python data manipulation, and integrating data models with web applications."
        ]
      },
      {
        role: "Mechanical Electronics (Vocational Internship)",
        company: "Multiteknik Pati – Pati, Central Java",
        date: "January 2020 – March 2020",
        bullets: [
          "Obtained Vocational Internship Certificate with an average grade of 80.",
          "Conducted maintenance and troubleshooting for electronic appliances and hardware equipment.",
          "Documented and reported daily operational income logs."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Information Systems",
        school: "Universitas Muria Kudus – Kudus, Central Java",
        date: "September 2022 – February 2026",
        bullets: [
          "Graduated in 3.5 years (7 semesters) with a GPA of <strong>3.94 / 4.00</strong>.",
          "Passed Microsoft Office Specialist Certification.",
          "Acted as System Analyst and Frontend Developer for a project management website.",
          "Created system designs for Information Systems Analysis and Design courses.",
          "Developed a Medication Reminder Website as a Quality Assurance final project.",
          "Served as a speaker for Industrial MBKM Sharing.",
          "Taught web development to prospective interns at Ezpages."
        ]
      },
      {
        degree: "Electronic Engineering",
        school: "SMK Negeri 2 Pati – Pati, Central Java",
        date: "September 2018 – February 2021",
        bullets: [
          "Obtained a Competency Certificate from the National Professional Certification Agency (BNSP).",
          "Built an LED Matrix using Arduino.",
          "Designed and built Amplifier circuits."
        ]
      }
    ],
    organizations: [
      { text: "Successfully Obtained Intellectual Property Rights (HKI) for the SPL Website Computer Program", date: "2026" },
      { text: "Interned at PT. Pura Barutama (Engineering Division) - Pura Barutama", date: "2025" },
      { text: "Completed the Certified Independent Study and Internship Program (MSIB) - Kampus Merdeka", date: "2024" },
      { text: "Attended Dicoding Web Series – Muria Computer Club", date: "2022" },
      { text: "Joined Islamic Education Mentoring – Universitas Muria Kudus", date: "2022" },
      { text: "Participated in Student Management Skills Training – Universitas Muria Kudus", date: "2022" }
    ],
    certifications: [
      { text: "Owner of Computer Program HKI (Intellectual Property Rights) for SPL Website", date: "2026" },
      { text: "Compulsory Computer, English, and Entrepreneurship Skills Certificates", date: "2023 - 2025" },
      { text: "Certified Fullstack Developer Independent Study Cohort 7 – Client", date: "2024" },
      { text: "Microsoft Office Specialist – MySkill", date: "2024" },
      { text: "National Professional Certification Agency (BNSP) – MySkill", date: "2021" }
    ],
    skills: {
      soft: "Problem Solving, Adaptability, Analytical Thinking",
      hard: "Microsoft Office, Microsoft Excel, Microsoft PowerPoint, Canva, PostgreSQL, Laravel",
      indonesian: "Fluent",
      english: "Conversational",
      langLabels: {
        soft: "Soft Skills",
        hard: "Hard Skills",
        indonesian: "Indonesian",
        english: "English"
      }
    }
  }
};

export default function CVModal({ isOpen, onClose }) {
  const [lang, setLang] = useState('ID');

  if (!isOpen) return null;

  const currentData = cvData[lang];

  const handlePrint = () => {
    const printContent = document.getElementById('cv-print-area').innerHTML;
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Gagal membuka jendela cetak. Pastikan browser Anda mengizinkan popup.");
      return;
    }

    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Curriculum Vitae - Hendrika Restu Prayoga</title>
          <style>
            html, body {
              background-color: white !important;
              color: #0f172a !important;
              margin: 0;
              padding: 0;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            body {
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              padding: 30px;
            }
            #cv-print-area {
              border: none !important;
              box-shadow: none !important;
              padding: 0 !important;
              margin: 0 !important;
              width: 100% !important;
              background: white !important;
              color: #0f172a !important;
            }
            @page {
              size: A4;
              margin: 15mm 15mm 15mm 15mm;
            }
            @media print {
              body {
                padding: 0;
                margin: 0;
              }
            }
          </style>
    `);

    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
    styles.forEach(style => {
      printWindow.document.write(style.outerHTML);
    });

    printWindow.document.write(`
        </head>
        <body>
          <div id="cv-print-area" class="w-full bg-white text-slate-900 leading-relaxed text-[13px]">
            ${printContent}
          </div>
          <script>
            window.addEventListener('load', () => {
              setTimeout(() => {
                window.print();
                window.close();
              }, 250);
            });
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
      >
        {/* Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-slate-950/80 border-b border-white/10 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
            <h3 className="font-display font-semibold text-sm sm:text-base">
              Curriculum Vitae • Hendrika Restu Prayoga
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            <div className="flex bg-slate-900 p-0.5 rounded-full border border-white/10">
              <button
                onClick={() => setLang('ID')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  lang === 'ID' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  lang === 'EN' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Tutup Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1 bg-slate-950/40">
          
          {/* Printable White Paper CV */}
          <div
            id="cv-print-area"
            className="w-full mx-auto max-w-[800px] bg-white text-slate-900 p-6 sm:p-10 shadow-xl rounded-2xl border border-slate-200 font-sans leading-relaxed text-[13px] sm:text-[14px]"
          >
            {/* Header / Info */}
            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b-2 border-slate-900">
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-900 mb-1">
                  {currentData.title}
                </h1>
                <p className="text-blue-700 font-bold text-sm mb-3">
                  {currentData.subtitle}
                </p>
                
                <div className="flex flex-col gap-1 text-slate-700 text-xs sm:text-sm font-medium">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <a href={`mailto:${currentData.email}`} className="text-blue-700 hover:underline">
                      {currentData.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{currentData.location}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <Globe className="w-3.5 h-3.5 text-slate-500" />
                    <a href={currentData.website} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                      {currentData.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="w-28 h-36 sm:w-32 sm:h-40 border border-slate-300 shadow-md rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                <img
                  src="/img/Hendrika.jpg"
                  alt="Hendrika Restu Prayoga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="mt-5 text-justify text-slate-800 text-xs sm:text-sm">
              <p>{currentData.summary}</p>
            </div>

            {/* Experience */}
            <div className="mt-6">
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-1 mb-3">
                {currentData.experienceTitle}
              </h2>
              
              {currentData.experiences.map((exp, index) => (
                <div key={index} className={index < currentData.experiences.length - 1 ? "mb-4" : ""}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-bold text-slate-950">
                    <h3 className="text-[13px] sm:text-[14px]">{exp.role}</h3>
                    <span className="text-[11px] sm:text-[12px] text-slate-600 font-normal">{exp.date}</span>
                  </div>
                  <div className="italic text-slate-700 text-xs mt-0.5 mb-1.5">{exp.company}</div>
                  
                  <ul className="list-disc pl-5 space-y-1 text-slate-800 text-justify text-xs sm:text-sm">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} dangerouslySetInnerHTML={{ __html: bullet }}></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-6">
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-1 mb-3">
                {currentData.educationTitle}
              </h2>

              {currentData.education.map((edu, index) => (
                <div key={index} className={index < currentData.education.length - 1 ? "mb-4" : ""}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-bold text-slate-950">
                    <h3 className="text-[13px] sm:text-[14px]">{edu.degree}</h3>
                    <span className="text-[11px] sm:text-[12px] text-slate-600 font-normal">{edu.date}</span>
                  </div>
                  <div className="italic text-slate-700 text-xs mt-0.5 mb-1.5">{edu.school}</div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-800 text-justify text-xs sm:text-sm">
                    {edu.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} dangerouslySetInnerHTML={{ __html: bullet }}></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Organizations */}
            <div className="mt-6">
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-1 mb-3">
                {currentData.orgTitle}
              </h2>
              <div className="space-y-1 text-slate-800 text-xs sm:text-sm">
                {currentData.organizations.map((org, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{org.text}</span>
                    <span className="font-semibold text-slate-700 ml-2">{org.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-1 mb-3">
                {currentData.certTitle}
              </h2>
              <div className="space-y-1 text-slate-800 text-xs sm:text-sm">
                {currentData.certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{cert.text}</span>
                    <span className="font-semibold text-slate-700 ml-2">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-1 mb-3">
                {currentData.skillsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-slate-950 block">{currentData.skills.langLabels.soft}</span>
                  <span className="text-slate-700">{currentData.skills.soft}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950 block">{currentData.skills.langLabels.hard}</span>
                  <span className="text-slate-700">{currentData.skills.hard}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950 block">{currentData.skills.langLabels.indonesian}</span>
                  <span className="text-slate-700">{currentData.skills.indonesian}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-950 block">{currentData.skills.langLabels.english}</span>
                  <span className="text-slate-700">{currentData.skills.english}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
