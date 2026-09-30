import { ReactNode } from 'react';

export type TimelineVariant = | 'left' | 'right' | 'alternate' | 'activity' ;
export type TimelineOrientation = | 'vertical'| 'horizontal';

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  time?: string;
  icon?: ReactNode;
}''

export interface TimelineProps {
  items: TimelineItem[];
  variant?: TimelineVariant;
  orientation?: TimelineOrientation;
  className?: string;
}