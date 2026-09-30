import React, { useEffect, useRef, useState } from 'react';
import type {
  OTPFormProps,
  OTPInputEvent,
  OTPKeyboardEvent,
  OTPPasteEvent,
} from './OTPForm.types';

import { Wrapper, OTPInput } from './OTPForm.styles';

export const OTPForm: React.FC<OTPFormProps> = ({
  length = 6,
  disabled = false,
  autoFocus = true,
  onChange,
  onComplete,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    setOtp(Array(length).fill(''));
    inputsRef.current = Array(length).fill(null);

    if (autoFocus) {
      setTimeout(() => {
        inputsRef.current[0]?.focus();
      }, 0);
    }
  }, [length, autoFocus]);

  const emitValue = (nextOtp: string[]) => {
    const joined = nextOtp.join('');

    onChange?.(joined);

    if (
      joined.length === length &&
      !nextOtp.includes('')
    ) {
      onComplete?.(joined);
    }
  };

  const handleChange = (
    e: OTPInputEvent,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, '');

    if (!value) return;

    const nextOtp = [...otp];
    nextOtp[index] = value[value.length - 1];

    setOtp(nextOtp);
    emitValue(nextOtp);

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: OTPKeyboardEvent,
    index: number
  ) => {
    if (e.key === 'Backspace') {
      const nextOtp = [...otp];

      if (otp[index]) {
        nextOtp[index] = '';
        setOtp(nextOtp);
        emitValue(nextOtp);
        return;
      }

      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (
      e.key === 'ArrowRight' &&
      index < length - 1
    ) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (
    e: OTPPasteEvent
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, length);

    if (!pasted) return;

    const nextOtp = Array(length).fill('');

    pasted.split('').forEach((char, i) => {
      nextOtp[i] = char;
    });

    setOtp(nextOtp);
    emitValue(nextOtp);

    const focusIndex =
      pasted.length >= length
        ? length - 1
        : pasted.length;

    inputsRef.current[focusIndex]?.focus();
  };

  return (
    <Wrapper onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <OTPInput
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          value={digit}
          maxLength={1}
          disabled={disabled}
          inputMode="numeric"
          onChange={(e) =>
            handleChange(e, index)
          }
          onKeyDown={(e) =>
            handleKeyDown(e, index)
          }
        />
      ))}
    </Wrapper>
  );
};