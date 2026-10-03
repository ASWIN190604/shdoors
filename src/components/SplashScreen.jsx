import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SplashScreen({ onComplete }) {
  const [doorOpen, setDoorOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Trigger door opening sequence at ~1.6s
    const doorTimer = setTimeout(() => {
      setDoorOpen(true);
    }, 1600);

    // Auto complete at 3.2s
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(doorTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleEnter = () => {
    setDoorOpen(true);
    setTimeout(() => {
      onComplete?.();
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#0e0b08] text-[#F7F5F0] overflow-hidden select-none px-6 py-8"
      onClick={handleEnter}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(200,150,88,0.18)_0%,_rgba(139,94,60,0.08)_40%,_transparent_70%)] blur-3xl animate-pulse" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#1a140f] to-transparent opacity-80" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0e0b08] to-transparent opacity-90" />
        
        {/* Subtle geometric grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(247, 245, 240, 0.8) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top Header / Skip Button */}
      <div className="w-full max-w-4xl flex items-center justify-between z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#C89658] uppercase font-medium"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C89658]" />
          <span>Erode • Tamil Nadu</span>
        </motion.div>

        <motion.button
          type="button"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={(e) => {
            e.stopPropagation();
            onComplete?.();
          }}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B5E3C]/40 bg-[#1e1712]/60 hover:bg-[#8B5E3C] hover:border-[#8B5E3C] text-xs text-[#EDE3D7] hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
      </div>

      {/* Center Stage: Grand Door Reveal & Brand Typography */}
      <div className="flex flex-col items-center justify-center my-auto z-20 text-center max-w-2xl w-full">
        {/* Architectural 3D Double Doors Animation */}
        <div className="relative mb-8" style={{ perspective: "1000px" }}>
          {/* Glowing backdrop light leaking through door crack */}
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{
              opacity: doorOpen ? 1 : 0.6,
              scale: doorOpen ? 1.4 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -inset-6 bg-[radial-gradient(circle,_rgba(245,210,140,0.6)_0%,_rgba(200,150,88,0.25)_50%,_transparent_75%)] blur-2xl pointer-events-none"
          />

          {/* Door Frame Arch */}
          <div className="relative w-36 h-52 sm:w-44 sm:h-64 rounded-t-full border-4 border-[#C89658] p-1.5 bg-[#1a130e] shadow-[0_0_35px_rgba(200,150,88,0.25)] flex overflow-hidden">
            {/* Interior radiant glow behind doors */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f9e5b8] via-[#e5bc7d] to-[#8B5E3C] opacity-90 flex items-center justify-center">
              <span className="text-[10px] tracking-widest text-[#3B2418] font-bold uppercase rotate-90 opacity-70">
                S.S.T.
              </span>
            </div>

            {/* Left Door Leaf */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: doorOpen ? -95 : 0 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
              }}
              className="w-1/2 h-full bg-gradient-to-r from-[#2c1d13] via-[#3B2418] to-[#4a2e1d] border-r border-[#1a110a] flex flex-col justify-between p-2 shadow-2xl z-10"
            >
              {/* Door carved panels */}
              <div className="w-full h-1/3 rounded-t-sm border border-[#C89658]/30 bg-[#25170e]/80" />
              <div className="w-full h-1/2 border border-[#C89658]/30 bg-[#25170e]/80 relative flex items-center justify-end pr-1">
                {/* Brass Door Handle */}
                <div className="w-1 h-6 bg-gradient-to-b from-[#f5d58d] via-[#d4af37] to-[#8B5E3C] rounded-full shadow-md" />
              </div>
            </motion.div>

            {/* Right Door Leaf */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: doorOpen ? 95 : 0 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              style={{
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
              }}
              className="w-1/2 h-full bg-gradient-to-l from-[#2c1d13] via-[#3B2418] to-[#4a2e1d] border-l border-[#1a110a] flex flex-col justify-between p-2 shadow-2xl z-10"
            >
              {/* Door carved panels */}
              <div className="w-full h-1/3 rounded-t-sm border border-[#C89658]/30 bg-[#25170e]/80" />
              <div className="w-full h-1/2 border border-[#C89658]/30 bg-[#25170e]/80 relative flex items-center justify-start pl-1">
                {/* Brass Door Handle */}
                <div className="w-1 h-6 bg-gradient-to-b from-[#f5d58d] via-[#d4af37] to-[#8B5E3C] rounded-full shadow-md" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Small subtitle tag */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C89658] font-medium mb-3"
        >
          Manufacturer & Wholesaler • Est. 2021
        </motion.p>

        {/* Grand Company Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight mb-4"
        >
          <span className="bg-gradient-to-r from-[#FFF5E6] via-[#E8B878] to-[#FFF5E6] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(200,150,88,0.3)]">
            S.S.T. DOORS
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm sm:text-base text-[#D8C8B5]/90 max-w-md mx-auto leading-relaxed mb-6 font-light"
        >
          Mastering the art of Teak Wood, Flush, Membrane & Architectural Wooden Doors.
        </motion.p>

        {/* Material tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-[#C89658]/90 tracking-wider uppercase"
        >
          <span className="px-2.5 py-1 rounded border border-[#8B5E3C]/40 bg-[#1c1510]/80">Teak Wood</span>
          <span>•</span>
          <span className="px-2.5 py-1 rounded border border-[#8B5E3C]/40 bg-[#1c1510]/80">Flush Doors</span>
          <span>•</span>
          <span className="px-2.5 py-1 rounded border border-[#8B5E3C]/40 bg-[#1c1510]/80">Membrane</span>
          <span>•</span>
          <span className="px-2.5 py-1 rounded border border-[#8B5E3C]/40 bg-[#1c1510]/80">Plywood</span>
        </motion.div>
      </div>

      {/* Bottom Progress Bar & Enter Action */}
      <div className="w-full max-w-md flex flex-col items-center gap-3 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full flex items-center justify-between text-[11px] tracking-wider text-[#A89885] uppercase"
        >
          <span>Entering Showroom</span>
          <span className="font-mono text-[#C89658]">{progress}%</span>
        </motion.div>

        {/* Progress track */}
        <div className="w-full h-1 bg-[#231a13] rounded-full overflow-hidden border border-[#8B5E3C]/20">
          <motion.div
            className="h-full bg-gradient-to-r from-[#8B5E3C] via-[#C89658] to-[#FFF0D0]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[11px] text-[#887868] mt-1 flex items-center gap-1.5 hover:text-[#C89658] transition-colors cursor-pointer"
        >
          Click anywhere or tap to enter showroom
        </motion.p>
      </div>
    </motion.div>
  );
}
