import { api } from './api';
import { AuthResponse, LoginFormData } from '../types/auth';

export const authService = {
  async login(credentials: LoginFormData): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    return response.data;
  },

  logout() {
    localStorage.removeItem('leaddesk_token');
    localStorage.removeItem('leaddesk_user');
  },

  getToken(): string | null {
    return localStorage.getItem('leaddesk_token');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('leaddesk_user');
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },
};
