import React, { forwardRef, useState } from 'react';

import {
    Wrapper,
    Input,
    StepButton,
    CurrencyPrefix,
} from './NumberInput.styles';

import { NumberInputProps } from './NumberInput.types';

export const NumberInput = forwardRef<
    HTMLInputElement,
    NumberInputProps
>(
    (
        {
            variant = 'default',
            value,
            onValueChange,
            currencySymbol = '$',
            min,
            max,
            step = 1,
            disabled,
            error,
            ...props
        },
        ref,
    ) => {

        const [inputValue, setInputValue] = useState(value?.toString() ?? '',);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
            setInputValue(e.target.value);
          
            if (e.target.value !== '') {
              onValueChange?.(Number(e.target.value));
            }
          };

        const increase = () => {
            const current = value ?? 0;

            const next = current + step;

            if (max !== undefined && next > max) {
                return;
            }

            onValueChange?.(next);
        };

        const decrease = () => {
            const current = value ?? 0;

            const next = current - step;

            if (min !== undefined && next < min) {
                return;
            }

            onValueChange?.(next);
        };

        return (
            <Wrapper
                $disabled={disabled}
                $error={error}
            >
                {variant === 'stepper' && (
                    <StepButton
                        type="button"
                        onClick={decrease}
                        disabled={disabled}
                        aria-label="Decrease value"
                    >
                        −
                    </StepButton>
                )}

                {variant === 'currency' && (
                    <CurrencyPrefix>
                        {currencySymbol}
                    </CurrencyPrefix>
                )}

                <Input
                    ref={ref}
                    type="number"
                    value={inputValue}
                    onChange={handleChange}
                    disabled={disabled}
                    min={min}
                    max={max}
                    step={step}
                    {...props}
                />

                {variant === 'stepper' && (
                    <StepButton
                        type="button"
                        onClick={increase}
                        disabled={disabled}
                        aria-label="Increase value"
                    >
                        +
                    </StepButton>
                )}
            </Wrapper>
        );
    },
);

NumberInput.displayName = 'NumberInput';