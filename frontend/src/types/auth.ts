export interface User {
  username: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  tokenType: string;
  username: string;
  role: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}
