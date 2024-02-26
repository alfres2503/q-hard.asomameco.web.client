import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthService } from "@/utils/AuthService";

export const MemberContext = createContext({});

export const MemberProvider = ({ children }: { children: React.ReactNode }) => {
  const authService = new AuthService();
  const [currentMember, setCurrentMember] = useState(null);

  useEffect(() => {
    const storedMember = localStorage.getItem("currentMember");

    if (storedMember) {
      console.log(JSON.parse(storedMember));
      setCurrentMember(JSON.parse(storedMember));
    }
  }, []);

  const loginMember = async (member: any) => {
    const loggedInMember = await authService.loginMember(member);
    setCurrentMember(loggedInMember);
  };

  return (
    <MemberContext.Provider value={{ currentMember, loginMember }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMemberProvider = () => useContext(MemberContext);
