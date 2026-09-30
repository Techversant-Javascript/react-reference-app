import styled, { css, keyframes } from "styled-components";
import type { ToggleSize } from "./ToggleSwitch.types";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const sizeMap = {
    sm: {
        width: "42px",
        height: "24px",
        thumb: "18px",
        padding: "3px",
        font: "10px",
        move: "18px",
    },

    md: {
        width: "60px",
        height: "30px",
        thumb: "24px",
        padding: "3px",
        font: "11px",
        move: "30px",
    },

    lg: {
        width: "64px",
        height: "36px",
        thumb: "30px",
        padding: "3px",
        font: "12px",
        move: "28px",
    },
};

export const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`;

export const Label = styled.span<{
    $disabled?: boolean;
}>`
    font-size: 14px;
    font-weight: 500;
    color: ${({ $disabled }) =>
        $disabled ? "var(--color-gray-400)" : "var( --color-text-primary)"};
`;
export const SwitchRoot = styled.button<{
    $checked: boolean;
    $size: ToggleSize;
    $loading?: boolean;
}>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
    transition: all 0.2s ease;
    padding: ${({ $size }) => sizeMap[$size].padding};

    width: ${({ $size }) => sizeMap[$size].width};

    height: ${({ $size }) => sizeMap[$size].height};

    border-radius: 999px;

    background: ${({ $checked }) =>
        $checked ? "var(--color-brand-500)" : "var(--color-gray-300)"};

    &:hover:not(:disabled) {
        opacity: 0.92;
    }

    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.65;
    }

    ${({ $loading }) =>
        $loading &&
        css`
            justify-content: center;
        `}
`;
export const Thumb = styled.span<{
    $checked: boolean;
    $size: ToggleSize;
}>`
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%)
        translateX(
            ${({ $checked, $size }) => ($checked ? sizeMap[$size].move : "0px")}
        );

    width: ${({ $size }) => sizeMap[$size].thumb};

    height: ${({ $size }) => sizeMap[$size].thumb};

    border-radius: 50%;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);

    transition: transform 0.22s ease;
`;

export const InnerText = styled.span<{
    $checked: boolean;
    $size: ToggleSize;
  }>`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
  
    justify-content: ${({ $checked }) =>
      $checked ? "flex-start" : "flex-end"};
  
    padding-left: ${({ $checked, $size }) =>
      $checked ? "8px" : `calc(${sizeMap[$size].thumb} + 6px)`};
  
    padding-right: ${({ $checked, $size }) =>
      $checked ? `calc(${sizeMap[$size].thumb} + 6px)` : "8px"};
  
    pointer-events: none;
  
    font-size: ${({ $size }) => sizeMap[$size].font};
    font-weight: 600;
    color: white;
    line-height: 1;
  `;

export const LoadingSpinner = styled.span`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.35);
    border-top-color: white;
    animation: ${spin} 0.7s linear infinite;
`;
