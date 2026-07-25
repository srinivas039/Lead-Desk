import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  ChevronRight,
  DollarSign
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-[600px] h-[350px] bg-[#1F3B2C]/8 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#DFD8C8]/30 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Call to Action */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#DFD8C8] text-[#1F3B2C] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1F3B2C]" />
              Editorial Lead Acquisition Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-6xl font-normal text-[#1A241E] leading-[1.08] tracking-tight mb-6"
            >
              Elevate Your Pipeline with <br />
              <span className="italic font-normal text-[#1F3B2C] underline decoration-[#1F3B2C]/20 decoration-wavy">
                Editorial Precision
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#5C5449] mb-8 leading-relaxed font-light max-w-xl"
            >
              LeadDesk combines Apple-grade minimalism with Linear-like speed. Effortlessly capture inbound prospects, manage deal stages, and update lead status in real-time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#lead-form"
                className="px-8 py-4 rounded-xl bg-[#1F3B2C] hover:bg-[#2B4E3C] text-white font-bold text-xs uppercase tracking-widest shadow-card hover:shadow-hover transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Submit Lead Request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#features"
                className="px-8 py-4 rounded-xl bg-white hover:bg-[#F3EFE6] text-[#1F3B2C] font-bold text-xs uppercase tracking-widest border border-[#DFD8C8] shadow-editorial transition-all duration-200 text-center"
              >
                Explore Features
              </motion.a>
            </motion.div>

            {/* Micro Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E9E3D5]"
            >
              <div className="flex items-center gap-2 text-[#5C5449] bg-white/70 py-2.5 px-3 rounded-lg border border-[#DFD8C8]">
                <ShieldCheck className="w-4 h-4 text-[#1F3B2C] shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider truncate">JWT Auth</span>
              </div>
              <div className="flex items-center gap-2 text-[#5C5449] bg-white/70 py-2.5 px-3 rounded-lg border border-[#DFD8C8]">
                <Zap className="w-4 h-4 text-[#1F3B2C] shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider truncate">Realtime Sync</span>
              </div>
              <div className="flex items-center gap-2 text-[#5C5449] bg-white/70 py-2.5 px-3 rounded-lg border border-[#DFD8C8]">
                <TrendingUp className="w-4 h-4 text-[#1F3B2C] shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider truncate">Live Search</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Focal Point / Interactive Dashboard & Pipeline Preview */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-white/80 backdrop-blur-xl border border-[#DFD8C8] shadow-2xl p-6 sm:p-7 overflow-hidden"
            >
              {/* Header Bar Mock */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#E9E3D5]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#7C7267] ml-2">LeadDesk Core Pipeline</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#1F3B2C]/10 text-[#1F3B2C] text-[10px] font-bold uppercase tracking-wider">
                  Live Preview
                </span>
              </div>

              {/* Top Floating Metric Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#F9F6F0] border border-[#E9E3D5]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-[#7C7267]">Pipeline Value</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">+18.4%</span>
                  </div>
                  <div className="text-2xl font-serif text-[#1A241E] font-medium flex items-center">
                    <DollarSign className="w-5 h-5 text-[#1F3B2C]" />
                    48,500
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F9F6F0] border border-[#E9E3D5]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-[#7C7267]">Conversion Rate</span>
                    <span className="text-[10px] font-bold text-[#1F3B2C] bg-[#1F3B2C]/10 px-1.5 py-0.5 rounded">Optimal</span>
                  </div>
                  <div className="text-2xl font-serif text-[#1A241E] font-medium">
                    94.2%
                  </div>
                </div>
              </div>

              {/* Interactive Lead Pipeline Stage Cards */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-[#7C7267] mb-2 flex items-center justify-between">
                  <span>Lead Stage Progression</span>
                  <span className="text-[10px] font-normal text-[#5C5449]">Automatic Routing</span>
                </div>

                {/* Stage 1: NEW */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-xs">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A241E]">Sarah Jenkins</div>
                      <div className="text-[11px] text-[#7C7267]">Enterprise Plan ($12,000)</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 text-[10px] font-bold uppercase tracking-wider">
                    NEW
                  </span>
                </motion.div>

                {/* Arrow Transition Indicator */}
                <div className="flex justify-center -my-1">
                  <ChevronRight className="w-4 h-4 text-[#7C7267] rotate-90" />
                </div>

                {/* Stage 2: CONTACTED */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold text-xs">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A241E]">Acme Dynamics</div>
                      <div className="text-[11px] text-[#7C7267]">Custom Integration ($24,500)</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                    CONTACTED
                  </span>
                </motion.div>

                {/* Arrow Transition Indicator */}
                <div className="flex justify-center -my-1">
                  <ChevronRight className="w-4 h-4 text-[#7C7267] rotate-90" />
                </div>

                {/* Stage 3: CLOSED */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A241E]">Nexus Technologies</div>
                      <div className="text-[11px] text-[#7C7267]">Annual Contract ($12,000)</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                    CLOSED
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Glass Accent Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-5 -left-5 sm:left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#DFD8C8] shadow-lg flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-xs font-semibold text-[#1A241E]">
                Active Inbound Stream <span className="text-[#7C7267] font-normal">• 4 Leads Captured</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
