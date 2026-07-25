import { api } from './api';
import { Lead, LeadCreateFormData, LeadStatus } from '../types/lead';

export const leadService = {
  async createLead(data: LeadCreateFormData): Promise<Lead> {
    const response = await api.post<Lead>('/leads', data);
    return response.data;
  },

  async getAllLeads(): Promise<Lead[]> {
    const response = await api.get<Lead[]>('/admin/leads');
    return response.data;
  },

  async updateLeadStatus(id: number, status: LeadStatus): Promise<Lead> {
    const response = await api.patch<Lead>(`/admin/leads/${id}/status`, { status });
    return response.data;
  },

  async searchLeads(query: string): Promise<Lead[]> {
    const response = await api.get<Lead[]>('/admin/leads/search', {
      params: { query },
    });
    return response.data;
  },
};
