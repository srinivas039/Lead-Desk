import React from 'react';
import { LeadStatus } from '../types/lead';

interface StatusBadgeProps {
  status: LeadStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    case 'NEW':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EBF3FA] text-[#1D5C96] border border-[#D0E2F3]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D5C96] animate-pulse" />
          NEW
        </span>
      );
    case 'CONTACTED':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FDF2EB] text-[#C85A32] border border-[#F6DACB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
          CONTACTED
        </span>
      );
    case 'CLOSED':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EBF4EE] text-[#1F3B2C] border border-[#C8E2D2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1F3B2C]" />
          CLOSED
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F3EFE6] text-[#2A2621] border border-[#E9E3D5]">
          {status}
        </span>
      );
  }
};
