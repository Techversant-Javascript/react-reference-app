import { ReactNode } from "react";

export type RadioGroupSize = "small" | "medium" | "large";
export type RadioGroupDirection = "row" | "column";
export type RadioGroupStyle = "solid" | "outline";

export interface RadioOptionType {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  children?: ReactNode;
  direction?: RadioGroupDirection;
  size?: RadioGroupSize;
  options?: RadioOptionType[];
  buttonStyle?: RadioGroupStyle;
  inputRef?: (el: HTMLInputElement | null) => void;
}

