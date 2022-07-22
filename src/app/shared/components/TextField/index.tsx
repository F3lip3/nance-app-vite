import React from 'react';
import {
  GenericField,
  GenericFieldProps
} from '~/app/shared/components/GenericField';
import {
  IconAdd,
  IconEmail,
  IconPassword,
  IconSearch,
  IconUser
} from '~/app/shared/components/TextField/styles';

type TextFieldProps = Omit<GenericFieldProps, 'children' | 'type'> & {
  icon?: 'add' | 'email' | 'password' | 'search' | 'user';
};

export const TextField: React.FC<TextFieldProps> = ({ icon, ...props }) => {
  return (
    <GenericField {...props} type="text">
      {icon == 'add' && <IconAdd />}
      {icon == 'email' && <IconEmail />}
      {icon == 'password' && <IconPassword />}
      {icon == 'search' && <IconSearch />}
      {icon == 'user' && <IconUser />}
    </GenericField>
  );
};
