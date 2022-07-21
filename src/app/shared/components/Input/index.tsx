import React, { FocusEvent, useCallback, useRef, useState } from 'react';
import {
  FormControl,
  IconAdd,
  IconEmail,
  IconPassword,
  IconSearch,
  IconUser,
  InnerBox,
  Input as InputField,
  Label
} from '~/app/shared/components/Input/style';

type InputProps = React.HTMLProps<HTMLInputElement> & {
  id: string;
  label: string;
  icon?: 'add' | 'email' | 'password' | 'search' | 'user';
};

export const Input: React.FC<InputProps> = ({ icon, label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [labelState, setLabelState] = useState<'filled' | 'empty'>('empty');

  const handleInputBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setLabelState(e.currentTarget.value ? 'filled' : 'empty');
  }, []);

  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <FormControl onClick={handleFocus}>
      <InnerBox>
        <Label htmlFor={props.id} state={labelState}>
          {label}
        </Label>
        <InputField
          {...props}
          onBlur={handleInputBlur}
          placeholder=""
          ref={inputRef}
        />
      </InnerBox>
      {icon == 'add' && <IconAdd />}
      {icon == 'email' && <IconEmail />}
      {icon == 'password' && <IconPassword />}
      {icon == 'search' && <IconSearch />}
      {icon == 'user' && <IconUser />}
    </FormControl>
  );
};
