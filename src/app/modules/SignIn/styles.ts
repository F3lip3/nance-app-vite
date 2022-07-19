import { styled } from '~/global/config/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  backgroundColor: '$sidemenu',
  flex: '1 1 100%',

  variants: {
    size: {
      full: { width: '$full' },
      md: { width: '$md' }
    }
  }
});
