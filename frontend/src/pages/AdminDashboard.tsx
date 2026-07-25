import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { leadService } from '../services/leadService';
import { Lead, LeadStatus } from '../types/lead';
import { LeadTable } from '../components/LeadTable';
import { toast } from 'sonner';
import {
  Search,
  LogOut,
  Layers,
  RefreshCw,
  Users,
  Clock,
  CheckCircle2,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const fetchLeads = useCallback(async (query: string = '') => {
    setIsLoading(true);
    try {
      const data = query.trim()
        ? await leadService.searchLeads(query)
        : await leadService.getAllLeads();
      setLeads(data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to fetch leads');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads('');
  }, [fetchLeads]);

  // Debounced search handler
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLeads(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, fetchLeads]);

  const handleStatusChange = async (id: number, newStatus: LeadStatus) => {
    setUpdatingId(id);
    try {
      const updatedLead = await leadService.updateLeadStatus(id, newStatus);
      setLeads((prev) =>
        prev.map((lead) => (lead.id === id ? updatedLead : lead))
      );
      toast.success(`Lead #${id} status updated to ${newStatus}`);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to update lead status');
    } finally {
      setUpdatingId(null);
    }
  };

  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === 'NEW').length;
  const contactedLeads = leads.filter((l) => l.status === 'CONTACTED').length;
  const closedLeads = leads.filter((l) => l.status === 'CLOSED').length;

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#1A241E] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E9E3D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1F3B2C] text-white flex items-center justify-center shadow-md">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1F3B2C]">LeadDesk</span>
              <span className="ml-2 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#1F3B2C]/10 text-[#1F3B2C] border border-[#1F3B2C]/20">
                Console
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs text-[#5C5449] bg-white px-4 py-2 rounded-full border border-[#DFD8C8] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admin: <strong className="text-[#1A241E] font-bold">{user?.username}</strong></span>
            </div>

            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 sm:px-8 py-10">
        {/* Title Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1F3B2C] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Real-time Pipeline Overview
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A241E] tracking-tight">
              Lead Management
            </h1>
          </div>

          <button
            onClick={() => fetchLeads(searchQuery)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F3EFE6] text-[#1F3B2C] border border-[#DFD8C8] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm self-start sm:self-auto"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh Pipeline
          </button>
        </motion.div>

        {/* Stats Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          <div className="bg-white p-6 rounded-3xl border border-[#DFD8C8] shadow-card">
            <div className="flex items-center justify-between text-[#5C5449] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Total Intake</span>
              <Users className="w-4 h-4 text-[#1F3B2C]" />
            </div>
            <div className="font-serif text-4xl font-normal text-[#1A241E]">{totalLeads}</div>
            <p className="text-xs text-[#8C8275] mt-1 font-medium">All registered leads</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFD8C8] shadow-card">
            <div className="flex items-center justify-between text-[#1D5C96] text-xs font-bold uppercase tracking-wider mb-3">
              <span>NEW Leads</span>
              <Clock className="w-4 h-4 text-[#1D5C96]" />
            </div>
            <div className="font-serif text-4xl font-normal text-[#1D5C96]">{newLeads}</div>
            <p className="text-xs text-[#8C8275] mt-1 font-medium">Pending initial contact</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFD8C8] shadow-card">
            <div className="flex items-center justify-between text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
              <span>CONTACTED</span>
              <PhoneCall className="w-4 h-4 text-[#C85A32]" />
            </div>
            <div className="font-serif text-4xl font-normal text-[#C85A32]">{contactedLeads}</div>
            <p className="text-xs text-[#8C8275] mt-1 font-medium">Active negotiations</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFD8C8] shadow-card">
            <div className="flex items-center justify-between text-[#1F3B2C] text-xs font-bold uppercase tracking-wider mb-3">
              <span>CLOSED</span>
              <CheckCircle2 className="w-4 h-4 text-[#1F3B2C]" />
            </div>
            <div className="font-serif text-4xl font-normal text-[#1F3B2C]">{closedLeads}</div>
            <p className="text-xs text-[#8C8275] mt-1 font-medium">Converted contracts</p>
          </div>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C8275]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Name, Email, or Status (e.g. NEW)..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-[#DFD8C8] rounded-2xl text-[#1A241E] placeholder-[#8C8275] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 focus:border-[#1F3B2C] transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-bold text-[#5C5449] hover:text-[#1A241E]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Lead Table */}
        <LeadTable
          leads={leads}
          isLoading={isLoading}
          onStatusChange={handleStatusChange}
          updatingId={updatingId}
        />
      </main>

      {/* Footer link */}
      <footer className="py-8 border-t border-[#E9E3D5] text-center text-xs text-[#5C5449]">
        LeadDesk Admin Console &bull; <a href="https://digitalheroesco.com" target="_blank" rel="noreferrer" className="font-bold text-[#1F3B2C] hover:underline">Built for Digital Heroes Training Task</a>
      </footer>
    </div>
  );
};
