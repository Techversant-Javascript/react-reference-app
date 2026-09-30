import {cloneElement,forwardRef,isValidElement,useEffect,useRef,useState,} from 'react';
import type { PopoverProps } from './Popover.types';
import {PopoverWrapper,PopoverContent,} from './Popover.styles';
  
  export const Popover = forwardRef<
    HTMLDivElement,
    PopoverProps
  >(
    (
      {
        children,
        content,
        trigger = 'click',
        open,
        defaultOpen = false,
        onOpenChange,
        disabled = false,
      },
      ref
    ) => {
      const [internalOpen, setInternalOpen] =
        useState(defaultOpen);
  
      const wrapperRef = useRef<HTMLDivElement | null>(null);
  
      const isControlled = open !== undefined;
  
      const isOpen = isControlled ? open : internalOpen;
  
      const setOpen = (value: boolean) => {
        if (!isControlled) {
          setInternalOpen(value);
        }
  
        onOpenChange?.(value);
      };
  
      useEffect(() => {
        if (
          trigger !== 'click' ||
          !isOpen
        ) {
          return;
        }
  
        const handleOutsideClick = (
          event: MouseEvent
        ) => {
          if (
            wrapperRef.current &&
            !wrapperRef.current.contains(
              event.target as Node
            )
          ) {
            setOpen(false);
          }
        };
  
        document.addEventListener(
          'mousedown',
          handleOutsideClick
        );
  
        return () => {
          document.removeEventListener(
            'mousedown',
            handleOutsideClick
          );
        };
      }, [isOpen, trigger]);
  
      useEffect(() => {
        const handleEscape = (
          event: KeyboardEvent
        ) => {
          if (event.key === 'Escape') {
            setOpen(false);
          }
        };
  
        document.addEventListener(
          'keydown',
          handleEscape
        );
  
        return () => {
          document.removeEventListener(
            'keydown',
            handleEscape
          );
        };
      }, []);
  
      const child =
        isValidElement(children)
          ? cloneElement(children as React.ReactElement, {
              onClick: () => {
                if (
                  trigger === 'click' &&
                  !disabled
                ) {
                  setOpen(!isOpen);
                }
              },
            })
          : children;
  
      return (
        <PopoverWrapper
            ref={wrapperRef}
          onMouseEnter={() => {
            if (
              trigger === 'hover' &&
              !disabled
            ) {
              setOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (
              trigger === 'hover'
            ) {
              setOpen(false);
            }
          }}
        >
          {child}
  
          <PopoverContent
            $open={isOpen}
            role="dialog"
            aria-hidden={!isOpen}
          >
            {content}
          </PopoverContent>
        </PopoverWrapper>
      );
    }
  );
  
  Popover.displayName = 'Popover';