import styled, { css } from "styled-components";
import { CardVariant } from "./Card.types";

const variantStyles = {
  elevated: css`
      background: var(--color-white);
      box-shadow: var(--shadow-lg);
  
      &:hover {
        box-shadow: var(--shadow-lg);
        transform: translateY(-4px);
      }
    `,

  outline: css`
      background: var(--color-white);
      border: 1px solid var(--color-gray-300);
      box-shadow: var(--shadow-md);

      &:hover {
    border-color: var(--color-brand-500);
  }
    `,

  filled: css`
      background: var(--color-gray-200);
      box-shadow: var(--shadow-md);
    `,

  ghost: css`
      background: transparent;
      border: 1px dashed var(--color-gray-300);
      box-shadow: var(--shadow-md);
    `,
};

export const CardWrapper = styled.div<{ $variant: CardVariant }>`
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  ${({ $variant }) => variantStyles[$variant]}
`;

export const Cover = styled.div`
  width: 100%;
  img {
    width: 100% ;
    height: 200px;
    object-fit: cover;
    display: block;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
    font-weight: 700;
  line-height: 1.3;
  color: var(--color-gray-900);
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-gray-600);
`;

export const Content = styled.div`
  padding: 20px;
  color: var(--color-black);
`;

export const Footer = styled.div`
  padding: 16px 20px;
  border-top: 1px solid var(--color-gray-200);
`;
