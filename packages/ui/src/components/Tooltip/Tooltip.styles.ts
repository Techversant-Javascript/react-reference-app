import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  position: relative;
  display: inline-flex;
`;

export const TooltipBox = styled.div<{
  $placement: string;
  $visible: boolean;
}>`
  position: absolute;
  z-index: 1000;

  padding: 8px 10px;
  border-radius: 6px;
  background: rgba(17, 24, 39, 0.9); 
  backdrop-filter: blur(4px);
  color: white;
  font-size: 12px;
  white-space: nowrap;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.2s ease;

  ${({ $placement }) =>
    $placement === 'top' &&
    css`
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-6px);
    `}

  ${({ $placement }) =>
    $placement === 'bottom' &&
    css`
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(6px);
    `}

  ${({ $placement }) =>
    $placement === 'left' &&
    css`
      right: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(-6px);
    `}

  ${({ $placement }) =>
    $placement === 'right' &&
    css`
      left: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(6px);
    `}
`;

export const Arrow = styled.div<{
  $placement: string;
}>`
  position: absolute;
  width: 0;
  height: 0;

  ${({ $placement }) =>
    $placement === 'top' &&
    css`
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid rgba(17, 24, 39, 0.9);
    `}

  ${({ $placement }) =>
    $placement === 'bottom' &&
    css`
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid rgba(17, 24, 39, 0.9);
    `}

  ${({ $placement }) =>
    $placement === 'left' &&
    css`
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid rgba(17, 24, 39, 0.9);
    `}

  ${({ $placement }) =>
    $placement === 'right' &&
    css`
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid rgba(17, 24, 39, 0.9);
    `}
`;