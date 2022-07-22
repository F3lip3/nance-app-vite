import { FiEye, FiEyeOff } from 'react-icons/fi';
import { css, styled } from '~/global/config/stitches.config';

export const PasswordIconStyles = css({
  cursor: 'pointer',
  fontSize: '$xl2',
  stroke: '$gray800'
});

export const ShowPasswordIcon = styled(FiEye, {
  ...PasswordIconStyles,
  cursor: 'pointer'
});

export const HidePasswordIcon = styled(FiEyeOff, {
  ...PasswordIconStyles,
  cursor: 'pointer'
});
