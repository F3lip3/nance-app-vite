import React, { useCallback, useState } from 'react';
import { GenericFieldProps } from '~/app/shared/components/GenericField';
import {
  HidePasswordIcon,
  PasswordField as PasswordInput,
  ShowPasswordIcon
} from '~/app/shared/components/PasswordField/styles';

type PasswordFieldProps = Omit<GenericFieldProps, 'children' | 'type'>;

export const PasswordField: React.FC<PasswordFieldProps> = props => {
  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  const handlePasswordVisibility = useCallback(() => {
    setInputType(current => (current === 'password' ? 'text' : 'password'));
  }, []);

  return (
    <PasswordInput {...props} type="text" display={inputType}>
      {inputType === 'password' && (
        <ShowPasswordIcon onClick={handlePasswordVisibility} cursor="pointer" />
      )}
      {inputType === 'text' && (
        <HidePasswordIcon onClick={handlePasswordVisibility} cursor="pointer" />
      )}
    </PasswordInput>
  );
};
