import type React from 'react';

export interface Option {
    label: string;
    value: string;
}

export type SelectVariant = 'outline' | 'filled' | 'borderless' | 'underlined';

export type selectSize = 'sm' | 'md' | 'lg';

export interface selectProps
        extends Omit<
        React.SelectHTMLAttributes<HTMLDivElement>,
        "size" | "onChange"
      > {
    options: Option[];

    value?: string | string[];  //controlled
    defaultValue?: string | string[];  //uncontrolled

    onChange?: (value: string | string[]) => void;

    placeholder?: string;
    isMulti?: boolean;
    disabled?: boolean;
    size?: selectSize;
    variant?: SelectVariant;
}