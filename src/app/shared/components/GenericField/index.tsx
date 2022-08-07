import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { ChangeHandler, FieldError } from 'react-hook-form';
import {
  FormControl,
  HelperText,
  InnerContent,
  Input,
  Label
} from '~/app/shared/components/GenericField/style';

export type GenericFieldProps = {
  label: string;
  name: string;
  onBlur?: ChangeHandler;
  onChange?: ChangeHandler;
  children?: React.ReactNode;
  error?: FieldError;
  type?: React.HTMLInputTypeAttribute;
};

const GenericField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  GenericFieldProps
> = ({ children, error, label, onBlur, onChange, ...props }, ref) => {
  const [fieldState, setFieldState] = useState<'error' | 'valid'>('valid');
  const [labelState, setLabelState] = useState<'filled' | 'empty'>('empty');

  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setLabelState(evt.target.value ? 'filled' : 'empty');
    },
    []
  );

  useEffect(() => {
    setFieldState(error ? 'error' : 'valid');
  }, [error]);

  return (
    <FormControl state={fieldState}>
      <InnerContent>
        <Label htmlFor={props.name} state={labelState}>
          {label}
        </Label>
        <Input
          {...props}
          id={props.name}
          ref={ref}
          title={label}
          onChange={e => {
            if (onChange) onChange(e);
            handleChange(e);
          }}
          onBlur={e => {
            if (onBlur) onBlur(e);
            handleChange(e);
          }}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
        {children}
      </InnerContent>
      {error?.message && <HelperText>{error.message}</HelperText>}
    </FormControl>
  );
};

export default forwardRef(GenericField);
