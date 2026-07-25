export type LeadStatus = 'NEW' | 'CONTACTED' | 'CLOSED';

export type BudgetRange = '< $1000' | '$1000–5000' | '$5000–10000' | '> $10000';

export interface Lead {
  id: number;
  name: string;
  email: string;
  budget: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

export interface LeadCreateFormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

export interface LeadStatusUpdateData {
  status: LeadStatus;
}
