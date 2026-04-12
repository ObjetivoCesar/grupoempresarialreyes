"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTour } from '@/lib/context/TourContext';
import { ChevronRight, ChevronLeft, X, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/assets';

export default function TourController() {
  const { isActive, currentStep, totalSteps, activeStep, nextStep, prevStep, closeTour } = useTour();

  if (!isActive) return null;

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-4xl"
      >
        <div className="bg-verde-oscuro/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative group">
          
          {/* Progress Bar Background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <motion.div 
              className="h-full bg-naranja shadow-[0_0_10px_rgba(255,107,0,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Step Info */}
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                <Image 
                  src={getAssetUrl('/Logos/AromaDeMontana Simbolo_2@4x.png')} 
                  alt="Logo" 
                  width={30} 
                  height={30}
                  className="object-contain"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-naranja font-black text-[10px] uppercase tracking-widest">
                    Paso {currentStep + 1} de {totalSteps}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-cremita font-bold text-sm">
                    {activeStep.label}
                  </span>
                </div>
                <p className="text-cremita/70 text-sm md:text-base font-medium line-clamp-1">
                  "{activeStep.message}"
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex-1 md:flex-none p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-cremita mx-auto" />
              </button>

              <button
                onClick={nextStep}
                className="flex-[2] md:flex-none px-6 py-3 rounded-xl bg-naranja hover:bg-naranja/80 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-naranja/20"
              >
                <span>{currentStep === totalSteps - 1 ? 'Finalizar' : 'Siguiente Paso'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={closeTour}
                className="flex-1 md:flex-none p-3 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all text-red-400"
              >
                <X className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>

          {/* Background Highlight */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-naranja/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
