"use client";

import { motion } from 'framer-motion';
import { useTour } from '@/lib/context/TourContext';
import { Play } from 'lucide-react';

export default function TourPlayButton() {
  const { startTour } = useTour();

  return (
    <motion.button
      onClick={startTour}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center gap-6 p-2 pr-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-naranja/50 overflow-hidden"
    >
      {/* Animated Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-naranja/0 via-naranja/5 to-naranja/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
      
      {/* Play Icon Circle */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-naranja shadow-[0_0_20px_rgba(255,107,0,0.4)] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all">
        <Play className="w-6 h-6 text-white fill-white ml-1" />
        
        {/* Pulsing Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-naranja animate-ping opacity-40" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start translate-z-0">
        <span className="text-cremita font-bold text-lg tracking-tight group-hover:text-naranja transition-colors">
          Iniciar Experiencia Guiada
        </span>
        <span className="text-cremita/40 text-[10px] font-black uppercase tracking-[0.2em]">
          6 Pasos · Aprox. 8 Minutos
        </span>
      </div>

      {/* Finishing Tip */}
      <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
        <svg className="w-5 h-5 text-naranja" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5-5 5M6 7l5 5-5 5" />
        </svg>
      </div>
    </motion.button>
  );
}
