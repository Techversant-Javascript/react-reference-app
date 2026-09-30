import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isRange?: boolean }>`
  position: relative;
  display: inline-block;
  width: ${({ $isRange }) => ($isRange ? '340px' : '280px')};
  font-family: var(--font-text, sans-serif);
`;

export const InputWrapper = styled.div<{ $disabled?: boolean; $isFocused?: boolean; $error?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 1px solid ${({ $isFocused, $error }) => 
    $error ? 'var(--red-500)' : ($isFocused ? 'var(--blue-500)' : 'var(--color-border)')};
  border-radius: 12px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  box-shadow: ${({ $isFocused, $error }) => 
    $error ? '0 0 0 2px var(--red-100)' : ($isFocused ? '0 0 0 2px var(--blue-100)' : 'none')};

  background-color:var(--color-white);

  &:hover {
    border-color: ${({ $disabled, $isFocused, $error }) =>
      $disabled ? 'var(--color-border)' : ($error ? 'var(--red-500)' : ($isFocused ? 'var(--blue-500)' : 'var(--color-border-strong)'))};
  }
`;


export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  color: var(--color-black);
  cursor: inherit;

  &::placeholder {
    color: var(--color-text-disabled);
  }
`;

export const RangeInput = styled(Input)`
  flex: 1 1 0;
  min-width: 0;
  width: 0;

`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--color-text-disabled);
  position: relative;
  margin-left: 8px;
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-500);
  border: none;
  border-radius: 50%;
  color: var(--color-surface);
  font-size: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 2;

  ${InputWrapper}:hover & {
    opacity: 1;
  }

  
`;

export const ErrorMessage = styled.div`
  color: var(--red-500);
  font-size: 12px;
  margin-top: 4px;
  margin-left: 4px;
`;


export const Popup = styled.div<{ $isRange?: boolean; $showTime?: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  border-radius: 12px;
  box-shadow: var(--sh-4);
  border: 1px solid var(--color-border);
  padding: 12px;
  width: ${({ $isRange, $showTime }) => ($isRange ? '580px' : $showTime ? '480px' : '280px')};
  display: flex;
  flex-direction: column;
  background: var(--color-white);
`;

export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CalendarSection = styled.div<{ $hasBorder?: boolean }>`
  flex: 1;
  padding: 0 4px;
  ${({ $hasBorder }) => $hasBorder && 'border-left: 1px solid var(--color-border); padding-left: 12px;'}
`;


export const TimePickerSection = styled.div`
  display: flex;
  border-left: 1px solid var(--color-border);
  padding-left: 12px;
  gap: 4px;
`;

export const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 320px;
  overflow-y: auto;
  scrollbar-width: thin;

  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 10px;
  }
`;

export const TimeItem = styled.div<{ $active?: boolean }>`
  padding: 8px 0;
  text-align: center;
  font-size: 14px;
  color: ${({ $active }) => ($active ? 'var(--blue-400)' : 'var(--gray-500)')};
  background: ${({ $active }) => ($active ? 'var(--blue-50)' : 'transparent')};
  cursor: pointer;
  border-radius: 4px;
  margin: 2px 4px;

  &:hover {
    background: ${({ $active }) => ($active ? 'var(--blue-50)' : 'var(--gray-500)')};
  }
`;

export const PickerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  margin-top: 12px;
  border-top: 1px solid var(--color-success-500);
`;

export const NowButton = styled.button`
  background: none;
  border: none;
  color: var(--blue-600);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    background: var(--blue-50);
  }
`;

export const OKButton = styled.button`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-black);
  padding: 4px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: var(--color-white);
    color:var(--color-surface);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 4px;
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: var(--color-black);
  cursor: pointer;

  &:hover {
    color: var(--blue-400);
  }
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-text-disabled);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 6px;

  &:hover {
    background: var(--slate-300);
    color: var(--color-text-secondary);
  }
`;

export const NavGroup = styled.div`
  display: flex;
  gap: 4px;
`;

export const Grid = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: 2px;
`;

export const DayName = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
`;

export const Cell = styled.button<{
  $selected?: boolean;
  $isToday?: boolean;
  $outside?: boolean;
  $variant?: 'day' | 'month' | 'year';
  $inRange?: boolean;
  $rangeStart?: boolean;
  $rangeEnd?: boolean;
}>`
  height: ${({ $variant }) => ($variant === 'day' ? '36px' : '60px')};
  border-radius: 8px;
  border: ${({ $selected, $variant }) =>
    $selected && $variant === 'day' ? '1.5px solid var(--blue-500)' : '1.5px solid transparent'};
  background: ${({ $inRange, $selected }) => 
    $selected ? 'transparent' : $inRange ? 'var(--blue-50)' : 'transparent'};
  cursor: pointer;

  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: ${({ $outside, $selected, $variant }) => {
    if ($selected && ($variant === 'month' || $variant === 'year')) return 'var(--blue-600)';
    if ($outside) return 'var(--color-text-disabled)';
    return 'var(--color-black)';
  }};
  font-weight: ${({ $selected, $variant }) =>
    $selected && ($variant === 'month' || $variant === 'year') ? '600' : '400'};

  &:hover {
    background: var(--slate-400);
  }

  ${({ $selected, $variant }) =>
    $selected &&
    $variant === 'day' &&
    css`
      background: var(--color-success-500);
    `}
`;

export const RangeContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const RangeSeparator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 24px;
  padding: 0 35px 0 0 ;
  color: var(--color-text-disabled);
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid var(--color-border);
  margin-top: 8px;
`;

export const TimeInput = styled.input`
  width: 40px;
  height: 32px;
  text-align: center;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: var(--blue-500);
  }
`;

export const RangeInputsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
`;