import { HTMLAttributes } from "react";

export type MarqueeVariant = "basic" | "reverse" | "vertical";

export interface MarqueeProps
    extends HTMLAttributes<HTMLDivElement> {
    variant?: MarqueeVariant;
    duration?: "slow" | "normal" | "fast";
    gap?: "xs" | "sm" | "md" | "lg";
    pauseOnHover?: boolean;
    children: React.ReactNode;
}