import React from 'react';
import { Layers, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#162C21] text-[#F8F5EF] py-16 border-t border-[#1F3B2C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F8F5EF] text-[#1F3B2C] flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#F8F5EF]">LeadDesk</span>
              <p className="text-xs text-[#8C9E93]">Editorial Lead Orchestration</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs bg-[#1F3B2C] px-5 py-2.5 rounded-full border border-[#2F543F] shadow-sm">
            <span className="text-[#C8D6CD]">Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400 inline" />
            <span className="text-[#C8D6CD]">for</span>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-amber-200 transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-amber-400/40"
            >
              Built for Digital Heroes Training Task
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-xs text-[#8C9E93]">
            &copy; {new Date().getFullYear()} LeadDesk SaaS Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
