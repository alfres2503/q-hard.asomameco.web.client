import { Member } from "../models/Member";

export interface memberContextProps {
  currentMember: Member | null;
  loginMember: (member: any) => void;
}
