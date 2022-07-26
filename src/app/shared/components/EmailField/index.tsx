import React, { forwardRef } from 'react';
import { EmailIcon } from '~/app/shared/components/EmailField/styles';
import GenericField, {
  GenericFieldProps
} from '~/app/shared/components/GenericField';

type EmailFieldProps = Omit<GenericFieldProps, 'children' | 'type'>;

const EmailField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  EmailFieldProps
> = (props, ref) => {
  return (
    <GenericField {...props} ref={ref} type="email">
      <EmailIcon />
    </GenericField>
  );
};

export default forwardRef(EmailField);
