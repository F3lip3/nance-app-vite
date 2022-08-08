import React from 'react';
import {
  IconClose,
  ToastButton,
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle
} from '~/app/shared/components/Toast/styles';

export type ToastProps = {
  code: string;
  message: string;
  description?: string;
  action?: string;
  variant?: 'error' | 'info' | 'success';
};

type InnerToastProps = ToastProps & {
  onClose: (code: string) => void;
};

export const Toast: React.FC<InnerToastProps> = ({
  code,
  message,
  description,
  action,
  variant,
  onClose
}) => {
  const handleClose = () => {
    onClose(code);
  };

  return (
    <>
      <ToastContainer onOpenChange={handleClose} variant={variant ?? 'info'}>
        <ToastTitle>{message}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        {action && (
          <ToastButton variant="green" size="small">
            {action}
          </ToastButton>
        )}
        <ToastClose
          aria-label="Close"
          type={description ? 'merged' : 'default'}
        >
          <IconClose />
        </ToastClose>
      </ToastContainer>
    </>
  );
};
