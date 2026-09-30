import { forwardRef, useState, KeyboardEvent, } from 'react';
import { ImageProps } from './Image.types';
import { ImageWrapper, Placeholder, PreviewImage, PreviewOverlay, StyledImage } from './Image.styles';

export const Image = forwardRef<HTMLImageElement, ImageProps>(
    (
        {
            variant = 'rounded',
            fit = 'cover',
            src,
            alt,
            width,
            height,
            ...props
        },
        ref,
    ) => {
        const [open, setOpen] = useState(false);

        const handlePreviewOpen = () => {
            if (variant === 'preview') {
                setOpen(true);
            }
        };

        const handlePreviewClose = () => {
            setOpen(false);
        };

        const handleKeyDown = (
            event: KeyboardEvent<HTMLImageElement>,
        ) => {
            if (
                variant === 'preview' &&
                (event.key === 'Enter' ||
                    event.key === ' ')
            ) {
                event.preventDefault();
                setOpen(true);
            }
        };
        if (!src) {
            return (
                <Placeholder $variant={variant}>
                    {variant.toUpperCase()} IMAGE
                </Placeholder>
            );
        }

        return (
            <>
                <ImageWrapper $width={width}
                    $height={height}>
                    <StyledImage
                        ref={ref}
                        src={src}
                        alt={alt}
                        $variant={variant}
                        $fit={fit}
                        onClick={handlePreviewOpen}
                        onKeyDown={handleKeyDown}
                        tabIndex={
                            variant === 'preview'
                                ? 0
                                : undefined
                        }
                        role={
                            variant === 'preview'
                                ? 'button'
                                : undefined
                        }
                        {...props}
                    />
                </ImageWrapper>

                {variant === 'preview' && open && (
                    <PreviewOverlay
                        onClick={handlePreviewClose}
                        role="dialog"
                        aria-modal="true"
                    >
                        <PreviewImage
                            src={src}
                            alt={alt}
                        />
                    </PreviewOverlay>
                )}

            </>
        );
    },
);

Image.displayName = 'Image';