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
  title: string;
  description?: string;
  action?: string;
};

type InnerToastProps = ToastProps & {
  onClose: (code: string) => void;
};

export const Toast: React.FC<InnerToastProps> = ({
  code,
  title,
  description,
  action,
  onClose
}) => {
  console.info('code:', code);

  const handleClose = () => {
    onClose(code);
  };

  return (
    <>
      <ToastContainer onOpenChange={handleClose}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        {action && (
          <ToastButton variant="green" size="small">
            {action}
          </ToastButton>
        )}
        <ToastClose aria-label="Close">
          <IconClose />
        </ToastClose>
      </ToastContainer>
    </>
  );
};
