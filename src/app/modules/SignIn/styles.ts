import { styled } from '~/global/config/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$sidemenu',
  flex: '1 1 100%',
  width: '$full',
  padding: '$4'
});

export const Title = styled('h1', {
  fontFamily: '$urbanist'
});
