import { globalCss } from '~/global/config/stitches.config';

export const globalStyles = globalCss({
  '*': {
    fontFamily: '$system',
    color: '$foreground',
    boxSizing: 'border-box'
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
  },
  'input[type=password]::-ms-reveal, input[type=password]::-ms-clear': {
    display: 'none'
  }
});
