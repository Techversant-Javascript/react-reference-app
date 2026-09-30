import React, { useState } from 'react';
import { AlertProps } from './Alert.types';
import { Wrapper, Content, Title, CloseButton } from './Alert.styles';

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  children,
  title,
  isDismissible = false,
  onClose,
  icon,
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <Wrapper $variant={variant} role="alert">
      {icon && <div>{icon}</div>}

      <Content>
        {title && <Title>{title}</Title>}
        <div>{children}</div>
      </Content>

      {isDismissible && (
        <CloseButton onClick={handleClose} aria-label="Close alert">
          ✕
        </CloseButton>
      )}
    </Wrapper>
  );
};