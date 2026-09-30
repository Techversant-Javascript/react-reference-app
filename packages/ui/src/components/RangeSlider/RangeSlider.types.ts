import { InputHTMLAttributes } from "react";

export type SliderVariant = "primary" | "secondary";
export type SliderSize = "sm" | "md" | "lg";

export interface RangeSliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: SliderVariant;
  size?: SliderSize;
  orientation?: "horizontal" | "vertical";
  showValue?: boolean;
  showTooltip?: boolean;
}