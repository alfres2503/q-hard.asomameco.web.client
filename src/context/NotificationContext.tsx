import { NotificationContextProps } from "@/types/interfaces/NotificationContextProps";
import { createContext } from "react";

export const NotificationContext = createContext<
  NotificationContextProps | undefined
>(undefined);
