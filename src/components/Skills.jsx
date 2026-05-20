import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiBootstrap, SiJquery, 
  SiLaravel, SiPhp, SiNodedotjs, 
  SiPostgresql, SiMysql, SiGit, 
  SiPython,
  SiJavascript,
  SiOpenjdk
} from 'react-icons/si';
import { FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { FaJava } from "react-icons/fa";

export default function Skills() {
  // Ukuran ikon diperkecil menjadi w-8 h-8 (mobile) dan w-10 h-10 (desktop)
  const skills = [
    { name: "React.js", icon: <SiReact className="w-8 h-8 md:w-10 md:h-10 text-[#61DAFB]" /> },
    { name: "Python", icon: <SiPython className="w-8 h-8 md:w-10 md:h-10 text-[#F7DF1E]" /> },
    { name: "Javascript", icon: <SiJavascript className="w-8 h-8 md:w-10 md:h-10 text-[#F7DF1E]" /> },
    { name: "Java", icon: <FaJava className="w-8 h-8 md:w-10 md:h-10 text-[#E41F23]" /> },
    { name: "PHP", icon: <SiPhp className="w-8 h-8 md:w-10 md:h-10 text-[#babde77e]" /> },
    { name: "Laravel", icon: <SiLaravel className="w-8 h-8 md:w-10 md:h-10 text-[#FF2D20]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 md:w-10 md:h-10 text-[#336791]" /> },
    { name: "MySQL", icon: <SiMysql className="w-8 h-8 md:w-10 md:h-10 text-[#4479A1]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10 text-[#06B6D4]" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="w-8 h-8 md:w-10 md:h-10 text-[#7952B3]" /> },
    { name: "jQuery", icon: <SiJquery className="w-8 h-8 md:w-10 md:h-10 text-[#0769AD]" /> },
    { name: "HTML5", icon: <FaHtml5 className="w-8 h-8 md:w-10 md:h-10 text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="w-8 h-8 md:w-10 md:h-10 text-[#1572B6]" /> },
    { name: "Git", icon: <SiGit className="w-8 h-8 md:w-10 md:h-10 text-[#F05032]" /> },
   
  ];

  // Variabel animasi untuk efek muncul bergantian (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Jeda waktu antar ikon muncul
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Header Minimalis di Tengah */}
        <div className="mb-14 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Teknologi dan tools yang saya gunakan sehari-hari untuk mengembangkan sistem perangkat lunak yang andal.
          </p>
        </div>

        {/* Container Icon Skill */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6" // Jarak antar kotak diperkecil
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: [1, 1.25, 1.15], // Skala perbesaran sedikit dikurangi agar tidak over
                rotate: [0, -8, 8, 0],
                transition: { duration: 0.4 }
              }}
              // Ukuran kotak diperkecil menjadi w-20 h-20 (mobile) dan w-24 h-24 (desktop)
              className="flex flex-col items-center justify-center gap-2 w-20 h-20 md:w-24 md:h-24 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 rounded-2xl cursor-pointer shadow-lg hover:shadow-blue-500/20 transition-colors"
              title={skill.name}
            >
              {skill.icon}
              <span className="text-[10px] md:text-xs font-semibold text-slate-400">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}