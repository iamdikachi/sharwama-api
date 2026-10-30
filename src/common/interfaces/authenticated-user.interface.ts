import { Role } from '../../generated/prisma/client';

export interface AuthenticatedUser {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  role: Role;
}

export interface JwtPayload {
  sub: string;
  phone: string;
  role: Role;
  type: 'access' | 'refresh';
}

