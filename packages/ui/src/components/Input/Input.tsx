import React, { forwardRef, useEffect, useState, useId } from "react";

import type { InputProps } from "./Input.types";

import {
    Wrapper,
    Label,
    InputWrap,
    StyledInput,
    Prefix,
    Suffix,
    HelperText,
    SearchButton,
    ClearButton,
    CountText,
    Spinner,
    IconButton,
} from "./Input.styles";

const EyeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.86 21.86 0 015.06-6.94" />
    <path d="M9.53 9.53A3 3 0 0012 15a3 3 0 002.47-5.47" />
    <path d="M1 1l22 22" />
    <path d="M21 12a21.86 21.86 0 00-5.06-6.94A10.94 10.94 0 0012 4c-1.61 0-3.14.37-4.53 1.03" />
  </svg>
);

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        label,
        helperText,
        status = "default",
        prefix,
        suffix,
        size = "md",
        variant = "outline",
        type = "text",
        allowClear = false,
        count = false,
        defaultValue = "",
        disabled = false,
        maxLength,
        onChange,
        onSearch,
        value,
        id,
        width,
        ...rest
    } = props;

    const generatedId = useId();
    const inputId = id || `input-${generatedId}`;
    const isControlled = value !== undefined;
    const [innerValue, setInnerValue] = useState(String(defaultValue ?? ""));
    const [searching, setSearching] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputValue = isControlled ? String(value ?? "") : innerValue;

    useEffect(() => {
        if (!isControlled) {
            setInnerValue(String(defaultValue ?? ""));
        }
    }, [defaultValue, isControlled]);

    const triggerChange = (
        e: React.ChangeEvent<HTMLInputElement> | null,
        val: string,
    ) => {
        if (!isControlled) {
            setInnerValue(val);
        }

        if (onChange) {
            if (e) {
                onChange(e); 
            } else {
                onChange({
                    target: { value: val },
                } as any);
            }
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        triggerChange(e, e.target.value);
    };

    const handleClear = () => {
        triggerChange(null, "");
    };


    const handleSearch = async () => {
        if (!onSearch) return;

        setSearching(true);

        try {
            await onSearch(inputValue);
        } finally {
            setSearching(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (type === "search" && e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    const togglePassword = () => setShowPassword((prev) => !prev);

    const finalType =
        type === "password" ? (showPassword ? "text" : "password") : type;

    const renderSuffix = () => (
        <>
            {/* Clear */}
            {allowClear && inputValue && !disabled && (
                <ClearButton
                    type="button"
                    onClick={handleClear}
                    aria-label="Clear input"
                >
                    ×
                </ClearButton>
            )}

            {type === "password" && (
                <IconButton
                    type="button"
                    onClick={togglePassword}
                    aria-label={
                        showPassword ? "Hide password" : "Show password"
                    }
                >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </IconButton>
            )}

            {/* Custom suffix */}
            {suffix && <Suffix>{suffix}</Suffix>}

            {/* Search */}
            {type === "search" && (
                <SearchButton
                    type="button"
                    disabled={disabled || searching}
                    onClick={handleSearch}
                >
                    {searching ? <Spinner /> : "Search"}
                </SearchButton>
            )}
        </>
    );

    return (
        <Wrapper $width={width}>
            {label && <Label htmlFor={inputId}>{label}</Label>}

            <InputWrap
                $size={size}
                $variant={variant}
                $status={status}
                $disabled={disabled}
            >
                {prefix && <Prefix>{prefix}</Prefix>}

                <StyledInput
                    ref={ref}
                    id={inputId}
                    type={finalType}
                    disabled={disabled}
                    value={inputValue}
                    maxLength={maxLength}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    aria-invalid={status === "error"}
                    aria-describedby={
                        helperText || count ? `${inputId}-help` : undefined
                    }
                    {...rest}
                />

                {renderSuffix()}
            </InputWrap>

            {(helperText || count) && (
                <HelperText id={`${inputId}-help`} $status={status}>
                    <span>{helperText}</span>

                    {count && (
                        <CountText>
                            {inputValue.length}
                            {maxLength ? `/${maxLength}` : ""}
                        </CountText>
                    )}
                </HelperText>
            )}
        </Wrapper>
    );
});

Input.displayName = "Input";
