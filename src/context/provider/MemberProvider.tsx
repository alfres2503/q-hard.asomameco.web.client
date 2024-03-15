import React, { useState, useEffect } from "react";
import { AuthService } from "@/services/AuthService";
import { MemberContext } from "../MemberContext";

export const MemberProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentMember, setCurrentMember] = useState(null);

  useEffect(() => {
    const storedMember = localStorage.getItem("currentMember");

    if (storedMember) {
      console.log(JSON.parse(storedMember));
      setCurrentMember(JSON.parse(storedMember));
    }
  }, []);

  const loginMember = async (member: any) => {
    const loggedInMember = await AuthService.loginMember(member);
    setCurrentMember(loggedInMember);
  };

  return (
    <MemberContext.Provider
      value={{
        currentMember,
        loginMember,
      }}
    >
      {children}
    </MemberContext.Provider>
  );
};

export default MemberProvider;
