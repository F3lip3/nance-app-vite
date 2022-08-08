import * as ToastPrimitive from '@radix-ui/react-toast';
import React, { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Toast, ToastProps } from '~/app/shared/components/Toast';
import { ToastViewport } from '~/app/shared/components/Toast/styles';

type AddToastProps = Pick<
  ToastProps,
  'message' | 'description' | 'action' | 'variant'
>;

interface ToastContextData {
  addToast: (toast: AddToastProps) => void;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [queue, setQueue] = useState<ToastProps[]>([]);

  const addToast = (toast: AddToastProps) => {
    setQueue(current => [...current, { ...toast, code: uuid() }]);
  };

  const onClose = (code: string) => {
    setQueue(current => current.filter(x => x.code !== code));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}
        {queue.map(item => (
          <Toast key={item.code} onClose={onClose} {...item} />
        ))}
        <ToastViewport />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('userToast must be used within a ToastProvider');
  }

  return context;
};

export { useToast, ToastProvider };
