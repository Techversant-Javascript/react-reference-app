import { forwardRef, useState } from "react";
import { DrawerContainer, Overlay, } from "./Drawer.styles";
import { DrawerProps } from "./Drawer.types";
import { Button } from "../Button";

export const Drawer = forwardRef<
  HTMLDivElement,
  DrawerProps
>(
  (
    {
      open: controlledOpen,
      defaultOpen = false,
      onClose,
      children,
      placement = "right",
      overlay = true,
      closeOnOverlayClick = true,
      title,
      footer,
      showCloseButton = true,
    },
    ref
  ) => {

    const [internalOpen, setInternalOpen] = useState(defaultOpen);

    const open =
      controlledOpen !== undefined
        ? controlledOpen
        : internalOpen;

    const handleOverlayClick = () => {
      if (closeOnOverlayClick) {
        handleClose();
      }
    };

    const handleClose = () => {
      setInternalOpen(false);
      onClose?.();
    };

    return (
      <>
        <div className="flex justify-center p-16">
          <Button onClick={() => setInternalOpen(true)}>
            Open Drawer
          </Button>
        </div>

        {overlay && (
          <Overlay
            $open={open}
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
        )}

        <DrawerContainer
          ref={ref}
          role="dialog"
          aria-modal="true"
          $open={open}
          $placement={placement}
          className='w-3 h-3'
        >
          <div className="flex items-center justify-between mb-4 p-4">
            {title && (
              <h2 className="tx-lg tx-semibold tx-white">
                {title}
              </h2>
            )}

            {showCloseButton && (
              <button
                onClick={handleClose}
                aria-label="Close drawer"
                className="tx-xl border-none cursor-pointer"
              >
                ×
              </button>
            )}
          </div>

          <div className="tx-base tx-white">
            {children}
          </div>

          {footer && (
            <div className="mt-4">
              {footer}
            </div>
          )}
        </DrawerContainer>
      </>
    );
  }
);

Drawer.displayName = "Drawer";