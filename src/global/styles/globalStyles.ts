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
  'input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus':
    {
      border: '2px solid #121415',
      '-webkit-text-fill-color': '#f6f6f8',
      '-webkit-box-shadow': '0 0 0px 1000px #121415 inset',
      transition: 'background-color 5000s ease-in-out 0s'
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
      fontWeight: 500,
      src: `url(./fonts/urbanist/woff2/Urbanist-SemiBold.woff2) format('woff2'),
            url(./fonts/urbanist/ttf/Urbanist-SemiBold.ttf) format('truetype')`
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
