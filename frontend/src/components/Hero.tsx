import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1F3B2C]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#DFD8C8] text-[#1F3B2C] text-xs font-bold uppercase tracking-widest mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#1F3B2C]" />
          Editorial Lead Acquisition Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#1A241E] leading-[1.05] tracking-tight mb-8 max-w-5xl mx-auto"
        >
          Elevate Your Sales Pipeline with <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#1F3B2C] underline decoration-[#1F3B2C]/20 decoration-wavy">
            Editorial Precision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#5C5449] max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          LeadDesk combines Apple-grade minimalism with Linear-like speed. Effortlessly capture inbound prospects, manage deal stages, and update lead status in real-time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
        >
          <a
            href="#lead-form"
            className="w-full sm:w-auto px-11 py-5 sm:py-6 rounded-2xl bg-[#1F3B2C] hover:bg-[#2B4E3C] text-white font-bold text-sm uppercase tracking-wider shadow-card hover:shadow-hover transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            Submit Lead Request
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-11 py-5 sm:py-6 rounded-2xl bg-white hover:bg-[#F3EFE6] text-[#1F3B2C] font-bold text-sm uppercase tracking-wider border border-[#DFD8C8] shadow-editorial transition-all duration-200"
          >
            Explore Platform Features
          </a>
        </motion.div>

        {/* Highlight Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-10 border-t border-[#E9E3D5]"
        >
          <div className="flex items-center justify-center gap-3 text-[#5C5449] bg-white/70 py-4 px-5 rounded-xl border border-[#DFD8C8]">
            <ShieldCheck className="w-4 h-4 text-[#1F3B2C]" />
            <span className="text-xs font-semibold uppercase tracking-wider">JWT Security Guard</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-[#5C5449] bg-white/70 py-4 px-5 rounded-xl border border-[#DFD8C8]">
            <Zap className="w-4 h-4 text-[#1F3B2C]" />
            <span className="text-xs font-semibold uppercase tracking-wider">Instant Status Sync</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-[#5C5449] bg-white/70 py-4 px-5 rounded-xl border border-[#DFD8C8]">
            <TrendingUp className="w-4 h-4 text-[#1F3B2C]" />
            <span className="text-xs font-semibold uppercase tracking-wider">Live Search & Filter</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
