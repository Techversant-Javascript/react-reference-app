import React, { useEffect, useState, useRef } from "react";
import type { ToastProps } from "./Toast.types";

import {
  ToastWrapper,
  IconWrap,
  Content,
  Title,
  Message,
  CloseButton,
  ProgressBar,
  StyledSpinner,
} from "./Toast.styles";

const SuccessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />
    <path
      d="M7.5 12.5L10.5 15.5L16.5 9"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const InfoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />

    <path
      d="M12 11V16"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <circle cx="12" cy="8" r="1" fill="currentColor" />
  </svg>
);

const WarningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />

    <path
      d="M12 7V13"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

const ErrorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />

    <path
      d="M15 9L9 15"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M9 9L15 15"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

function Spinner() {
  return (
    <StyledSpinner viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.2"
      />

      <path
        d="M22 12A10 10 0 0012 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </StyledSpinner>
  );
}

const getDefaultIcon = (variant: ToastProps["variant"]) => {
  switch (variant) {
    case "success":
      return <SuccessIcon />;
    case "info":
      return <InfoIcon />;
    case "warning":
      return <WarningIcon />;
    case "error":
      return <ErrorIcon />;
    case "loading":
      return <Spinner />;
    default:
      return <InfoIcon />;
  }
};

export const Toast: React.FC<ToastProps> = ({
  variant = "info",
  title = "Notification",
  message = "Toast message",
  duration = 2000,
  closable = true,
  visible = true,
  icon,
  position = "topRight",
  showProgress = true,
  onClose,
  pauseOnHover = true,
}) => {
  const [open, setOpen] = useState(visible);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef<any>(null);

  const remainingTime = useRef(duration);

  const startTime = useRef<number>(0);

  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  useEffect(() => {
    if (!open || duration <= 0) return;
    startTimer();
    return clearTimer;
  }, [open]);

  const startTimer = () => {
    startTime.current = Date.now();
    timerRef.current = setTimeout(() => {
      handleClose();
    }, remainingTime.current);
  };

  const clearTimer = () => {
    clearTimeout(timerRef.current);
  };

  const handleMouseEnter = () => {
    if (!pauseOnHover) return;
    setPaused(true);
    clearTimer();
    const elapsed = Date.now() - startTime.current;
    remainingTime.current -= elapsed;
  };

  const handleMouseLeave = () => {
    if (!pauseOnHover) return;
    setPaused(false);
    startTimer();
  };

  const handleClose = () => {
    clearTimer();
    setOpen(false);
    onClose?.();
  };

  if (!open) return null;

  return (
    <ToastWrapper $variant={variant} $position={position} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <IconWrap $variant={variant}>{icon ?? getDefaultIcon(variant)}</IconWrap>

      <Content>
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>

      {closable && (
        <CloseButton type="button" onClick={handleClose}>
          ×
        </CloseButton>
      )}

      {showProgress && duration > 0 && (
        <ProgressBar $variant={variant} $duration={remainingTime.current} $paused={paused} />
      )}
    </ToastWrapper>
  );
};
