import { InputHTMLAttributes } from "react";

export type RadioVariant = "default" | "primary" | "error";
export type RadioSize = "small" | "medium" | "large";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  variant?: RadioVariant;

  value: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;

  size?: RadioSize; 

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: (el: HTMLInputElement | null) => void;
}
