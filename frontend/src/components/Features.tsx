import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Lock, Search, RefreshCw, BarChart2, Shield, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#F3EFE6]/60 border-t border-[#E9E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F3B2C] mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F3B2C]/10 border border-[#1F3B2C]/20">
            <Sparkles className="w-3 h-3" />
            Crafted for High Performance
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A241E] tracking-tight mt-3">
            Minimalist Aesthetics. Enterprise Power.
          </h2>
          <p className="text-sm sm:text-base text-[#5C5449] mt-4 font-light">
            Designed with visual rhythm and architectural precision for seamless sales operations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Card 1: Large Featured Card (Spans 2 cols on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 p-8 rounded-2xl bg-white border border-[#DFD8C8] shadow-card hover:shadow-hover transition-all relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#1F3B2C]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1F3B2C]/10 border border-[#1F3B2C]/20 flex items-center justify-center text-[#1F3B2C] group-hover:bg-[#1F3B2C] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                Core Feature
              </div>
              <h3 className="text-2xl font-serif font-normal text-[#1A241E] mb-3">Precision Lead Capture</h3>
              <p className="text-sm text-[#5C5449] leading-relaxed mb-6 font-light">
                Lead capture form backed by Zod client validation and Spring Boot Bean validation for zero-error data ingestion and instant routing.
              </p>
            </div>
            
            {/* Visual Accent inside Bento Card */}
            <div className="p-4 rounded-xl bg-[#F9F6F0] border border-[#E9E3D5] flex items-center justify-between text-xs font-semibold text-[#1F3B2C]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Strict Schema Validation & Auto-Formatting</span>
              </div>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          {/* Bento Card 2: Compact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1 p-7 rounded-2xl bg-white border border-[#DFD8C8] shadow-card hover:shadow-hover transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1F3B2C]/10 border border-[#1F3B2C]/20 flex items-center justify-center text-[#1F3B2C] group-hover:bg-[#1F3B2C] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1A241E] mb-2">Instant Status Sync</h3>
              <p className="text-xs text-[#5C5449] leading-relaxed font-light">
                Manage deal stages with one-click transitions between NEW, CONTACTED, and CLOSED.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#7C7267]">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> NEW →
              <span className="w-2 h-2 rounded-full bg-blue-400" /> CONT →
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> CLOSED
            </div>
          </motion.div>

          {/* Bento Card 3: Compact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-1 lg:col-span-1 p-7 rounded-2xl bg-white border border-[#DFD8C8] shadow-card hover:shadow-hover transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1F3B2C]/10 border border-[#1F3B2C]/20 flex items-center justify-center text-[#1F3B2C] group-hover:bg-[#1F3B2C] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1A241E] mb-2">Real-Time Search</h3>
              <p className="text-xs text-[#5C5449] leading-relaxed font-light">
                Filter across Name, Email, and Status instantly with smart keyboard shortcuts.
              </p>
            </div>
            <div className="mt-6 inline-flex items-center px-2 py-1 rounded bg-[#F9F6F0] border border-[#E9E3D5] text-[10px] font-mono text-[#7C7267]">
              Shortcut: ⌘K / Ctrl+K
            </div>
          </motion.div>

          {/* Bento Card 4: Wide Horizontal Card (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 p-8 rounded-2xl bg-white border border-[#DFD8C8] shadow-card hover:shadow-hover transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1F3B2C]/10 border border-[#1F3B2C]/20 flex items-center justify-center text-[#1F3B2C] group-hover:bg-[#1F3B2C] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-normal text-[#1A241E] mb-2">JWT Authentication Guard</h3>
              <p className="text-xs sm:text-sm text-[#5C5449] leading-relaxed font-light">
                Stateless Spring Security architecture featuring BCrypt password hashing, token validation filters, and protected API endpoints.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#F3EFE6] text-[#1F3B2C] text-[10px] font-semibold">Spring Security 3</span>
              <span className="px-2.5 py-1 rounded-md bg-[#F3EFE6] text-[#1F3B2C] text-[10px] font-semibold">BCrypt Hashing</span>
              <span className="px-2.5 py-1 rounded-md bg-[#F3EFE6] text-[#1F3B2C] text-[10px] font-semibold">Stateless Session</span>
            </div>
          </motion.div>

          {/* Bento Card 5: Compact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-1 lg:col-span-1 p-7 rounded-2xl bg-white border border-[#DFD8C8] shadow-card hover:shadow-hover transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1F3B2C]/10 border border-[#1F3B2C]/20 flex items-center justify-center text-[#1F3B2C] group-hover:bg-[#1F3B2C] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1A241E] mb-2">Budget Analytics</h3>
              <p className="text-xs text-[#5C5449] leading-relaxed font-light">
                Segment deals by enterprise value from &lt;$1,000 up to &gt;$10,000+.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 inline-block">
              High Value Tiering
            </div>
          </motion.div>

          {/* Bento Card 6: Compact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 lg:col-span-1 p-7 rounded-2xl bg-white border border-[#DFD8C8] shadow-card hover:shadow-hover transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1F3B2C]/10 border border-[#1F3B2C]/20 flex items-center justify-center text-[#1F3B2C] group-hover:bg-[#1F3B2C] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1A241E] mb-2">Production Grade</h3>
              <p className="text-xs text-[#5C5449] leading-relaxed font-light">
                PostgreSQL persistence with H2 fallback and global exception handling.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#7C7267]">
              Zero Leak Exception Handler
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
