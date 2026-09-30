import React, { useState, useRef, useEffect } from 'react';
import { 
  Wrapper, 
  InputWrapper, 
  Input, 
  RangeInput,
  IconWrapper, 
  ClearButton,
  Popup,
  Header,
  HeaderTitle,
  NavGroup,
  NavButton,
  Grid,
  Cell,
  DayName,
  RangeContainer,
  RangeSeparator,
  DateTimeContainer,
  CalendarSection,
  TimePickerSection,
  TimeColumn,
  TimeItem,
  PickerFooter,
  NowButton,
  OKButton,
  ErrorMessage,
  RangeInputsWrapper
} from './DatePicker.styles';
import type { DatePickerProps } from './DatePicker.types';

const getLocalizedMonths = (locale: string) => {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
  return Array.from({ length: 12 }, (_, i) => formatter.format(new Date(2021, i, 1)));
};

const getLocalizedDays = (locale: string) => {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  return Array.from({ length: 7 }, (_, i) => formatter.format(new Date(2021, 3, 4 + i)));
};

function formatDate(date: Date, variant: string, format?: string, showTime?: boolean, showSeconds?: boolean) {
  if (format) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const min = date.getMinutes();
    const s = date.getSeconds();
    
    return format
      .replace('YYYY', y.toString())
      .replace('YY', y.toString().slice(-2))
      .replace('MM', m.toString().padStart(2, '0'))
      .replace('M', m.toString())
      .replace('DD', d.toString().padStart(2, '0'))
      .replace('D', d.toString())
      .replace('HH', h.toString().padStart(2, '0'))
      .replace('mm', min.toString().padStart(2, '0'))
      .replace('ss', s.toString().padStart(2, '0'));
  }

  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const h = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');

  if (variant === 'year') return `${y}`;
  if (variant === 'month') return `${y}-${m}`;
  const base = `${y}-${m}-${d}`;
  if (showTime) {
    return showSeconds ? `${base} ${h}:${min}:${s}` : `${base} ${h}:${min}`;
  }
  return base;
}

