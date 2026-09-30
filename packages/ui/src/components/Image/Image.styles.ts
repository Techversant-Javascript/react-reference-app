import styled, { css } from 'styled-components';
import { ImageFit, ImageVariant } from './Image.types';

interface StyledImageProps {
    $variant: ImageVariant;
    $fit: ImageFit;
}

interface WrapperProps {
    $width?: string;
    $height?: string;
}

export const ImageWrapper = styled.div<WrapperProps>`
  width: ${({ $width }) => $width || '42%'};
  height: ${({ $height }) => $height || '300px'};

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  border: 1px solid var(--slate-300); 
  border-radius: var(--radius-md);

  background: var(--slate-50); 
`;

export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;

  object-fit: ${({ $fit }) => $fit};

  ${({ $variant }) =>
        $variant === 'preview' &&
        css`
      cursor: pointer;
    `}
`;

export const PreviewOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black)

  z-index: 9999;
`;

export const PreviewImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: var(--ds-radius-md);
  background: var(--color-white); 
`;

export const Placeholder = styled.div<{ $variant: string }>`
  width: 240px;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px dashed var(--slate-300); 

  background: var(--gray-400); 

  color: var(--gray-500); 

  ${({ $variant }) =>
        $variant === 'rounded' &&
        css`
      border-radius: var(--radius-lg);
    `}
`;