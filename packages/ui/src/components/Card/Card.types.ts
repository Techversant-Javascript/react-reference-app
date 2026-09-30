export type CardVariant = 'elevated' | 'outline' | 'filled' | 'ghost';

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    cover?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
