import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPrint, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const cvData = {
  ID: {
    title: "Hendrika Restu Prayoga",
    subtitle: "Lulusan Sistem Informasi & Fullstack Developer",
    location: "Pati, Jawa Tengah",
    phone: "087-8297-132-77",
    email: "hendrikarestu2003@gmail.com",
    website: "https://hendrika-portfolio.vercel.app/",
    summary: "Lulusan Sistem Informasi, keahlian komprehensif di bidang pengembangan web dan tata kelola administrasi. Terampil dalam analisis sistem, pengelolaan database, serta pengolahan laporan menggunakan Microsoft Excel. Memiliki minat besar pada bagaimana teknologi dapat menyederhanakan proses kerja. Fokus saya tidak hanya pada pengembangan IT, melainkan juga pada bidang administrasi dan manajemen operasional. Berbekal kemampuan adaptasi yang cepat dan kemauan belajar yang tinggi.",
    experienceTitle: "Pengalaman",
    educationTitle: "Pendidikan",
    orgTitle: "Organisasi / Kegiatan",
    certTitle: "Sertifikasi",
    skillsTitle: "Kemampuan",
    experiences: [
      {
        role: "Junior Web Developer (Magang)",
        company: "PT Pura Barutama Engineering – Kudus, Jawa Tengah",
        date: "Maret 2025 – September 2025",
        bullets: [
          "Mengembangkan Fitur sistem <strong>SIMPG</strong> seperti Debit Barang Jadi, Input Manual Debit Barang jadi Part dan Komponen, Cetak Ulang LPB.",
          "Mengelola dan mengolah data menggunakan database PostgreSQL dan Oracle.",
          "Membantu membuat tampilan antarmuka (UI) website agar lebih mudah digunakan pengguna.",
          "Menggunakan framework Laravel serta teknologi web seperti HTML, CSS, JavaScript, Bootstrap, dan AJAX dalam proses pengembangan aplikasi berbasis website <strong>Sistem Surat Perintah Lembur (SPL)</strong> dengan otomatisasi tanda tangan digital berbasis QR Code dan <strong>Website Monitoring SIP</strong>."
        ]
      },
      {
        role: "Mechanical Electronics (PKL)",
        company: "Multiteknik Pati – Pati, Jawa Tengah",
        date: "Januari 2020 – Maret 2020",
        bullets: [
          "Memperoleh Sertifikat Praktek Kerja Lapangan dengan nilai rata-rata 80.",
          "Melakukan perawatan barang elektronik seperti AC, mesin cuci, kipas angin, dll.",
          "Melaporkan Hasil pendapatan harian."
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
          "Menjadi analisis sistem perancangan dan front end pembuatan Website tugas manajemen proyek.",
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
    phone: "087-8297-132-77",
    email: "hendrikarestu2003@gmail.com",
    website: "https://hendrika-portfolio.vercel.app/",
    summary: "Information Systems graduate with comprehensive expertise in web development and administrative governance. Skilled in systems analysis, database management, and data reporting using Microsoft Excel. Strongly interested in how technology can streamline workflows. Focuses not only on IT development but also on administration and operational management. Equipped with rapid adaptability and a strong desire to learn.",
    experienceTitle: "Professional Experience",
    educationTitle: "Education",
    orgTitle: "Organizations & Activities",
    certTitle: "Certifications",
    skillsTitle: "Skills & Languages",
    experiences: [
      {
        role: "Junior Web Developer (Internship)",
        company: "PT Pura Barutama Engineering – Kudus, Central Java",
        date: "March 2025 – September 2025",
        bullets: [
          "Developed features for the <strong>SIMPG</strong> system, including Finished Goods Debit, Manual Debit Input for Finished Goods Parts and Components, and LPB Reprinting.",
          "Managed and processed data using PostgreSQL and Oracle databases.",
          "Assisted in designing website user interfaces (UI) to improve user accessibility and experience.",
          "Utilized Laravel framework and web technologies such as HTML, CSS, JavaScript, Bootstrap, and AJAX in developing the <strong>Sistem Surat Perintah Lembur (SPL)</strong> website-based application featuring QR Code-based digital signatures, as well as the <strong>SIP Monitoring Website</strong>."
        ]
      },
      {
        role: "Mechanical Electronics (Vocational Internship / PKL)",
        company: "Multiteknik Pati – Pati, Central Java",
        date: "January 2020 – March 2020",
        bullets: [
          "Obtained a Vocational Internship Certificate with an average grade of 80.",
          "Conducted maintenance for electronic appliances such as AC, washing machines, electric fans, etc.",
          "Reported daily income records."
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
            /* Reset stylesheet print A4 */
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
              padding: 40px;
            }
            #cv-print-area {
              border: none !important;
              box-shadow: none !important;
              padding: 0 !important;
              margin: 0 !important;
              width: 100% !important;
              max-width: 100% !important;
              background: white !important;
              color: #0f172a !important;
            }
            /* Menghilangkan link URL default browser di footer/header halaman */
            @page {
              size: auto;
              margin: 20mm 15mm 20mm 15mm;
            }
            @media print {
              body {
                padding: 0;
                margin: 0;
              }
            }
          </style>
    `);

    // Copy stylesheet / style tags dari website utama ke jendela print agar styling class Tailwind tetap jalan
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
    styles.forEach(style => {
      printWindow.document.write(style.outerHTML);
    });

    printWindow.document.write(`
        </head>
        <body>
          <div id="cv-print-area" class="w-full bg-white text-slate-900 font-sans leading-relaxed text-[13px] sm:text-[14px]">
            ${printContent}
          </div>
          <script>
            window.addEventListener('load', () => {
              // Beri jeda sedikit agar CSS sepenuhnya di-render browser
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
      
      {/* Kontainer Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh]"
      >
        
        {/* Header Modal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-b border-slate-800 bg-slate-900/90 rounded-t-3xl no-print">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <h3 className="font-bold text-white text-base sm:text-lg">Curriculum Vitae</h3>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3 w-full sm:w-auto">
            {/* Toggle Bahasa */}
            <div className="flex bg-slate-950 rounded-xl p-1 border border-slate-850">
              <button
                onClick={() => setLang('ID')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  lang === 'ID'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ID (Bahasa)
              </button>
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  lang === 'EN'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN (English)
              </button>
            </div>

            {/* Tombol Print */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <FaPrint className="w-3.5 h-3.5" />
              Cetak / Simpan PDF
            </button>
            {/* Tombol Tutup */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors active:scale-95 cursor-pointer"
              aria-label="Tutup"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Konten Kertas CV */}
        <div className="p-2 sm:p-6 overflow-y-auto flex-1 bg-slate-950/40">
          
          {/* Halaman Kertas CV (Mengikuti layout PDF asli) */}
          <div
            id="cv-print-area"
            className="w-full mx-auto max-w-[800px] bg-white text-slate-900 p-6 sm:p-10 md:p-12 shadow-xl rounded-xl border border-slate-200 font-sans leading-relaxed text-[13px] sm:text-[14px] select-text"
          >
            {/* --- HEADER (Nama, Kontak, dan Foto) --- */}
            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b-2 border-slate-900">
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-900 mb-2">
                  {currentData.title}
                </h1>
                
                <div className="flex flex-col gap-1.5 mt-3 text-slate-700 font-medium">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <FaPhone className="text-slate-500 w-3.5 h-3.5" />
                    <span>{currentData.phone}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <FaEnvelope className="text-slate-500 w-3.5 h-3.5" />
                    <a href={`mailto:${currentData.email}`} className="hover:text-blue-700 hover:underline">
                      {currentData.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <FaMapMarkerAlt className="text-slate-500 w-3.5 h-3.5" />
                    <span>{currentData.location}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <FaGlobe className="text-slate-500 w-3.5 h-3.5" />
                    <a href={currentData.website} target="_blank" rel="noreferrer" className="hover:text-blue-700 hover:underline">
                      {currentData.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Pas Foto */}
              <div className="w-28 h-36 sm:w-32 sm:h-40 border border-slate-350 shadow-md rounded overflow-hidden flex-shrink-0 bg-slate-100">
                <img
                  src="/img/Hendrika.jpg"
                  alt="Hendrika Restu Prayoga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* --- RINGKASAN --- */}
            <div className="mt-5 text-justify text-slate-800">
              <p>{currentData.summary}</p>
            </div>

            {/* --- PENGALAMAN --- */}
            <div className="mt-6">
              <h2 className="text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-3">
                {currentData.experienceTitle}
              </h2>
              
              {currentData.experiences.map((exp, index) => (
                <div key={index} className={index < currentData.experiences.length - 1 ? "mb-5" : ""}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-semibold text-slate-950">
                    <h3 className="text-[14px] sm:text-[15px]">{exp.role}</h3>
                    <span className="text-[12px] text-slate-600 font-normal">{exp.date}</span>
                  </div>
                  <div className="italic text-slate-700 text-xs mt-0.5 mb-2">{exp.company}</div>
                  
                  {/* Render bullet points */}
                  <ul className="list-disc pl-5 space-y-1 text-slate-800 text-justify text-[13px]">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} dangerouslySetInnerHTML={{ __html: bullet }}></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* --- PENDIDIKAN --- */}
            <div className="mt-6">
              <h2 className="text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-3">
                {currentData.educationTitle}
              </h2>

              {currentData.education.map((edu, index) => (
                <div key={index} className={index < currentData.education.length - 1 ? "mb-4" : ""}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-semibold text-slate-950">
                    <h3 className="text-[14px] sm:text-[15px]">{edu.degree}</h3>
                    <span className="text-[12px] text-slate-600 font-normal">{edu.date}</span>
                  </div>
                  <div className="italic text-slate-700 text-xs mt-0.5 mb-1.5">{edu.school}</div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-800 text-justify">
                    {edu.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} dangerouslySetInnerHTML={{ __html: bullet }}></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* --- ORGANISASI / KEGIATAN --- */}
            <div className="mt-6">
              <h2 className="text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-3">
                {currentData.orgTitle}
              </h2>
              <div className="space-y-1.5 text-slate-800">
                {currentData.organizations.map((org, index) => (
                  <div key={index} className="flex justify-between items-center text-[13px] sm:text-[14px]">
                    <span>{org.text}</span>
                    <span className="font-semibold text-slate-700">{org.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SERTIFIKASI --- */}
            <div className="mt-6">
              <h2 className="text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-3">
                {currentData.certTitle}
              </h2>
              <div className="space-y-1.5 text-slate-800">
                {currentData.certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-center text-[13px] sm:text-[14px]">
                    <span>{cert.text}</span>
                    <span className="font-semibold text-slate-700">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- KEMAMPUAN --- */}
            <div className="mt-6">
              <h2 className="text-base font-bold uppercase tracking-wider text-blue-900 border-b border-slate-900 pb-0.5 mb-3">
                {currentData.skillsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-[13px] sm:text-[14px]">
                <div>
                  <span className="font-semibold text-slate-950 block">{currentData.skills.langLabels.soft}</span>
                  <span className="text-slate-700">{currentData.skills.soft}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-950 block">{currentData.skills.langLabels.hard}</span>
                  <span className="text-slate-700">{currentData.skills.hard}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-950 block">{currentData.skills.langLabels.indonesian}</span>
                  <span className="text-slate-700">{currentData.skills.indonesian}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-950 block">{currentData.skills.langLabels.english}</span>
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
