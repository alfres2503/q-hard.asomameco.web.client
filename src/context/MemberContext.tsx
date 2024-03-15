import { createContext } from "react";
import { memberContextProps } from "@/types/interfaces/MemberContextProps";

export const MemberContext = createContext<memberContextProps | undefined>(
  undefined
);