export function DatePicker({
  value,
  onChange,
  variant = 'day',
  disabled,
  placeholder,
  isRange,
  format,
  locale = 'en-US',
  error,
  showTime,
  showSeconds,
  helperText,
  ...rest
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [internalDate, setInternalDate] = useState<Date | [Date | null, Date | null] | null>(
    isRange ? [null, null] : null
  );
  
  const selectedDate = value !== undefined ? value : internalDate;
  
  const [viewDate, setViewDate] = useState<Date>(() => {
    if (isRange) {
      const range = selectedDate as [Date | null, Date | null];
      return range?.[0] || new Date();
    }
    return (selectedDate as Date) || new Date();
  });

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDateSelect = (date: Date) => {
    if (isRange) {
      const range = (selectedDate as [Date | null, Date | null]) || [null, null];
      let newRange: [Date | null, Date | null];
      
      if (!range[0] || (range[0] && range[1])) {
        newRange = [date, null];
      } else {
        if (date < range[0]) {
          newRange = [date, range[0]];
        } else {
          newRange = [range[0], date];
        }
        setOpen(false);
        setIsFocused(false);
      }
      
      if (value === undefined) setInternalDate(newRange);
      onChange?.(newRange);
    } else {
      const d = new Date(date);
      if (selectedDate instanceof Date) {
        d.setHours(selectedDate.getHours());
        d.setMinutes(selectedDate.getMinutes());
        d.setSeconds(selectedDate.getSeconds());
      }
      if (value === undefined) setInternalDate(d);
      onChange?.(d);
      if (variant === 'month' || variant === 'year' || (variant === 'day' && !showTime)) {
        setOpen(false);
        setIsFocused(false);
      }

    }
  };

  const handleTimeChange = (type: 'hours' | 'minutes' | 'seconds', val: number) => {
    const d = new Date((selectedDate as Date) || new Date());
    if (type === 'hours') d.setHours(val);
    if (type === 'minutes') d.setMinutes(val);
    if (type === 'seconds') d.setSeconds(val);
    
    if (value === undefined) setInternalDate(d);
    onChange?.(d);
  };

  const renderDays = (baseDate: Date) => {
    const year = baseDate.getFullYear();
    const month = baseDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    
    const cells = [];
    const DAY_NAMES = getLocalizedDays(locale);

    DAY_NAMES.forEach(day => {
      cells.push(<DayName key={`header-${day}`}>{day}</DayName>);
    });

    for (let i = firstDay - 1; i >= 0; i--) {
      cells.push(<Cell key={`prev-${i}`} $outside disabled>{prevMonthDays - i}</Cell>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      let isSelected = false;
      let inRange = false;

      if (isRange) {
        const range = Array.isArray(selectedDate) ? selectedDate : [null, null];
        isSelected = (range[0] instanceof Date && date.toDateString() === range[0].toDateString()) || 
                     (range[1] instanceof Date && date.toDateString() === range[1].toDateString());
        if (range[0] && range[1]) inRange = date > range[0] && date < range[1];
      } else {
        const sDate = !Array.isArray(selectedDate) ? selectedDate : null;
        isSelected = sDate instanceof Date && sDate.toDateString() === date.toDateString();
      }

      cells.push(
        <Cell 
          key={i} 
          $selected={isSelected} 
          $inRange={inRange}
          onClick={(e) => { e.stopPropagation(); handleDateSelect(date); }}
        >
          {i}
        </Cell>
      );
    }

    return <Grid $columns={7}>{cells}</Grid>;
  };

  const renderMonths = () => {
    const year = viewDate.getFullYear();
    const MONTH_NAMES = getLocalizedMonths(locale);
    return (
      <Grid $columns={3}>
        {MONTH_NAMES.map((name, i) => {
          const sDate = !Array.isArray(selectedDate) ? selectedDate : null;
          const isSelected = sDate instanceof Date && sDate.getFullYear() === year && sDate.getMonth() === i;
          return (
            <Cell
              key={name}
              $selected={isSelected}
              onClick={(e) => { e.stopPropagation(); handleDateSelect(new Date(year, i, 1)); }}
            >
              {name}
            </Cell>
          );
        })}
      </Grid>
    );
  };

  const renderYears = () => {
    const startYear = Math.floor(viewDate.getFullYear() / 10) * 10;
    const cells = [];
    cells.push(<Cell key="prev-year" $outside $variant="year" disabled>{startYear - 1}</Cell>);
    for (let i = 0; i < 10; i++) {
      const year = startYear + i;
      const sDate = !Array.isArray(selectedDate) ? selectedDate : null;
      const isSelected = sDate instanceof Date && sDate.getFullYear() === year;
      cells.push(
        <Cell
          key={year}
          $selected={isSelected}
          $variant="year"
          onClick={(e) => { e.stopPropagation(); handleDateSelect(new Date(year, 0, 1)); }}
        >
          {year}
        </Cell>
      );
    }
    cells.push(<Cell key="next-year" $outside $variant="year" disabled>{startYear + 10}</Cell>);
    return <Grid $columns={3}>{cells}</Grid>;
  };

  const getHeaderTitle = (date: Date) => {
    const MONTH_NAMES = getLocalizedMonths(locale);
    if (variant === 'day') return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
    if (variant === 'month') return `${date.getFullYear()}`;
    const startYear = Math.floor(date.getFullYear() / 10) * 10;
    return `${startYear}-${startYear + 9}`;
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const empty = isRange ? ([null, null] as [null, null]) : null;
    if (value === undefined) setInternalDate(empty as any);
    onChange?.(empty as any);
  };

  const displayValue = () => {
    if (!selectedDate) return '';
    if (isRange) {
      const range = Array.isArray(selectedDate) ? selectedDate : [null, null];
      if (!range[0]) return '';
      const start = formatDate(range[0], variant, format, showTime, showSeconds);
      const end = range[1] ? formatDate(range[1], variant, format, showTime, showSeconds) : '';
      return { start, end };
    }
    const sDate = !Array.isArray(selectedDate) ? selectedDate : null;
    return sDate ? formatDate(sDate, variant, format, showTime, showSeconds) : '';
  };

  const val = displayValue();

  const renderHeader = (date: Date, onNavigate: (d: Date) => void) => (
    <Header>
      <NavGroup>
        <NavButton onClick={(e) => { e.stopPropagation(); const d = new Date(date); d.setFullYear(d.getFullYear() - 1); onNavigate(d); }}>«</NavButton>
        {variant === 'day' && <NavButton onClick={(e) => { e.stopPropagation(); const d = new Date(date); d.setMonth(d.getMonth() - 1); onNavigate(d); }}>‹</NavButton>}
      </NavGroup>
      <HeaderTitle>{getHeaderTitle(date)}</HeaderTitle>
      <NavGroup>
        {variant === 'day' && <NavButton onClick={(e) => { e.stopPropagation(); const d = new Date(date); d.setMonth(d.getMonth() + 1); onNavigate(d); }}>›</NavButton>}
        <NavButton onClick={(e) => { e.stopPropagation(); const d = new Date(date); d.setFullYear(d.getFullYear() + 1); onNavigate(d); }}>»</NavButton>
      </NavGroup>
    </Header>
  );

  const renderTimeColumn = (type: 'hours' | 'minutes' | 'seconds', count: number) => {
    const current = (selectedDate instanceof Date ? 
      (type === 'hours' ? selectedDate.getHours() : type === 'minutes' ? selectedDate.getMinutes() : selectedDate.getSeconds()) 
      : 0);
    
    return (
      <TimeColumn>
        {Array.from({ length: count }, (_, i) => (
          <TimeItem 
            key={i} 
            $active={current === i} 
            onClick={(e) => { e.stopPropagation(); handleTimeChange(type, i); }}
          >
            {i.toString().padStart(2, '0')}
          </TimeItem>
        ))}
      </TimeColumn>
    );
  };

  const hasValue = isRange ? (selectedDate as any)?.[0] : selectedDate;

  return (
    <Wrapper ref={wrapperRef} $isRange={isRange}>
      <InputWrapper 
        $disabled={disabled} 
        $error={error}
        $isFocused={isFocused || (isRange && Array.isArray(selectedDate) && (!!selectedDate[0] || !!selectedDate[1]))}
        onClick={() => !disabled && (setOpen(!open), setIsFocused(!open))}
      >
        {isRange ? (
          <RangeInputsWrapper>
            <RangeInput placeholder="Start date" readOnly value={typeof val === 'object' ? val.start : ''} disabled={disabled} />
            <RangeSeparator>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M15 6l6 6-6 6" />
              </svg>
            </RangeSeparator>
            <RangeInput placeholder="End date" readOnly value={typeof val === 'object' ? val.end : ''} disabled={disabled} />
          </RangeInputsWrapper>
        ) : (
          <Input
            placeholder={placeholder || (variant === 'day' ? 'Select date' : variant === 'month' ? 'Select month' : 'Select year')}
            readOnly
            value={typeof val === 'string' ? val : ''}
            disabled={disabled}
            {...rest}
          />
        )}
        <IconWrapper>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {hasValue && !disabled && (
            <ClearButton onClick={handleClear}>✕</ClearButton>
          )}
        </IconWrapper>
      </InputWrapper>

      {error && helperText && <ErrorMessage>{helperText}</ErrorMessage>}

      {open && (
        <Popup $isRange={isRange} $showTime={showTime}>
          {!isRange ? (
            <>
              <DateTimeContainer>
                <CalendarSection>
                  {renderHeader(viewDate, setViewDate)}
                  {variant === 'day' && renderDays(viewDate)}
                  {variant === 'month' && renderMonths()}
                  {variant === 'year' && renderYears()}
                </CalendarSection>
                {showTime && variant === 'day' && (
                  <TimePickerSection>
                    {renderTimeColumn('hours', 24)}
                    {renderTimeColumn('minutes', 60)}
                    {renderTimeColumn('seconds', 60)}
                  </TimePickerSection>
                )}
              </DateTimeContainer>
              {showTime && (
                <PickerFooter>
                  <NowButton onClick={(e) => { e.stopPropagation(); handleDateSelect(new Date()); setOpen(false); setIsFocused(false); }}>Now</NowButton>
                  <OKButton onClick={(e) => { e.stopPropagation(); setOpen(false); setIsFocused(false); }}>OK</OKButton>
                </PickerFooter>
              )}
            </>
          ) : (
            <RangeContainer>
              <CalendarSection>
                {renderHeader(viewDate, setViewDate)}
                {renderDays(viewDate)}
              </CalendarSection>
              <CalendarSection $hasBorder>
                {renderHeader(
                  new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1),
                  (d) => setViewDate(new Date(d.getFullYear(), d.getMonth() - 1, 1))
                )}
                {renderDays(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
              </CalendarSection>
            </RangeContainer>
          )}
        </Popup>
      )}
    </Wrapper>
  );
}
