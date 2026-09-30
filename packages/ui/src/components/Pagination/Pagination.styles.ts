import styled, {
  css,
} from 'styled-components';
import { spin } from '../Tag/Tag.styles';

export const Wrapper =
  styled.div<{
    $align:
      | 'left'
      | 'center'
      | 'right';
  }>`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;

    justify-content: ${({ $align }) =>
      $align === 'left'
        ? 'flex-start'
        : $align === 'right'
        ? 'flex-end'
        : 'center'};
  `;

export const Button =
  styled.button<{
    $active?: boolean;
    $loading?: boolean;
  }>`
    min-width: 36px;
    height: 36px;
    padding: 0 12px;
    border-radius: 8px;
    border: 1px solid
      var(--color-gray-300);
    background: white;
    cursor: pointer;

    ${({ $active }) =>
      $active &&
      css`
        background: var(--blue-600);
        color: white;
        border-color: var(--blue-600);
      `}
    ${({ $loading }) =>
    $loading &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      margin: 10px;
    }
  `;

export const Info =
  styled.div`
    font-size: 14px;
    color: var(--color-gray-500);
    margin: 10px;
  `;

export const Spinner = styled.svg`
  width: 16px;
  height: 16px;
  animation: ${spin} 0.8s linear infinite;
`;