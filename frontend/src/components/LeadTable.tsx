import React, { useState } from 'react';
import { Lead, LeadStatus } from '../types/lead';
import { StatusBadge } from './StatusBadge';
import { SkeletonLoaderTable } from './SkeletonLoader';
import { LeadDetailModal } from './LeadDetailModal';
import { Calendar, DollarSign, Mail, User, Eye, SearchX, Sparkles } from 'lucide-react';

interface LeadTableProps {
  leads: Lead[];
  isLoading: boolean;
  onStatusChange: (id: number, status: LeadStatus) => Promise<void>;
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
              /* Enhanced Illustration Empty State */
              <tr>
                <td colSpan={6} className="py-16 px-6 text-center">
                  <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                    <div className="relative mb-5">
                      <div className="w-20 h-20 rounded-3xl bg-[#F3EFE6] border border-[#DFD8C8] flex items-center justify-center text-[#1F3B2C] shadow-inner">
                        <SearchX className="w-10 h-10 stroke-[1.5]" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#1F3B2C] text-white flex items-center justify-center shadow-md">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-[#1A241E] mb-2">No leads to display</h3>
                    <p className="text-xs text-[#5C5449] leading-relaxed font-light mb-4">
                      No prospect records match your current filter parameters. Try clearing your search query or submit a test lead from the landing page.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#F8F5EF]/60 transition-colors group">
                  <td className="py-5 px-6 font-semibold text-[#1A241E]">
                    <div className="font-medium text-[#1A241E]">{lead.name}</div>
                    <div className="text-[11px] text-[#7C7267] font-normal">Lead #{lead.id}</div>
                  </td>
                  <td className="py-5 px-6 text-xs text-[#5C5449] font-medium">
                    <a
                      href={`mailto:${lead.email}`}
                      className="hover:text-[#1F3B2C] transition-colors underline underline-offset-2 decoration-[#DFD8C8]"
                    >
                      {lead.email}
                    </a>
                  </td>
                  <td className="py-5 px-6 font-bold text-[#1F3B2C]">{lead.budget || 'Not specified'}</td>
                  <td className="py-5 px-6">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="py-5 px-6 text-xs text-[#5C5449]">{formatDate(lead.createdAt)}</td>
                  <td className="py-5 px-6 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F5EF] hover:bg-[#1F3B2C] hover:text-white text-[#1F3B2C] border border-[#DFD8C8] text-xs font-bold transition-all shadow-sm"
                        title="View Lead Details Modal"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View
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

      {/* Enhanced Lead Detail Modal */}
      <LeadDetailModal
        lead={selectedLead}
        isOpen={Boolean(selectedLead)}
        onClose={() => setSelectedLead(null)}
        onStatusChange={async (id, status) => {
          await onStatusChange(id, status);
          if (selectedLead && selectedLead.id === id) {
            setSelectedLead({ ...selectedLead, status });
          }
        }}
      />
    </>
  );
};
