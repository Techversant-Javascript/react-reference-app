import type React from 'react';

export type AutocompleteVariant = 'filled' | 'outlined' | 'underlined';

export type AutocompleteSize = 'sm' | 'md' | 'lg';

export interface AutocompleteOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface AutocompleteProps
extends Omit<React.InputHTMLAttributes<HTMLInputElement>,
'size' | 'value' | 'defaultValue' | 'onChange'> {
  options: AutocompleteOption[];

  value?: AutocompleteOption | AutocompleteOption[] | null;

  defaultValue?: AutocompleteOption | AutocompleteOption[] | null;

  onChange?: (value: AutocompleteOption | AutocompleteOption[] | null) => void;

  variant?: AutocompleteVariant;

  size?: AutocompleteSize;

  multiple?: boolean;

  clearable?: boolean;

  disabled?: boolean;

  isLoading?: boolean;

  noOptionsText?: string;

  placeholder?: string;
}