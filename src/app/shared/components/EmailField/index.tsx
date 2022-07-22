import React from 'react';
import { EmailIcon } from '~/app/shared/components/EmailField/styles';
import {
  GenericField,
  GenericFieldProps
} from '~/app/shared/components/GenericField';

type EmailFieldProps = Omit<GenericFieldProps, 'children' | 'type'>;

export const EmailField: React.FC<EmailFieldProps> = props => {
  return (
    <GenericField {...props} type="email">
      <EmailIcon />
    </GenericField>
  );
};
