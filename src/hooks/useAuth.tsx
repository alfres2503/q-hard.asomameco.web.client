import { useContext } from "react";
import { MemberContext } from "@/context/MemberContext";

export const useMember = () => {
  const context = useContext(MemberContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
