import { ReactNode } from 'react';

export type CarouselOrientation = 'horizontal' | 'vertical';

export interface ArrowProps {
  $orientation: 'horizontal' | 'vertical';
}
export interface SlideProps {
  $orientation: 'horizontal' | 'vertical';
}

export interface CarouselProps {
  children: ReactNode[];
  orientation?: CarouselOrientation;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  showArrows?: boolean;
  className?: string;
}