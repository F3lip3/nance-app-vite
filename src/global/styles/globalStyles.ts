import { globalCss } from '~/global/config/stitches.config';

export const globalStyles = globalCss({
  '*': {
    fontFamily: '$urbanist',
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
  },
  'input:-internal-autofill-selected': {
    appearance: 'auto !important',
    backgroundColor: '$primary !important',
    color: 'white !important',
    '-webkit-box-shadow': '0 0 0 40px #121415 inset !important',
    '-webkit-text-fill-color': 'white !important'
  },
  '@font-face': [
    {
      fontFamily: 'password',
      fontStyle: 'normal',
      fontWeight: 400,
      src: "url(./fonts/password.ttf) format('truetype')"
    },
    {
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      fontWeight: 200,
      src: `url(./fonts/urbanist/woff2/Urbanist-ExtraLight.woff2) format('woff2'),
            url(./fonts/urbanist/ttf/Urbanist-ExtraLight.ttf) format('truetype')`
    },
    {
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      fontWeight: 400,
      src: `url(./fonts/urbanist/woff2/Urbanist-Regular.woff2) format('woff2'),
            url(./fonts/urbanist/ttf/Urbanist-Regular.ttf) format('truetype')`
    },
    {
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      fontWeight: 700,
      src: `url(./fonts/urbanist/woff2/Urbanist-Bold.woff2) format('woff2'),
            url(./fonts/urbanist/ttf/Urbanist-Bold.ttf) format('truetype')`
    },
    {
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      fontWeight: 800,
      src: `url(./fonts/urbanist/woff2/Urbanist-ExtraBold.woff2) format('woff2'),
            url(./fonts/urbanist/ttf/Urbanist-ExtraBold.ttf) format('truetype')`
    }
  ]
});
