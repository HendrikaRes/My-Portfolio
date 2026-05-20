import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const socials = [
    { 
      name: "WhatsApp", 
      icon: <FaWhatsapp className="w-5 h-5" />, 
      link: "https://wa.me/6287829713277", 
      hoverColor: "hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]" 
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin className="w-5 h-5" />, 
      link: "https://www.linkedin.com/in/hendrika-restu-prayoga-2627332a4/", 
      hoverColor: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:shadow-[0_0_20px_rgba(10,102,194,0.2)]" 
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="w-5 h-5" />, 
      link: "https://github.com/HendrikaRes", 
      hoverColor: "hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram className="w-5 h-5" />, 
      link: "https://www.instagram.com/hendrikarestu/?utm_source=ig_web_button_share_sheet", 
      hoverColor: "hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30 hover:shadow-[0_0_20px_rgba(228,64,95,0.2)]" 
    },
    { 
      name: "Twitter / X", 
      icon: <FaTwitter className="w-5 h-5" />, 
      link: "https://twitter.com/username-kamu", 
      hoverColor: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/30 hover:shadow-[0_0_20px_rgba(29,161,242,0.2)]" 
    },
    { 
      name: "Facebook", 
      icon: <FaFacebook className="w-5 h-5" />, 
      link: "https://www.facebook.com/profile.php?id=61560227490791", 
      hoverColor: "hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 hover:shadow-[0_0_20px_rgba(24,119,242,0.2)]" 
    }
  ];

  return (
    // Mengubah background menjadi bg-slate-950 dan menghapus border-t
    <footer className="bg-slate-950 pt-24 pb-12 px-6 relative overflow-hidden">
      
      {/* Aurora Ambient Light Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-blue-600/20 to-transparent blur-[100px] rounded-full pointer-events-none opacity-70"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center">
          
          {/* Kolom Kiri: Call to Action */}
          <div className="md:col-span-7 text-center md:text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Available for projects
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Mari <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Berkolaborasi.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed font-light">
              Sedang mencari developer untuk project atau bergabung ke tim kamu? Jangan ragu untuk menyapa. Saya selalu terbuka untuk peluang baru!
            </p>
            <div className="pt-2">
              <a 
                href="mailto:hendrikarestu2003@gmail.com" 
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0 group"
              >
                Kirim Email 
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Grid Sosial Media */}
          <div className="md:col-span-5 flex flex-col items-center md:items-end gap-4">
            <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Connect with me</span>
            <div className="grid grid-cols-3 gap-3.5">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative p-4 bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl text-slate-400 transition-all duration-500 flex items-center justify-center hover:-translate-y-1.5 ${social.hoverColor}`}
                >
                  {social.icon}
                  
                  {/* Tooltip Efek */}
                  <span className="absolute -top-10 scale-0 transition-all duration-300 group-hover:scale-100 bg-slate-800 text-slate-200 text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap border border-slate-700 shadow-xl pointer-events-none">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-xs tracking-wide">
            © 2026 <span className="text-slate-400 font-medium hover:text-blue-400 transition-colors cursor-default">Hendrik</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <span className="hover:text-slate-400 transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}