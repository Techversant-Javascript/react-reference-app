import styled from 'styled-components';
import { SlideProps } from './Carousel.types';

interface TrackProps {
  $orientation: 'horizontal' | 'vertical';
  $currentIndex: number;
}
interface DotProps {
  $active: boolean;
}

interface DotsContainerProps {
  $orientation: 'horizontal' | 'vertical';
}

// export const CarouselContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: 100%;
//   background: var(--zinc-400);
// `;

export const CarouselViewport = styled.div`
  overflow: hidden;
  height: 200px;
   width: 100%;
`;

export const CarouselTrack = styled.div<TrackProps>`
  display: flex;
  height: 100%;

  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'column' : 'row'};

  transition: transform var(--transition-normal);

  transform: ${({ $orientation, $currentIndex }) =>
    $orientation === 'horizontal'
      ? `translateX(-${$currentIndex * 100}%)`
      : `translateY(-${$currentIndex * 200}px)`};
`;

export const CarouselSlide = styled.div<SlideProps>`
  box-sizing: border-box;

  flex-shrink: 0;

  ${({ $orientation }) =>
    $orientation === 'horizontal'
      ? `
        width: 100%;
        height: 100%;
      `
      : `
        width: 100%;
        height: 200px;
      `
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  position: absolute;
  z-index: 1;

  border: none;
  background: transparent;

  cursor: pointer;

  color: var(--color-white);

  font-size: 2rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const PrevButtonHorizontal = styled(ArrowButton)`
  left: var(--spacing-2);
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
`;

export const NextButtonHorizontal = styled(ArrowButton)`
  right: var(--spacing-2);
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
`;

export const PrevButtonVertical = styled(ArrowButton)`
  top: var(--spacing-2);
  left: 50%;
  transform: translateX(-50%);
`;

export const NextButtonVertical = styled(ArrowButton)`
  bottom: var(--spacing-2);
  left: 50%;
  transform: translateX(-50%);
`;

export const SlideDemo = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--slate-50);

  font-size: var(--font-size-xl);
`;

export const CarouselContainer = styled.div`
  position: relative;
  border: none;
  border-radius: var(--radius-lg);
  overflow: hidden;

background: linear-gradient(
  to right,
  var(--slate-700) 0%,
  var(--slate-600) 50%,
  var(--slate-500) 100%
);

box-shadow: var(--shadow-lg);
  min-height:220px;
`;

export const Dot = styled.div<DotProps>`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background-color: ${({ $active }) =>
    $active
      ? 'var(--neutral-300)'
      : 'var(--color-gray-300)'};
`;

export const DotsContainer = styled.div<DotsContainerProps>`
  display: flex;

  ${({ $orientation }) =>
    $orientation === 'horizontal'
      ? `
        justify-content: center;
        gap: var(--spacing-2);
        margin-top: var( --spacing-0_5);
      `
      : `
        flex-direction: column;
        position: absolute;
        right: var(--spacing-4);
        top: 50%;
        transform: translateY(-50%);
        gap: var(--spacing-2);
      `}
`;

export const NextArrowIcon = styled.span`
  width: 0.75rem;
  height: 0.75rem;

  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;

  transform: rotate(45deg);
`;

export const PrevArrowIcon = styled.span`
  width: 0.75rem;
  height: 0.75rem;

  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;

  transform: rotate(-135deg);
`;

export const UpArrowIcon = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  top:9%;

  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;

  transform: rotate(-45deg);
`;

export const DownArrowIcon = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  bottom:9%;
  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;

  transform: rotate(-227deg);
`;