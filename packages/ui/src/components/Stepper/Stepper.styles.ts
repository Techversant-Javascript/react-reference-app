import styled, { css } from 'styled-components';
import {StepperOrientation,StepStatus,StepperVariant} from './Stepper.types';

interface StyledStepperProps {
  $orientation: StepperOrientation;
}

interface StyledStepProps {
  $status: StepStatus;
  $variant: StepperVariant;
}

export const StepperContainer =
  styled.div<StyledStepperProps>`
    display: flex;

    ${({ $orientation }) =>
      $orientation === 'vertical'
        ? css`
            flex-direction: column;
            gap: 24px;
          `
        : css`
            align-items: flex-start;
            gap: 16px;
          `}
  `;

export const StepItemWrapper =
  styled.div<StyledStepperProps>`
    display: flex;
    position: relative;

    ${({ $orientation }) =>
      $orientation === 'vertical'
        ? css`
            align-items: flex-start;
            gap: 16px;
          `
        : css`
            align-items: center;
            flex: 1;
          `}
  `;

const variantStyles = {
  solid: css<StyledStepProps>`
    background: ${({ $status }) =>
      $status === 'completed' ||
      $status === 'active'
        ? 'var(--color-brand-700)'
        : 'var(--color-gray-300)'};

    color: var(--color-white);
    border: none;
  `,

  soft: css<StyledStepProps>`
    background: ${({ $status }) =>
      $status === 'completed' ||
      $status === 'active'
        ? 'var(--color-brand-700)'
        : 'var(--color-gray-100)'};

    color: var(--color-black);
    border: none;
  `,

  outline: css<StyledStepProps>`
    background: transparent;

    border: 2px solid
      ${({ $status }) =>
        $status === 'completed' ||
        $status === 'active'
          ? 'var(--color-brand-700)'
          : 'var(--color-gray-300)'};

    color:
      ${({ $status }) =>
        $status === 'completed' ||
        $status === 'active'
          ? 'var(--color-brand-700)'
          : 'var(--color-gray-500)'};
  `,
};

export const StepIndicator =
  styled.div<StyledStepProps>`
    width: 40px;
    height: 40px;

    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 600;

    transition:
      background 0.2s ease,
      border-color 0.2s ease;

    ${({ $variant }) =>
      variantStyles[$variant]}

    ${({ $status }) =>
      $status === 'error' &&
      css`
        background: var(--color-danger-500);
        color: var(--color-white);
        border-color: var(--color-danger-500);
      `}
  `;

export const StepContent =
  styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `;

export const StepTitle =
  styled.div`
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-primary);
  `;

export const StepDescription =
  styled.div`
    font-size: 13px;
    color: var(--color-text-primary);
  `;

interface ConnectorProps {
  $orientation: StepperOrientation;
}

export const Connector =
  styled.div<ConnectorProps>`
    background: var(--color-gray-300);

    ${({ $orientation }) =>
      $orientation === 'vertical'
        ? css`
            width: 2px;
            height: 40px;
            margin-left: 19px;
          `
        : css`
            height: 2px;
            flex: 1;
            margin-top: 20px;
          `}
  `;