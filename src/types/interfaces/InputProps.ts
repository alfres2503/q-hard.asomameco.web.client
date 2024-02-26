export interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  color?: "orange" | "blue" | "white";
  className?: string;
  isDisabled?: boolean;
}
