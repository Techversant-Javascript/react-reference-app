import { forwardRef } from 'react';
import { CardWrapper, Content, Cover, Description, Footer, Title } from "./Card.styles";
import { CardProps } from "./Card.types";

export const CardBase = forwardRef<HTMLDivElement, CardProps>  (
    (
        {
            variant = 'elevated',
            cover,
            footer,
            children,
            className,
            ...rest
        },
        ref,
    ) => {
        return (
            <CardWrapper 
            ref={ref} 
            $variant={variant} 
            className={className}
            {...rest}>
                {cover && <Cover>{cover}</Cover>}

                <Content>{children}</Content>

                {footer && <Footer>{footer}</Footer>}
            </CardWrapper>
        )
    }
);
CardBase.displayName = 'Card';

export const Card = Object.assign(CardBase, {
    Title,
    Description,
  });