import { Role } from "./Role";

export interface Member {
  id: number;
  idRole: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  role?: Role;
}
