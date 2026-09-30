import {
    createContext,
    useCallback,
    useMemo,
    useState,
  } from 'react';
  
  import { Notification } from './Notification';
  
  import {
      NotificationConfig,
    NotificationContextValue,
    NotificationProps,
    NotificationVariant,
  } from './Notification.types';
  
  import { NotificationViewport } from './Notification.styles';
  
  export const NotificationContext =
    createContext<NotificationContextValue | null>(
      null
    );
  
  interface ProviderProps {
    children: React.ReactNode;
  }
  
  export const NotificationProvider = ({
    children,
  }: ProviderProps) => {
    const [notifications, setNotifications] =
      useState<NotificationProps[]>([]);
  
    const remove = useCallback((id: string) => {
      setNotifications(prev =>
        prev.filter(item => item.id !== id)
      );
    }, []);
  
    const addNotification = useCallback(
      (
        variant: NotificationVariant,
        config: Omit<
          NotificationProps,
          'id' | 'variant'
        >
      ) => {
        const id = crypto.randomUUID();
  
        const notification = {
          ...config,
          id,
          variant,
        };
  
        setNotifications(prev => [
          ...prev,
          notification,
        ]);
  
        window.setTimeout(() => {
          remove(id);
        }, config.duration ?? 4000);
      },
      [remove]
    );
  
    const value: NotificationContextValue =
    useMemo(
      () => ({
        success: config =>
          addNotification('success', config),
  
        error: config =>
          addNotification('error', config),
  
        warning: config =>
          addNotification('warning', config),
  
        info: config =>
          addNotification('info', config),
      }),
      [addNotification]
    );
    
  
    return (
      <NotificationContext.Provider value={value}>
        {children}
  
        <NotificationViewport>
          {notifications.map(notification => (
            <Notification
              key={notification.id}
              {...notification}
              onClose={remove}
            />
          ))}
        </NotificationViewport>
      </NotificationContext.Provider>
    );
  };