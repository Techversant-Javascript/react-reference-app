import type React from 'react';

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';
export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaVariant = 'outline' | 'soft' | 'neutral';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  size?: TextareaSize;
  resize?: TextareaResize;
  showCharacterCount?: boolean;
 error?: string;
  label?: string;
}