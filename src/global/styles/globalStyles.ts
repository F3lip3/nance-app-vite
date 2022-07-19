import { globalCss } from '~/global/config/stitches.config';

export const globalStyles = globalCss({
  '*': {
    fontFamily: '$system',
    color: '$foreground'
  },
  body: {
    backgroundColor: '$background',
    height: '100vh',
    margin: 0,
    padding: 0
  },
  '#root': {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});
