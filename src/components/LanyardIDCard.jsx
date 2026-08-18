import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu } from 'lucide-react';

export default function LanyardIDCard({ lang }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = -((mouseY - height / 2) / (height / 2)) * 15;
    const rY = ((mouseX - width / 2) / (width / 2)) * 15;

    setTilt({ x: rX, y: rY });
    setGlare({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.4,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="relative flex flex-col items-center pt-6 select-none">
      
      {/* 1. LANYARD STRAP (Hanging from top) */}
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 90, 
          damping: 12, 
          mass: 1.3,
          delay: 0.1 
        }}
        className="flex flex-col items-center z-20"
      >
        {/* Lanyard Fabric Ribbon */}
        <div className="w-7 h-24 bg-gradient-to-b from-blue-900 via-blue-700 to-indigo-800 rounded-t-sm shadow-md flex items-center justify-center relative overflow-hidden border-x border-blue-400/30">
          <div className="w-1.5 h-full bg-white/20"></div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.25)_2px,rgba(0,0,0,0.25)_5px)]"></div>
        </div>

        {/* Metallic Lobster Swivel Clasp */}
        <div className="w-6 h-4.5 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded-sm border border-slate-600 shadow-md -mt-0.5 z-10 flex items-center justify-center">
          <div className="w-2.5 h-2 bg-slate-700 rounded-xs"></div>
        </div>

        {/* Metallic Ring Loop */}
        <div className="w-5 h-4 border-2 border-slate-300 rounded-full -mt-1 shadow-sm"></div>
      </motion.div>

      {/* 2. THE ID CARD CONTAINER (Drops, Swings & Settles Tilted) */}
      <motion.div
        initial={{ y: -500, opacity: 0, rotate: -22 }}
        animate={{ 
          y: 0, 
          opacity: 1, 
          rotate: [ -22, 14, -9, 3, -5 ], // Settles at a stylish -5 degree natural tilt
        }}
        transition={{
          y: { type: "spring", stiffness: 80, damping: 11, mass: 1.4, delay: 0.15 },
          opacity: { duration: 0.3, delay: 0.15 },
          rotate: { duration: 2.4, ease: "easeOut", delay: 0.15 }
        }}
        className="relative z-10 -mt-2"
        style={{ transformPerspective: 1200 }}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-[310px] sm:w-[340px] rounded-3xl p-3.5 bg-gradient-to-b from-white/20 via-white/10 to-white/5 border border-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(59,130,246,0.25)] backdrop-blur-2xl cursor-grab active:cursor-grabbing overflow-hidden"
        >
          {/* Dynamic Light Glare Overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30 rounded-3xl"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
            }}
          />

          {/* Card Top Attachment Slot Cutout */}
          <div className="w-14 h-2.5 bg-slate-950/90 border border-white/20 rounded-full mx-auto mb-3.5 shadow-inner"></div>

          {/* Inner ID Card Body */}
          <div className="w-full bg-slate-950/95 rounded-2xl p-5 border border-white/10 relative overflow-hidden flex flex-col justify-between">
            
            {/* Background Holographic Texture Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

            {/* Header of Badge: Clean status & Chip */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5 relative z-10">
              {/* Metallic IC Chip */}
              <div className="w-9 h-7 bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 rounded-md border border-amber-600/80 shadow-xs flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-[1px] bg-amber-700/60 absolute top-2.5"></div>
                <div className="w-full h-[1px] bg-amber-700/60 absolute bottom-2.5"></div>
                <div className="h-full w-[1px] bg-amber-700/60 absolute left-3.5"></div>
                <div className="h-full w-[1px] bg-amber-700/60 absolute right-3.5"></div>
              </div>

              {/* Status Badge & Chip Label */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[10px] text-cyan-400 font-mono">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DEV-CORE</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Photo Section (Enlarged) */}
            <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden border border-white/15 bg-slate-900 mb-4 shadow-lg group">
              <img
                src="/img/pp12.webp"
                alt="Hendrika Restu Prayoga"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* Verified Watermark badge on photo */}
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 text-[10px] text-slate-200 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Verified Developer</span>
              </div>
            </div>

            {/* Candidate Identity Information (Clean & Focused) */}
            <div className="text-center relative z-10 mb-3.5">
              <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wide leading-tight">
                HENDRIKA RESTU PRAYOGA
              </h3>
              <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold mt-1">
                Fullstack Developer & Systems Analyst
              </p>
            </div>

            {/* Barcode & Security Hologram Footer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between relative z-10">
              {/* Digital Barcode Lines */}
              <div className="flex items-center gap-[2.5px] h-6 bg-white/5 px-2 py-1 rounded-md">
                <div className="w-[1.5px] h-full bg-slate-300"></div>
                <div className="w-[3px] h-full bg-slate-300"></div>
                <div className="w-[1px] h-full bg-slate-300"></div>
                <div className="w-[2.5px] h-full bg-slate-300"></div>
                <div className="w-[1px] h-full bg-slate-300"></div>
                <div className="w-[3.5px] h-full bg-slate-300"></div>
                <div className="w-[2px] h-full bg-slate-300"></div>
                <div className="w-[1px] h-full bg-slate-300"></div>
                <div className="w-[3px] h-full bg-slate-300"></div>
              </div>

              {/* ID Number */}
              <div className="text-[10px] font-mono text-slate-400 tracking-wider font-medium">
                ID: HND-2026-DEV
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}
