import React, { useState, useRef, useEffect } from 'react';
import {
  BreadcrumbNav,
  BreadcrumbList,
  BreadcrumbListItem,
  BreadcrumbLink,
  BreadcrumbSeparatorWrapper,
  ItemIconWrapper,
  DropdownWrapper,
  DropdownTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from './Breadcrumb.styles';
import type { BreadcrumbProps, BreadcrumbSeparator } from './Breadcrumb.types';

// ─── Built-in separator icons ────────────────────────────────────────────────

const ChevronSeparator = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const SlashSeparator = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="16" y1="4" x2="8" y2="20" />
  </svg>
);

const DotSeparator = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

const ArrowSeparator = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const separatorMap: Record<BreadcrumbSeparator, React.ReactNode> = {
  chevron: <ChevronSeparator />,
  slash: <SlashSeparator />,
  dot: <DotSeparator />,
  arrow: <ArrowSeparator />,
};

// ─── Dropdown item ────────────────────────────────────────────────────────────

interface DropdownItemProps {
  label: string;
  dropdown: Array<{ id?: string | number; label: string; href?: string }>;
  size: 'sm' | 'md' | 'lg';
}

const BreadcrumbDropdownItem: React.FC<DropdownItemProps> = ({ label, dropdown, size }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownTrigger
        $size={size}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown />
      </DropdownTrigger>

      {open && (
        <DropdownMenu role="listbox">
          {dropdown.map((opt) => (
            <DropdownMenuItem key={opt.id || opt.label}>
              {opt.href ? (
                <a href={opt.href} onClick={() => setOpen(false)}>
                  {opt.label}
                </a>
              ) : (
                <span onClick={() => setOpen(false)}>{opt.label}</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

// ─── Component ───────────────────────────────────────────────────────────────

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = 'chevron',
  customSeparator,
  size = 'md',
  className,
}) => {
  const resolvedSeparator = customSeparator ?? separatorMap[separator];

  return (
    <BreadcrumbNav aria-label="Breadcrumb" className={className}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isActive = item.active ?? isLast;

          return (
            <BreadcrumbListItem key={item.id || item.label}>
              {index > 0 && (
                <BreadcrumbSeparatorWrapper $size={size} aria-hidden="true">
                  {resolvedSeparator}
                </BreadcrumbSeparatorWrapper>
              )}

              {/* Dropdown item */}
              {item.dropdown ? (
                <BreadcrumbDropdownItem
                  label={item.label}
                  dropdown={item.dropdown}
                  size={size}
                />
              ) : (
                /* Standard link / active span */
                <BreadcrumbLink
                  as={isActive ? 'span' : 'a'}
                  href={!isActive ? item.href : undefined}
                  $size={size}
                  $active={isActive}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.icon && <ItemIconWrapper>{item.icon}</ItemIconWrapper>}
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbListItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
