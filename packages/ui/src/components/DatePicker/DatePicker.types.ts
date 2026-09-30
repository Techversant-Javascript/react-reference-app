export type DatePickerVariant = 'day' | 'month' | 'year';

export interface DatePickerProps {
  value?: Date | null | [Date | null, Date | null];
  onChange?: (date: Date | null | [Date | null, Date | null]) => void;
  variant?: DatePickerVariant;
  placeholder?: string;
  disabled?: boolean;
  isRange?: boolean;
  format?: string;
  locale?: string;
  error?: boolean;
  showTime?: boolean;
  showSeconds?: boolean;
  helperText?: string;
}