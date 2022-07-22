import React, { useCallback, useState } from 'react';
import {
  GenericField,
  GenericFieldProps
} from '~/app/shared/components/GenericField';
import {
  HidePasswordIcon,
  ShowPasswordIcon
} from '~/app/shared/components/PasswordField/styles';

type PasswordFieldProps = Omit<GenericFieldProps, 'children' | 'type'>;

export const PasswordField: React.FC<PasswordFieldProps> = props => {
  const [inputType, setInputType] = useState('password');

  const handlePasswordVisibility = useCallback(() => {
    setInputType(current => (current === 'password' ? 'text' : 'password'));
  }, []);

  return (
    <GenericField {...props} type="password">
      {inputType === 'password' && (
        <ShowPasswordIcon onClick={handlePasswordVisibility} />
      )}
      {inputType === 'text' && (
        <HidePasswordIcon onClick={handlePasswordVisibility} />
      )}
    </GenericField>
  );
};
