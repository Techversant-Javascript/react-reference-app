import type { InputHTMLAttributes } from 'react';

export type FileUploadVariant = | 'basic'| 'dropzone'| 'multiple'| 'image-preview';

export interface FileUploadProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: FileUploadVariant;
  label?: string;
  multiple?: boolean;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  onFilesChange?: (files: File[]) => void;
}