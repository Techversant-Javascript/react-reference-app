import { forwardRef, useState, type ChangeEvent } from 'react';
import type { TextareaProps } from './Textarea.types';
import { StyledTextarea, TextareaContainer, CharacterCount, ErrorMessage,Footer,
  Spacer, } from './Textarea.styles';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      resize = 'vertical',
      showCharacterCount = false,
      error,
      maxLength,
      onChange,
      value,
      defaultValue,
      ...rest
    },
    ref,
  ) => {
    // Track count internally for the UI
    const [count, setCount] = useState(
      value?.toString().length || defaultValue?.toString().length || 0
    );

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setCount(e.target.value.length);
      if (onChange) onChange(e);
    };

    const hasError = !!error;

    return (
      <TextareaContainer>
    <StyledTextarea
  ref={ref}
  $variant={variant}
  $size={size}
  $resize={resize}
  $hasError={hasError}
  maxLength={maxLength}
  onChange={handleChange}
  {...(value !== undefined ? { value } : { defaultValue })}
  {...rest}
/>
        
      <Footer>
          {typeof error === 'string' && <ErrorMessage>{error}</ErrorMessage>}
      <Spacer/>
          {showCharacterCount && maxLength !== undefined && (
            <CharacterCount $isMax={count >= maxLength}>
              {count} / {maxLength}
            </CharacterCount>
          )}
        </Footer>
      </TextareaContainer>
    );
  },
);

Textarea.displayName = 'Textarea';