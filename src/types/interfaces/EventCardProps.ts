import { ReactNode } from "react";

export interface EventCardProps {
  onClickEdit?: () => void;
  onClickAttendance?: () => void;
  color?: "orange" | "blue";
  eventName?: string;
  description?: string;
  isDisabled?: boolean;
}
