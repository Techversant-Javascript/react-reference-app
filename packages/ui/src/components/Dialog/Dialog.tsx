import {forwardRef,useEffect,} from "react";
import type { DialogProps } from "./Dialog.types";  
import { Overlay,DialogContainer,Header,Title,CloseButton,Body,Footer,} from "./Dialog.styles";
  
export const Dialog = forwardRef<HTMLDivElement,DialogProps>(
    (
      {
        open,
        title,
        children,
        size = "md",
        fullscreen = false,
        closeOnEsc = true,
        closeOnOverlayClick = true,
        footer,
        onClose,
      },
      ref
    ) => {
      useEffect(() => {
        if (!closeOnEsc) return;
  
        const handleKeyDown = (
          event: KeyboardEvent
        ) => {
          if (event.key === "Escape") {
            onClose();
          }
        };
  
        document.addEventListener(
          "keydown",
          handleKeyDown
        );
  
        return () => {
          document.removeEventListener(
            "keydown",
            handleKeyDown
          );
        };
      }, [closeOnEsc, onClose]);
  
      if (!open) return null;
  
      return (
        <Overlay
          onClick={() => {
            if (closeOnOverlayClick) {
              onClose();
            }
          }}
        >
          <DialogContainer
            ref={ref}
            $size={size}
            $fullscreen={fullscreen}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <Header>
                <Title id="dialog-title">
                  {title}
                </Title>
  
                <CloseButton
                  aria-label="Close dialog"
                  onClick={onClose}
                >
                  ✕
                </CloseButton>
              </Header>
            )}
  
            <Body>{children}</Body>
  
            {footer && (
              <Footer>{footer}</Footer>
            )}
          </DialogContainer>
        </Overlay>
      );
    }
  );
  
  Dialog.displayName = "Dialog";