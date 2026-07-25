import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lead, LeadStatus } from '../types/lead';
import { StatusBadge } from './StatusBadge';
import { 
  X, 
  Mail, 
  DollarSign, 
  Calendar, 
  MessageSquare, 
  Tag, 
  CheckCircle2, 
  Clock, 
  UserCheck,
  Hash
} from 'lucide-react';

interface LeadDetailModalProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (id: number, status: LeadStatus) => Promise<void>;
}

export const LeadDetailModal: React.FC<LeadDetailModalProps> = ({
  lead,
  isOpen,
  onClose,
  onStatusChange,
}) => {
  const [isUpdating, setIsUpdating] = React.useState(false);

  if (!isOpen || !lead) return null;

  const handleStatusClick = async (newStatus: LeadStatus) => {
    if (newStatus === lead.status || isUpdating) return;
    setIsUpdating(true);
    try {
      await onStatusChange(lead.id, newStatus);
    } finally {
      setIsUpdating(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Just now';
    try {
      return new Date(dateString).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A241E]/40 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#DFD8C8] shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="px-6 py-5 bg-[#F9F6F0] border-b border-[#E9E3D5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1F3B2C]/10 border border-[#1F3B2C]/20 flex items-center justify-center text-[#1F3B2C] font-bold text-base">
                {lead.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-lg font-serif font-medium text-[#1A241E] leading-snug">{lead.name}</h3>
                <p className="text-xs text-[#7C7267]">Lead Record ID #{lead.id}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E9E3D5] text-[#5C5449] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Status Update Quick Selector */}
            <div className="p-4 rounded-2xl bg-[#F3EFE6]/60 border border-[#E9E3D5]">
              <div className="text-xs font-bold uppercase tracking-widest text-[#7C7267] mb-3 flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#1F3B2C]" />
                Update Lead Stage
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleStatusClick('NEW')}
                  disabled={isUpdating}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all border ${
                    lead.status === 'NEW'
                      ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                      : 'bg-white text-amber-700 border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  NEW
                </button>

                <button
                  onClick={() => handleStatusClick('CONTACTED')}
                  disabled={isUpdating}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all border ${
                    lead.status === 'CONTACTED'
                      ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                      : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  CONTACTED
                </button>

                <button
                  onClick={() => handleStatusClick('CLOSED')}
                  disabled={isUpdating}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all border ${
                    lead.status === 'CLOSED'
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                      : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  CLOSED
                </button>
              </div>
            </div>

            {/* Metadata Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-[#DFD8C8] flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#1F3B2C] mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7C7267]">Email Address</div>
                  <a href={`mailto:${lead.email}`} className="text-xs font-semibold text-[#1A241E] hover:underline">
                    {lead.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DFD8C8] flex items-start gap-3">
                <DollarSign className="w-4 h-4 text-[#1F3B2C] mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7C7267]">Estimated Budget</div>
                  <div className="text-xs font-semibold text-[#1F3B2C]">{lead.budget || 'Not specified'}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DFD8C8] flex items-start gap-3">
                <Hash className="w-4 h-4 text-[#1F3B2C] mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7C7267]">Record Reference</div>
                  <div className="text-xs font-semibold text-[#1A241E]">#{lead.id}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DFD8C8] flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#1F3B2C] mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7C7267]">Submitted Date</div>
                  <div className="text-xs font-semibold text-[#1A241E]">{formatDate(lead.createdAt)}</div>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#7C7267] mb-2 flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#1F3B2C]" />
                Prospect Inquiry Message
              </div>
              <div className="p-5 rounded-2xl bg-[#F9F6F0] border border-[#E9E3D5] text-xs sm:text-sm text-[#1A241E] leading-relaxed whitespace-pre-wrap font-light">
                {lead.message || 'No additional message provided.'}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 bg-[#F9F6F0] border-t border-[#E9E3D5] flex justify-between items-center">
            <StatusBadge status={lead.status} />
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#1F3B2C] hover:bg-[#2B4E3C] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
