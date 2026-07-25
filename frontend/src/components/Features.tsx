import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Lock, Search, RefreshCw, BarChart2, Shield } from 'lucide-react';

const featureList = [
  {
    icon: UserCheck,
    title: 'Precision Capture',
    description: 'Lead capture form with Zod client validation and Spring Boot Bean validation for zero-error data ingestion.',
  },
  {
    icon: Lock,
    title: 'JWT Authentication',
    description: 'Stateless Spring Security architecture with BCrypt password hashing and JWT authorization token guard.',
  },
  {
    icon: Search,
    title: 'Real-Time Search',
    description: 'Instant multi-field search filtering across Name, Email, and Status with automatic newest-first sorting.',
  },
  {
    icon: RefreshCw,
    title: 'Instant Status Update',
    description: 'Manage deal stages seamlessly with one-click status transitions between NEW, CONTACTED, and CLOSED.',
  },
  {
    icon: BarChart2,
    title: 'Budget Categorization',
    description: 'Segment prospective enterprise clients across budget brackets (< $1000 to > $10000) for instant qualification.',
  },
  {
    icon: Shield,
    title: 'Production Grade',
    description: 'Global Exception Handling with zero stack trace leaks, CORS protection, and PostgreSQL persistence.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#F3EFE6]/60 border-t border-[#E9E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F3B2C] mb-3 block">
            Crafted for High Performance
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A241E] tracking-tight">
            Minimalist Aesthetics. Enterprise Power.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="editorial-card p-8 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1F3B2C]/10 border border-[#1F3B2C]/20 flex items-center justify-center text-[#1F3B2C] group-hover:bg-[#1F3B2C] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1A241E] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#5C5449] leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
