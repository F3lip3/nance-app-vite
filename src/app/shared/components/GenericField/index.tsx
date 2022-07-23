import React, { useCallback, useState } from 'react';
import {
  FormControl,
  Input,
  Label
} from '~/app/shared/components/GenericField/style';

export type GenericFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  children?: React.ReactNode;
};

export const GenericField: React.FC<GenericFieldProps> = ({
  children,
  label,
  ...props
}) => {
  const [labelState, setLabelState] = useState<'filled' | 'empty'>('empty');

  const handleValueChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setLabelState(evt.target.value ? 'filled' : 'empty');
    },
    []
  );

  return (
    <FormControl>
      <Label htmlFor={props.id} state={labelState}>
        {label}
      </Label>
      <Input onChange={handleValueChange} placeholder="" {...props} />
      {children}
    </FormControl>
  );
};
