import { FiEye, FiEyeOff } from 'react-icons/fi';
import { GenericField } from '~/app/shared/components/GenericField';
import { IconStyles } from '~/app/shared/components/GenericField/style';
import { styled } from '~/global/config/stitches.config';

export const ShowPasswordIcon = styled(FiEye, IconStyles);
export const HidePasswordIcon = styled(FiEyeOff, IconStyles);

export const PasswordField = styled(GenericField, {
  variants: {
    display: {
      text: {
        fontFamily: '$system'
      },
      password: {
        fontFamily: '$password',
        letterSpacing: '$1'
      }
    }
  },
  defaultVariants: {
    display: 'password'
  }
});
