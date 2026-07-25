import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3B2C]/10 text-[#1F3B2C] text-xs font-bold uppercase tracking-widest mb-6 border border-[#1F3B2C]/20">
              <Sparkles className="w-3.5 h-3.5" />
              Design Philosophy
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A241E] tracking-tight mb-6">
              Beyond Basic CRUD Dashboards
            </h2>
            <p className="text-[#5C5449] text-base leading-relaxed mb-8 font-light">
              LeadDesk abandons noisy, generic administration panels in favor of editorial clarity. Inspired by Aesop, Notion, and Linear, every micro-interaction is tuned for maximum focus and visual calm.
            </p>

            <ul className="space-y-4">
              {[
                'Apple-inspired minimal editorial interface',
                'BCrypt password encryption & stateless JWT security',
                'Live reactive search with Instant Status change',
                'Standard JSON error handling with 0 stack trace leaks',
                'Mobile-first responsive layout with 8px grid system',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#1A241E] text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#1F3B2C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#DFD8C8] shadow-card relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-[#E9E3D5] mb-6">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#1A241E]">System Performance</h4>
                  <p className="text-xs text-[#5C5449] mt-0.5">Live operational metric</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EBF4EE] text-[#1F3B2C] text-xs font-bold border border-[#C8E2D2]">
                  99.9% Uptime
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F8F5EF] p-5 rounded-2xl border border-[#E9E3D5]">
                  <div className="flex items-center gap-2 text-[#5C5449] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Zap className="w-4 h-4 text-[#1F3B2C]" />
                    Response Time
                  </div>
                  <div className="text-3xl font-extrabold text-[#1F3B2C]">&lt; 150ms</div>
                </div>

                <div className="bg-[#F8F5EF] p-5 rounded-2xl border border-[#E9E3D5]">
                  <div className="flex items-center gap-2 text-[#5C5449] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Shield className="w-4 h-4 text-[#1F3B2C]" />
                    Auth Protocol
                  </div>
                  <div className="text-2xl font-bold text-[#1F3B2C]">JWT + BCrypt</div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#1F3B2C]/5 border border-[#1F3B2C]/15 text-xs text-[#1F3B2C] font-semibold flex items-center justify-between">
                <span>Built for Digital Heroes Training Task</span>
                <span className="text-[10px] bg-[#1F3B2C] text-white px-2 py-0.5 rounded-full">SaaS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
