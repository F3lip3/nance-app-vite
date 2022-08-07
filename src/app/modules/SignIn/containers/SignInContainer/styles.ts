import { styled } from '~/global/config/stitches.config';

export const Container = styled('form', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3'
});

export const SubmitButton = styled('button', {
  backgroundColor: '$primary',
  border: 'none',
  borderRadius: '$xl',
  color: '$foreground',
  fontSize: '$lg',
  padding: '$4 $6',
  width: '$sm'
});
