import { globalCss } from '~/global/config/stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    backgroundColor: '$background',
    fontFamily: '$system',
    color: '$foreground'
  },
  button: {
    border: 0,
    backgroundColor: '$fields',
    padding: '$2 $4',
    borderRadius: '$lg',
    cursor: 'pointer'
  }
});
