import { forwardRef } from 'react';
import { DividerProps } from './Divider.types';
import { DividerRoot,DividerLine,DividerWithText,DividerText,DividerSideLine, LeftLine, RightLine,} from './Divider.styles';

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
        text,
        textAlign = 'center',
        ...rest
    },
    ref,
  ) => {
    if (text) {
        return (
          <DividerWithText
            ref={ref}
            $textAlign={textAlign}
            role="separator"
            aria-label={text}
            {...rest}
          >
            <LeftLine $textAlign={textAlign} />
  
            <DividerText>{text}</DividerText>
  
            <RightLine $textAlign={textAlign} />
          </DividerWithText>
        );
      }
      return (
        <DividerRoot
          ref={ref}
          $orientation="horizontal"
          role="separator"
          aria-orientation="horizontal"
          {...rest}
        >
          <DividerLine $orientation="horizontal" />
        </DividerRoot>
      );
  },
);

Divider.displayName = 'Divider';
