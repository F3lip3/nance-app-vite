export interface User {
  id: number;
  email: string;
  name: string;
  status: 'ACTIVE' | 'REMOVED';
  role: 'ADMIN' | 'COMMON';
  created_at: Date;
  updated_at: Date;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface Session {
  access_token: string;
  user: User;
}
