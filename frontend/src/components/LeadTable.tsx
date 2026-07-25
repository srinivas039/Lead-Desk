import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lead, LeadStatus } from '../types/lead';
import { StatusBadge } from './StatusBadge';
import { SkeletonLoaderTable } from './SkeletonLoader';
import { Calendar, DollarSign, Mail, User, Inbox, Eye, X, MessageSquare, Clock } from 'lucide-react';

interface LeadTableProps {
  leads: Lead[];
  isLoading: boolean;
  onStatusChange: (id: number, status: LeadStatus) => void;
  updatingId: number | null;
}

export const LeadTable: React.FC<LeadTableProps> = ({
  leads,
  isLoading,
  onStatusChange,
  updatingId,
}) => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date);
    } catch {
      return dateString;
    }
  };

  return (
    <>
      <div className="overflow-x-auto rounded-3xl border border-[#DFD8C8] bg-white shadow-card">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E9E3D5] bg-[#F8F5EF] text-[11px] font-bold uppercase tracking-wider text-[#5C5449]">
              <th className="py-4.5 px-6">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#1F3B2C]" />
                  Lead Name
                </span>
              </th>
              <th className="py-4.5 px-6">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1F3B2C]" />
                  Email Address
                </span>
              </th>
              <th className="py-4.5 px-6">
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-[#1F3B2C]" />
                  Budget Bracket
                </span>
              </th>
              <th className="py-4.5 px-6">Status</th>
              <th className="py-4.5 px-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1F3B2C]" />
                  Submitted Date
                </span>
              </th>
              <th className="py-4.5 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E9E3D5]/70 text-sm">
            {isLoading ? (
              <SkeletonLoaderTable />
            ) : leads.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-20 text-center text-[#5C5449]">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F5EF] border border-[#DFD8C8] flex items-center justify-center text-[#1F3B2C]">
                      <Inbox className="w-6 h-6" />
                    </div>
                    <p className="font-serif text-xl font-bold text-[#1A241E]">No records found</p>
                    <p className="text-xs text-[#8C8275] max-w-sm">
                      No lead entries match your active query. Try refining your search or submit a new lead.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#F8F5EF]/60 transition-colors group">
                  <td className="py-5 px-6 font-semibold text-[#1A241E]">
                    <div>{lead.name}</div>
                    {lead.message && (
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="text-xs text-[#5C5449] hover:text-[#1F3B2C] font-normal line-clamp-1 mt-0.5 max-w-xs text-left transition-colors flex items-center gap-1 group-hover:underline"
                        title="Click to view full message"
                      >
                        <span>"{lead.message}"</span>
                      </button>
                    )}
                  </td>
                  <td className="py-5 px-6 text-xs text-[#5C5449] font-medium">
                    <a
                      href={`mailto:${lead.email}`}
                      className="hover:text-[#1F3B2C] transition-colors underline underline-offset-2 decoration-[#DFD8C8]"
                    >
                      {lead.email}
                    </a>
                  </td>
                  <td className="py-5 px-6 font-bold text-[#1F3B2C]">{lead.budget}</td>
                  <td className="py-5 px-6">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="py-5 px-6 text-xs text-[#5C5449]">{formatDate(lead.createdAt)}</td>
                  <td className="py-5 px-6 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F5EF] hover:bg-[#F3EFE6] text-[#1F3B2C] border border-[#DFD8C8] text-xs font-bold transition-all"
                        title="View Full Requirements & Message"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#1F3B2C]" />
                        View Message
                      </button>

                      <select
                        value={lead.status}
                        disabled={updatingId === lead.id}
                        onChange={(e) => onStatusChange(lead.id, e.target.value as LeadStatus)}
                        className="bg-[#F8F5EF] border border-[#DFD8C8] rounded-xl px-3 py-1.5 text-xs text-[#1A241E] font-semibold focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 cursor-pointer disabled:opacity-50"
                      >
                        <option value="NEW">Set NEW</option>
                        <option value="CONTACTED">Set CONTACTED</option>
                        <option value="CLOSED">Set CLOSED</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Dialog with Framer Motion */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#162C21]/40 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0"
              onClick={() => setSelectedLead(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white border border-[#DFD8C8] rounded-3xl p-8 shadow-modal z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-5 border-b border-[#E9E3D5]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F3B2C] text-white flex items-center justify-center shadow-md">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A241E]">{selectedLead.name}</h3>
                    <a
                      href={`mailto:${selectedLead.email}`}
                      className="text-xs text-[#5C5449] hover:text-[#1F3B2C] underline font-medium"
                    >
                      {selectedLead.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-2 rounded-xl text-[#5C5449] hover:text-[#1A241E] hover:bg-[#F8F5EF] transition-colors"
                  title="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
                <div className="bg-[#F8F5EF] p-4 rounded-2xl border border-[#DFD8C8]">
                  <span className="text-xs text-[#5C5449] uppercase font-bold tracking-wider block mb-1.5">Status</span>
                  <StatusBadge status={selectedLead.status} />
                </div>

                <div className="bg-[#F8F5EF] p-4 rounded-2xl border border-[#DFD8C8]">
                  <span className="text-xs text-[#5C5449] uppercase font-bold tracking-wider block mb-1.5">Budget</span>
                  <span className="text-sm font-bold text-[#1F3B2C]">{selectedLead.budget}</span>
                </div>

                <div className="bg-[#F8F5EF] p-4 rounded-2xl border border-[#DFD8C8] col-span-2 sm:col-span-1">
                  <span className="text-xs text-[#5C5449] uppercase font-bold tracking-wider block mb-1.5">Created</span>
                  <span className="text-xs font-semibold text-[#1A241E] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#5C5449]" />
                    {formatDate(selectedLead.createdAt)}
                  </span>
                </div>
              </div>

              {/* Project Requirements & Message Body */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F3B2C] mb-2.5">
                  <MessageSquare className="w-4 h-4" />
                  Project Requirements & Message
                </label>
                <div className="bg-[#F8F5EF] p-5 rounded-2xl border border-[#DFD8C8] text-sm text-[#1A241E] leading-relaxed whitespace-pre-wrap font-sans">
                  {selectedLead.message || 'No additional message provided.'}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-[#E9E3D5]">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-xs font-bold text-[#5C5449] uppercase tracking-wider">Update Status:</span>
                  <select
                    value={selectedLead.status}
                    disabled={updatingId === selectedLead.id}
                    onChange={(e) => {
                      const newStatus = e.target.value as LeadStatus;
                      onStatusChange(selectedLead.id, newStatus);
                      setSelectedLead((prev) => prev ? { ...prev, status: newStatus } : null);
                    }}
                    className="bg-[#F8F5EF] border border-[#DFD8C8] rounded-xl px-3.5 py-2 text-xs font-bold text-[#1A241E] focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 cursor-pointer"
                  >
                    <option value="NEW">Set NEW</option>
                    <option value="CONTACTED">Set CONTACTED</option>
                    <option value="CLOSED">Set CLOSED</option>
                  </select>
                </div>

                <button
                  onClick={() => setSelectedLead(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1F3B2C] hover:bg-[#2B4E3C] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
