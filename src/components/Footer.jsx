import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Mail, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

export default function Footer({ lang }) {
  const socials = [
    { 
      name: "WhatsApp", 
      icon: <FaWhatsapp className="w-4 h-4" />, 
      link: "https://wa.me/6287829713277",
      color: "hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin className="w-4 h-4" />, 
      link: "https://www.linkedin.com/in/hendrika-restu-prayoga-2627332a4/",
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10"
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="w-4 h-4" />, 
      link: "https://github.com/HendrikaRes",
      color: "hover:text-white hover:border-white/40 hover:bg-white/10"
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram className="w-4 h-4" />, 
      link: "https://www.instagram.com/hendrikarestu/?utm_source=ig_web_button_share_sheet",
      color: "hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10"
    },
    { 
      name: "Twitter / X", 
      icon: <FaTwitter className="w-4 h-4" />, 
      link: "https://twitter.com/username-kamu",
      color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10"
    },
    { 
      name: "Facebook", 
      icon: <FaFacebook className="w-4 h-4" />, 
      link: "https://www.facebook.com/profile.php?id=61560227490791",
      color: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10"
    }
  ];

  return (
    <footer className="bg-[#030712] pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden border-t border-slate-800/60">
      
      {/* Subtle Aurora Ambient Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main CTA Glass Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Mari Berkolaborasi' : "Let's Collaborate"}</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                {lang === 'ID' ? (
                  <>
                    Siap Membangun Solusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Berkualitas?</span>
                  </>
                ) : (
                  <>
                    Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">remarkable together?</span>
                  </>
                )}
              </h2>

              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                {lang === 'ID'
                  ? 'Sedang mencari developer untuk mengembangkan sistem baru atau memperkuat tim engineering Anda? Saya selalu terbuka untuk mendiskusikan peluang dan tantangan teknis baru.'
                  : 'Looking for a dedicated developer to architect modern software systems or elevate your engineering team? Let us connect.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="mailto:hendrikarestu2003@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/25 active:scale-98"
                >
                  <Mail className="w-4 h-4" />
                  <span>{lang === 'ID' ? 'Kirim Pesan Email' : 'Send Email Inquiry'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/6287829713277"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-300"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>

            {/* Right Quote Callout */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="glass-card-interactive p-5 rounded-2xl max-w-sm border border-white/5">
                <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Engineering Philosophy</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-light italic leading-relaxed">
                  {lang === 'ID'
                    ? '"Fokus utama saya adalah menghadirkan arsitektur kode yang bersih, efisien, dan memberikan dampak nyata terhadap efisiensi operasional."'
                    : '"My core focus is delivering clean, scalable software architecture that tangibly accelerates workflow efficiency and business operations."'}
                </p>
                <div className="mt-3 text-right text-xs text-slate-400 font-medium">
                  — Hendrika Restu Prayoga
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Social Links Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">
              {lang === 'ID' ? 'Saluran Profesional:' : 'Connect Online:'}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl bg-slate-900/80 border border-white/5 text-slate-400 transition-all duration-300 ${social.color}`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-slate-500">
          <p>
            © 2026 <span className="text-slate-300 font-medium">Hendrika Restu Prayoga</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="hover:text-slate-400 transition-colors">Information Systems Graduate</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Universitas Muria Kudus</span>
          </div>
        </div>

      </div>
    </footer>
  );
}