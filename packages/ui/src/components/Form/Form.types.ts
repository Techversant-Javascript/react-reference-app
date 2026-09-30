import React from 'react';

export interface BaseFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  autoComplete?: string;
}

export interface InputFieldProps
  extends BaseFieldProps {
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface LoginFormProps {
  values: LoginValues;
  errors?: Partial<LoginValues>;
  loading?: boolean;
  disabled?: boolean;
  showPasswordToggle?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => void;
}

export interface UploadFormProps {
  title?: string;
  description?: string;
  accept?: string;
  disabled?: boolean;
  file?: File | null;
  error?: string;
  onFileChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface FormFieldProps
  extends InputFieldProps {}