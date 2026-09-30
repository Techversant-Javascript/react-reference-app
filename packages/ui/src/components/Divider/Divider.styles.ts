import styled from 'styled-components';

interface StyledDividerProps {
  $orientation: 'horizontal' | 'vertical';
}

interface DividerWithTextProps {
    $textAlign: 'left' | 'center' | 'right';
  }

export const DividerRoot = styled.div<StyledDividerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $orientation }) =>
    $orientation === 'vertical'
      ? `
        width: 1px;
        height: 100%;
        min-height: 24px;
      `
      : `
        width: 100%;
      `}
`;

export const DividerLine = styled.div<StyledDividerProps>`
  background-color: var(--color-text-secondary);

  ${({ $orientation }) =>
    $orientation === 'vertical'
      ? `
        width: 100%;
        height: 5px;
      `
      : `
        width: 100%;
        height: 1px;
      `}
`;

export const DividerWithText = styled.div<DividerWithTextProps>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--space-sm);
`;

export const DividerText = styled.span`
  color: var(--red-700);
  font-size: var(--fs-md);
  white-space: nowrap;
`;

export const DividerSideLine = styled.div`
  height: 1px;
  background-color: var(--gray-600);
`;

export const VerticalWrapper = styled.div`
  height: 150px;
`;

export const LeftLine = styled(DividerSideLine)<{
    $textAlign: 'left' | 'center' | 'right';
  }>`
    flex: ${({ $textAlign }) => {
      switch ($textAlign) {
        case 'left':
          return 0.2;
        case 'right':
          return 1;
        default:
          return 1;
      }
    }};
  `;
  
  export const RightLine = styled(DividerSideLine)<{
    $textAlign: 'left' | 'center' | 'right';
  }>`
    flex: ${({ $textAlign }) => {
      switch ($textAlign) {
        case 'left':
          return 1;
        case 'right':
          return 0.2;
        default:
          return 1;
      }
    }};
  `;