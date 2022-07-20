import { FocusEvent, useCallback, useRef, useState } from 'react';
import {
  FormControl,
  Input as InputField,
  Label
} from '~/app/shared/components/Input/style';

export const Input = () => {
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
      <Label htmlFor="email" state={labelState}>
        Email
      </Label>
      <InputField
        id="email"
        type="email"
        onBlur={handleInputBlur}
        placeholder=""
        role="presentation"
        ref={inputRef}
      />
    </FormControl>
  );
};
