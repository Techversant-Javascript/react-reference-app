import { forwardRef, useCallback, useEffect, useId, useMemo, useRef, useState, } from 'react';
import type { AutocompleteOption, AutocompleteProps, } from './SearchableSelect.types';
import {
  Chip,
  ChipRemove,
  ClearButton,
  Dropdown,
  EmptyState,
  InputWrapper,
  LoadingSpinner,
  Option,
  StyledInput,
  Wrapper,
} from './SearchableSelect.styles';

export const SearchableSelect = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      value,
      defaultValue = null,
      onChange,
      variant = 'outlined',
      size = 'md',
      multiple = false,
      clearable = false,
      disabled = false,
      isLoading = false,
      noOptionsText = 'No options found',
      placeholder = 'Search...',
      ...rest
    },
    ref,
  ) => {
    const inputId = useId();

    const wrapperRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const isControlled = value !== undefined;

    const [internalValue, setInternalValue] = useState<
      AutocompleteOption | AutocompleteOption[] | null
    >(defaultValue);

    useEffect(() => {
      setHighlightedIndex(0);
    }, [search]);

    const selectedValue = isControlled ? value : internalValue;

    const selectedArray = useMemo(() => {
      if (!selectedValue) return [];

      return Array.isArray(selectedValue)
        ? selectedValue
        : [selectedValue];
    }, [selectedValue]);

    const filteredOptions = useMemo(() => {
      return options.filter(option =>
        option.label.toLowerCase().includes(search.toLowerCase()),
      );
    }, [options, search]);

    const updateValue = useCallback(
      (newValue: AutocompleteOption | AutocompleteOption[] | null) => {
        if (!isControlled) {
          setInternalValue(newValue);
        }

        onChange?.(newValue);
      },
      [isControlled, onChange],
    );

    const handleSelect = useCallback(
      (option: AutocompleteOption) => {
        if (multiple) {
          const exists = selectedArray.some(
            item => item.value === option.value,
          );

          const updated = exists
            ? selectedArray.filter(item => item.value !== option.value)
            : [...selectedArray, option];

          updateValue(updated);

          setSearch('');
        } else {
          updateValue(option);
          setSearch(option.label);
          setIsOpen(false);
        }
      },
      [multiple, selectedArray, updateValue],
    );

    const handleRemove = useCallback(
      (valueToRemove: string) => {
        const updated = selectedArray.filter(
          item => item.value !== valueToRemove,
        );

        updateValue(updated);
      },
      [selectedArray, updateValue],
    );

    const handleClear = useCallback(() => {
      updateValue(multiple ? [] : null);
      setSearch('');
    }, [multiple, updateValue]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault();
            setHighlightedIndex(prev =>
              prev < filteredOptions.length - 1 ? prev + 1 : prev,
            );
            break;

          case 'ArrowUp':
            event.preventDefault();
            setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0));
            break;

          case 'Enter':
            event.preventDefault();

            if (filteredOptions[highlightedIndex]) {
              handleSelect(filteredOptions[highlightedIndex]);
            }

            break;

          case 'Escape':
            setIsOpen(false);
            break;

          case 'Backspace':
            if (
              multiple &&
              !search &&
              selectedArray.length > 0
            ) {
              handleRemove(
                selectedArray[selectedArray.length - 1].value,
              );
            }

            break;

          default:
            break;
        }
      },
      [
        filteredOptions,
        handleRemove,
        handleSelect,
        highlightedIndex,
        multiple,
        search,
        selectedArray,
      ],
    );

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);

      return () => {
        document.removeEventListener(
          'mousedown',
          handleOutsideClick,
        );
      };
    }, []);
  // multiple placeholder
    const inputPlaceholder =
      multiple && selectedArray.length > 0
        ? ''
        : placeholder;

    return (
      <Wrapper ref={wrapperRef}>
        <InputWrapper
          $variant={variant}
          $size={size}
          $isOpen={isOpen}
          $disabled={disabled}
          onClick={() => setIsOpen(true)}
        >
          {multiple &&
            selectedArray.map(item => (
              <Chip data-testid={`chip-${item.value}`} key={item.value}>
                {item.label}

                <ChipRemove
                  type="button"
                  onClick={() => handleRemove(item.value)}
                >
                  ×
                </ChipRemove>
              </Chip>
            ))}

          <StyledInput
            {...rest}
            id={inputId}
            ref={ref}
            value={search}
            disabled={disabled}
            placeholder={inputPlaceholder}
            onFocus={() => {
              setIsOpen(true);

              if (!multiple) {
                setSearch('');
              }
            }}
            onChange={event => {
              setSearch(event.target.value);
              setIsOpen(true);
            }}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-expanded={isOpen}
            aria-controls={`${inputId}-listbox`}
            aria-autocomplete="list"
          />

          {isLoading && <LoadingSpinner />}

          {clearable &&
            (selectedArray.length > 0 || search) && (
              <ClearButton
                type="button"
                onClick={handleClear}
                aria-label="Clear"
              >
                ×
              </ClearButton>
            )}
        </InputWrapper>

        {isOpen && (
          <Dropdown role="listbox" id={`${inputId}-listbox`}>
            {filteredOptions.length === 0 ? (
              <EmptyState>{noOptionsText}</EmptyState>
            ) : (
              filteredOptions.map((option, index) => {
                const isSelected = selectedArray.some(
                  item => item.value === option.value,
                );

                return (
                  <Option
                    key={option.value}
                    $active={highlightedIndex === index}
                    $disabled={option.disabled}
                    aria-selected={isSelected}
                    role="option"
                    onMouseDown={() => handleSelect(option)}
                  >
                    {option.label}
                  </Option>
                );
              })
            )}
          </Dropdown>
        )}
      </Wrapper>
    );
  },
);

SearchableSelect.displayName = 'SearchableSelect';