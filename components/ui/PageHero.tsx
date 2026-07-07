"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetUrl } from '@/lib/assets';

interface StatChip {
  label: string;
  value: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  stats?: StatChip[];
  imagePath?: string;
}

export default function PageHero({
  badge,
  title,
  titleAccent,
  subtitle,
  stats = [],
  imagePath = '/Images/Naturaleza.png',
}: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[80vh] lg:min-h-[72vh] rounded-3xl overflow-hidden flex flex-col justify-between p-8 md:p-12 shadow-2xl"
    >
      {/* Background Image */}
      <Image
        src={getAssetUrl(imagePath)}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      {/* Top: Badge */}
      <div className="relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-naranja/20 border border-naranja/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-naranja animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-naranja">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Bottom: Title + Subtitle + Stats */}
      <div className="relative z-10 space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-florenza text-white leading-tight">
            {title}{' '}
            <span className="text-naranja italic">{titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 max-w-2xl leading-relaxed font-light font-poppins">
            {subtitle}
          </p>
        </div>

        {stats.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {stats.map((chip, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 space-y-0.5"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 font-poppins">
                  {chip.label}
                </p>
                <p className="text-base font-black text-white leading-none">
                  {chip.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
