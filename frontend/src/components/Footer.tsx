import React from 'react';
import { Layers, Github, Linkedin, ExternalLink, ShieldCheck, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#162C21] text-[#F8F5EF] pt-16 pb-12 border-t border-[#1F3B2C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Upper Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#254635]">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F8F5EF] text-[#1F3B2C] flex items-center justify-center font-bold shadow-md">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F8F5EF]">LeadDesk</span>
            </div>
            <p className="text-xs text-[#A1B3A8] leading-relaxed font-light">
              Editorial Lead Orchestration Platform combining Apple-grade aesthetics with Spring Boot 3 enterprise reliability.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D1E0D7] mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs text-[#A1B3A8]">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Bento Features</a>
              </li>
              <li>
                <a href="#lead-form" className="hover:text-white transition-colors">Lead Capture Intake</a>
              </li>
              <li>
                <a href="/login" className="hover:text-white transition-colors">Admin Console</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Spring Security & JWT</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Documentation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D1E0D7] mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs text-[#A1B3A8]">
              <li className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <a href="https://github.com/srinivas039/Lead-Desk#readme" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/srinivas039/Lead-Desk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  REST API Reference
                </a>
              </li>
              <li>
                <a href="https://github.com/srinivas039/Lead-Desk/blob/main/README.md" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Deployment Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Social Connections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D1E0D7] mb-4">Connect & Legal</h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com/srinivas039/Lead-Desk"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1F3B2C] hover:bg-white hover:text-[#1F3B2C] text-[#D1E0D7] flex items-center justify-center transition-all border border-[#2F543F]"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1F3B2C] hover:bg-white hover:text-[#1F3B2C] text-[#D1E0D7] flex items-center justify-center transition-all border border-[#2F543F]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-1.5 text-[11px] text-[#A1B3A8]">
              <div><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a> &bull; <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></div>
              <div className="flex items-center gap-1 text-[10px] text-[#788C80] pt-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                PostgreSQL & CORS Protected
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1B3A8]">
          <div className="flex items-center gap-2">
            <span>Crafted for</span>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-emerald-300 transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-emerald-500/40"
            >
              Digital Heroes Training Task
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-xs text-[#788C80]">
            &copy; {new Date().getFullYear()} LeadDesk SaaS Platform. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
