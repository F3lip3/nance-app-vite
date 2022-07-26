import React, { forwardRef, useCallback, useState } from 'react';
import { GenericFieldProps } from '~/app/shared/components/GenericField';
import {
  HidePasswordIcon,
  PasswordField as PasswordInput,
  ShowPasswordIcon
} from '~/app/shared/components/PasswordField/styles';

type PasswordFieldProps = Omit<GenericFieldProps, 'children' | 'type'>;

const PasswordField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  PasswordFieldProps
> = (props, ref) => {
  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  const handlePasswordVisibility = useCallback(() => {
    setInputType(current => (current === 'password' ? 'text' : 'password'));
  }, []);

  return (
    <PasswordInput {...props} ref={ref} type="text" display={inputType}>
      {inputType === 'password' && (
        <ShowPasswordIcon onClick={handlePasswordVisibility} cursor="pointer" />
      )}
      {inputType === 'text' && (
        <HidePasswordIcon onClick={handlePasswordVisibility} cursor="pointer" />
      )}
    </PasswordInput>
  );
};

export default forwardRef(PasswordField);
