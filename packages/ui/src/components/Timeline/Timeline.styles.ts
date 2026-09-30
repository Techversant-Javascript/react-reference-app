import styled, { css } from "styled-components";
import { TimelineOrientation, TimelineVariant, } from "./Timeline.types";

interface StyledTimelineProps {
  $variant: TimelineVariant;
  $orientation: TimelineOrientation;
}

interface TimelineItemProps {
  $variant: TimelineVariant;
  $orientation: TimelineOrientation;
  $index: number;
}

export const TimelineWrapper =
  styled.div<StyledTimelineProps>`
    position: relative;
    width: 100%;

    ${({ $orientation }) =>
      $orientation === "vertical" ?
        css`
        padding: var(--space-xl) 0;
      `
        : css`
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: var(--space-xl) 0;
          `}
  `;

export const TimelineItemWrapper =
  styled.div<TimelineItemProps>`
    position: relative;

    ${({ $orientation }) =>
      $orientation === "vertical"
        ? css`
            width: 100%;
            display: flex;
            margin-bottom: var(--space-2xl);
          `
        : css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}

    ${({ $variant }) =>
      $variant === "left" &&
      css`
        justify-content: flex-start;
      `}

    ${({ $variant }) =>
      $variant === "right" &&
      css`
        justify-content: flex-end;
      `}

    ${({ $variant, $index }) =>
      $variant === "alternate" &&
      css`
        justify-content: ${$index % 2 === 0
          ? "flex-start"
          : "flex-end"};
      `}
  `;

export const TimelineLine = styled.div<{
  $orientation: TimelineOrientation;
}>`
  position: absolute;
  background: var(--gray-300);
  z-index: 1;

  ${({ $orientation }) =>
    $orientation === "vertical"
      ? css`
          left: 14px;
          top: 24px;
          width: 2px;
          height: calc(100% + 24px);
        `
      : css`
          top: 8px;
          left: 50%;
          width: 100%;
          height: 2px;
        `}
`;

export const TimelineDot = styled.div<{
  $orientation: TimelineOrientation;
}>`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--rose-700);
  transform: translate(-50%, -50%);
  z-index: 2;

  ${({ $orientation }) =>
    $orientation === "vertical"
      ? css`
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          left: 50%;
          top: -30px;
          transform: translateX(-50%);
        `}
`;

export const TimelineContent =
  styled.div<{
    $variant?: TimelineVariant;
    $index?: number;
    $orientation?: TimelineOrientation;
  }>`
    width: 42%;
    padding: var(--space-md);
    border-radius: var(--radius-md);
    background: var(--cyan-800);

    ${({ $variant, $index }) =>
      $variant === "alternate" &&
      css`
        text-align: ${($index ?? 0) % 2 === 0 ? "right" : "left"};
      `}
      ${({ $variant }) =>
      $variant === "right" &&
      css`
          margin-left: 58%;
          text-align: left;
        `}
      ${({ $orientation }) =>
      $orientation === "horizontal" &&
      css`
          width: 220px;
          margin-top: var(--space-lg);
          `}
  `;

export const TimelineTitle = styled.h4`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: 600;
  color: var(--gray-100);
`;

export const TimelineDescription =
  styled.p`
    margin-top: var(--space-xs);
    font-size: var(--fs-sm);
    line-height: 1.5;
    color: var(--gray-300);
  `;

export const TimelineTime = styled.span`
  display: inline-block;
  margin-top: var(--space-xs);
  font-size: var(--fs-xs);
  color: var(--gray-400);
`;

export const ActivityIconWrapper =
  styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: var(--rose-700);
    color: var(--rose-700);
    z-index: 2;
  `;

export const TimelineCenterLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: var(--gray-700);
  transform: translateX(-50%);
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: 8px;
  top: 16px;
  bottom: -32px;
  width: 2px;
  background: var(--gray-600);
`;

export const HorizontalLine = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gray-600);
  z-index: 1;

`;