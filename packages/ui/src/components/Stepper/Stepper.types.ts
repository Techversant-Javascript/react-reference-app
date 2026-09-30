import { ReactNode } from 'react';

export type StepperOrientation = | 'horizontal'| 'vertical';
export type StepStatus = | 'completed'| 'active'| 'upcoming'| 'error';
export type StepperVariant = |'solid' | 'soft'| 'outline';

export interface StepItem {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  status?: StepStatus;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep?: number;
  orientation?: StepperOrientation;
  variant?: StepperVariant;
  className?: string;
}