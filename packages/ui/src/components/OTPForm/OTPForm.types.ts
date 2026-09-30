import React from 'react';

export interface OTPFormProps {
  length?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
}

export type OTPInputEvent = React.ChangeEvent<HTMLInputElement>;
export type OTPKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export type OTPPasteEvent = React.ClipboardEvent<HTMLDivElement>;