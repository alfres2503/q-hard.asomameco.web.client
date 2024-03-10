import { createContext } from "react";
import { memberContextProps } from "@/types/models/Member";

export const MemberContext = createContext<memberContextProps | undefined>(
  undefined
);
