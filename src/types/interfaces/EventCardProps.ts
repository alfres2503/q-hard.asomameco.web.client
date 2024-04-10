import { ReactNode } from "react";

export interface EventCardProps {
  onClickEdit?: () => void;
  onClickAttendance?: () => void;
  onClickView?: () => void;
  color?: "orange" | "blue";
  eventName?: string;
  description?: string;
  dateAndTime?: string;
  place?: string;
  isDisabled?: boolean;
  isAdmin?:boolean;
}
