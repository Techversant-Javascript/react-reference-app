import { forwardRef, useEffect, useRef, useState } from "react"
import { Option, selectProps } from "./Select.types"
import {
    StyledSelectWrapper,
    StyledSelectTrigger,
    StyledDropdown,
    StyledOption,
    StyledChipsContainer,
    StyledChip,
} from './Select.styles';

export const Select = forwardRef<HTMLDivElement, selectProps>(
    (
        {
            options,
            value,
            defaultValue,
            onChange,
            placeholder = 'Select an option',
            isMulti = false,
            disabled = false,
            size = 'md',
            variant = 'outline',
            ...rest
        },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const [highlightedIndex, setHighlightedIndex] = useState(0);

        const [internalValue, setInternalValue] = useState<string | string[]>(
            defaultValue || (isMulti ? [] : '')
        );
        const wrapperRef = useRef<HTMLDivElement>(null);

        const isControlled = value !== undefined;
        const selectedValue = isControlled ? value : internalValue;

        // toggle dropdown
        const toggleDropdown = () => {
            if (disabled) return;
            setIsOpen(prev => !prev);
        };

        //close when clicking outside
        useEffect(() => {

            if (isOpen) {
                setHighlightedIndex(0);
            }
            const handleClickOutside = (e: MouseEvent) => {
                if (
                    wrapperRef.current &&
                    !wrapperRef.current.contains(e.target as Node)
                ) {
                    setIsOpen(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [isOpen])

        //  handle select
        const handleSelect = (option: Option) => {
            const updateValue = (value: string | string[]) => {
                if (!isControlled) setInternalValue(value);
                onChange?.(value);
            };

            if (isMulti) {
                const current = Array.isArray(selectedValue)
                    ? selectedValue
                    : [];

                const exists = current.includes(option.value);

                const newValue = exists
                    ? current.filter(v => v !== option.value)
                    : [...current, option.value];

                updateValue(newValue);
            } else {
                updateValue(option.value);
                setIsOpen(false);
            }
        };

        // display label
        const getDisplayValue = () => {
            if (isMulti) {
                const values = selectedValue as string[];
                if (!values || values.length === 0) return placeholder;

                return options
                    .filter(opt => values.includes(opt.value))
                    .map(opt => opt.label)
                    .join(', ');
            }

            const selected = options.find(opt => opt.value === selectedValue);
            return selected?.label || placeholder;
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (!isOpen) return;

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    setHighlightedIndex(prev =>
                        prev < options.length - 1 ? prev + 1 : prev
                    );
                    break;

                case 'ArrowUp':
                    e.preventDefault();
                    setHighlightedIndex(prev =>
                        prev > 0 ? prev - 1 : prev
                    );
                    break;

                case 'Enter':
                    e.preventDefault();
                    const option = options[highlightedIndex];
                    if (option) handleSelect(option);
                    break;

                case 'Escape':
                    setIsOpen(false);
                    break;
            }
        };

        return (
            <StyledSelectWrapper ref={wrapperRef}>
                <StyledSelectTrigger
                    ref={ref}
                    onClick={toggleDropdown}
                    onKeyDown={handleKeyDown}
                    role="combobox"
                    tabIndex={0} //div is not focusable by default,this makes it keyboard accessible
                    $size={size}
                    $variant={variant}
                    aria-expanded={isOpen}
                    {...rest}
                >
                    {isMulti ? (
                        <StyledChipsContainer>
                            {(selectedValue as string[])?.length ? (
                                options
                                    .filter(opt => (selectedValue as string[]).includes(opt.value))
                                    .map(opt => (
                                        <StyledChip
                                        key={opt.value}
                                        onClick={(e) => {
                                          e.stopPropagation(); // Only removes chip otherwise Clicking "X" will ALSO open/close dropdown "x"
                                          handleSelect(opt);   // toggle remove
                                        }}
                                      >
                                        {opt.label} ✕
                                      </StyledChip>
                                    ))
                            ) : (
                                <span>{placeholder}</span>
                            )}
                        </StyledChipsContainer>
                    ) : (
                        getDisplayValue()
                    )}
                </StyledSelectTrigger>

                {isOpen && (
                    <StyledDropdown>
                        {options.map((option, index) => (
                            <StyledOption
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                $active={index === highlightedIndex}
                            >
                                {option.label}
                            </StyledOption>
                        ))}
                    </StyledDropdown>
                )}
            </StyledSelectWrapper>
        );
    }
);

Select.displayName = 'Select';

