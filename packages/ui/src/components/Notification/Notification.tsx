import {
    CloseButton,
    Content,
    Message,
    NotificationContainer,
    Title,
  } from './Notification.styles';
  
  import { NotificationProps } from './Notification.types';
  
  interface Props extends NotificationProps {
    onClose: (id: string) => void;
  }
  
  export const Notification = ({
    id,
    title,
    message,
    variant,
    onClose,
  }: Props) => {
    return (
      <NotificationContainer
        $variant={variant}
        role="alert"
      >
        <Content>
          <Title>{title}</Title>
  
          <Message>{message}</Message>
        </Content>
  
        <CloseButton
          onClick={() => onClose(id)}
          aria-label="Close notification"
        >
          ✕
        </CloseButton>
      </NotificationContainer>
    );
  };