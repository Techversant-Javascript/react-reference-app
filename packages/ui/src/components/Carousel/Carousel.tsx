import { forwardRef, useEffect, useState, } from 'react';
import { CarouselContainer, CarouselViewport, CarouselTrack, CarouselSlide, PrevButtonVertical, PrevButtonHorizontal, NextButtonHorizontal, NextButtonVertical, DotsContainer, Dot, PrevArrowIcon, NextArrowIcon, UpArrowIcon, DownArrowIcon, } from './Carousel.styles';
import { CarouselProps } from './Carousel.types';

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
    (
        {
            children,
            orientation = 'horizontal',
            autoSlide = false,
            autoSlideInterval = 3000,
        },
        ref
    ) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const totalSlides = children.length;

        const nextSlide = () => {
            setCurrentIndex((prev) =>
                Math.min(prev + 1, totalSlides - 1)
            );
        };

        const prevSlide = () => {
            setCurrentIndex((prev) =>
                Math.max(prev - 1, 0)
            );
        };

        useEffect(() => {
            if (!autoSlide) {
                return;
            }

            const interval = setInterval(
                nextSlide,
                autoSlideInterval
            );

            return () => clearInterval(interval);
        }, [autoSlide, autoSlideInterval, totalSlides]);

        return (
            <CarouselContainer
                ref={ref}
                role="region"
                aria-label="Carousel"
            >
                {orientation === 'horizontal' ? (
                    <>
                        {currentIndex > 0 && (
                            <PrevButtonHorizontal
                                aria-label="Previous Slide"
                                onClick={prevSlide}
                            >
                                 <PrevArrowIcon />
                            </PrevButtonHorizontal>
                        )}

                        {currentIndex < totalSlides - 1 && (
                            <NextButtonHorizontal
                                aria-label="Next Slide"
                                onClick={nextSlide}
                            >
                               <NextArrowIcon />
                            </NextButtonHorizontal>
                        )}
                    </>
                ) : (
                    <>
                        {currentIndex > 0 && (
                            <PrevButtonVertical
                                aria-label="Previous Slide"
                                onClick={prevSlide}
                            >
                                <UpArrowIcon/>
                            </PrevButtonVertical>
                        )}

                        {currentIndex < totalSlides - 1 && (
                            <NextButtonVertical
                                aria-label="Next Slide"
                                onClick={nextSlide}
                            >
                                <DownArrowIcon/>
                            </NextButtonVertical>
                        )}
                    </>
                )}

                <CarouselViewport>
                    <CarouselTrack
                        $orientation={orientation}
                        $currentIndex={currentIndex}
                    >
                        {children.map((child, index) => (
                            <CarouselSlide key={index}
                                $orientation={orientation}>
                                {child}
                            </CarouselSlide>
                        ))}
                    </CarouselTrack>
                </CarouselViewport>

                <DotsContainer $orientation={orientation}>
                    {children.map((_, index) => (
                        <Dot
                            key={index}
                            $active={index === currentIndex}
                        />
                    ))}
                </DotsContainer>
            </CarouselContainer>
        );
    }
);

Carousel.displayName = 'Carousel';