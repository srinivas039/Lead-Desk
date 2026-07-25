import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, ShieldCheck, LogIn, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E9E3D5] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#1F3B2C] text-[#F8F5EF] flex items-center justify-center shadow-md group-hover:bg-[#2B4E3C] transition-all duration-300">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1F3B2C]">
              LeadDesk
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#1F3B2C]/10 text-[#1F3B2C] border border-[#1F3B2C]/20">
              Editorial Edition
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          {!isLoginPage && (
            <a
              href="#lead-form"
              className="text-xs font-semibold uppercase tracking-wider text-[#5C5449] hover:text-[#1F3B2C] transition-colors hidden md:block"
            >
              Capture Lead
            </a>
          )}
          <a
            href="#features"
            className="text-xs font-semibold uppercase tracking-wider text-[#5C5449] hover:text-[#1F3B2C] transition-colors hidden md:block"
          >
            Features
          </a>

          {isAuthenticated ? (
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F3B2C] hover:bg-[#2B4E3C] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200"
            >
              <LayoutDashboard className="w-4 h-4" />
              Admin Portal
            </Link>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F3EFE6] text-[#1F3B2C] border border-[#DFD8C8] text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200"
            >
              <ShieldCheck className="w-4 h-4 text-[#1F3B2C]" />
              <LogIn className="w-4 h-4" />
              Admin Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
