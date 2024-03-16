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

export interface memberContextProps {
  currentMember: Member | null;
  loginMember: (member: any) => void;
}
