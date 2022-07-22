import React, { useCallback, useRef, useState } from 'react';
import {
  FormControl,
  InnerBox,
  Input as InputField,
  Label
} from '~/app/shared/components/GenericField/style';

export type GenericFieldProps = React.HTMLProps<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
};

export const GenericField: React.FC<GenericFieldProps> = ({
  children,
  label,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [labelState, setLabelState] = useState<'filled' | 'empty'>('empty');

  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleValueChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setLabelState(evt.target.value ? 'filled' : 'empty');
    },
    []
  );

  return (
    <FormControl onClick={handleFocus}>
      <InnerBox>
        <Label htmlFor={props.id} state={labelState}>
          {label}
        </Label>
        <InputField
          {...props}
          onChange={handleValueChange}
          placeholder=""
          ref={inputRef}
        />
      </InnerBox>
      {children}
    </FormControl>
  );
};
