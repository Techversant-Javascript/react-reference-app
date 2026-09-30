import React, { forwardRef, useEffect, useState } from "react";
import type { ToggleSwitchProps } from "./ToggleSwitch.types";
import {
    Wrapper,
    Label,
    SwitchRoot,
    Thumb,
    LoadingSpinner,
    InnerText,
} from "./ToggleSwitch.styles";

export const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleSwitchProps>(
    (
        {
            label,
            disabled = false,
            loading = false,
            defaultChecked = false,
            checked,
            onChange,
            size = "md",
            checkedText,
            uncheckedText,
            checkedIcon,
            uncheckedIcon,
            ...rest
        },
        ref,
    ) => {
        const isControlled = checked !== undefined;
        const [innerChecked, setInnerChecked] = useState(defaultChecked);
        const active = isControlled ? checked : innerChecked;

        useEffect(() => {
            if (!isControlled) {
                setInnerChecked(defaultChecked);
            }
        }, [defaultChecked, isControlled]);

        const handleToggle = () => {
            if (disabled || loading) return;

            const next = !active;

            if (!isControlled) {
                setInnerChecked(next);
            }

            onChange?.(next);
        };

        return (
            <Wrapper>
                {label && <Label $disabled={disabled}>{label}</Label>}

                <SwitchRoot
                    ref={ref}
                    type="button"
                    role="switch"
                    aria-checked={active}
                    aria-disabled={disabled}
                    disabled={disabled}
                    onClick={handleToggle}
                    $checked={active}
                    $size={size}
                    $loading={loading}
                    {...rest}
                >
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <InnerText $checked={active} $size={size}>
                                {active
                                    ? checkedIcon || checkedText
                                    : uncheckedIcon || uncheckedText}
                            </InnerText>

                            <Thumb $checked={active} $size={size} />
                        </>
                    )}
                </SwitchRoot>
            </Wrapper>
        );
    },
);

ToggleSwitch.displayName = "ToggleSwitch";
