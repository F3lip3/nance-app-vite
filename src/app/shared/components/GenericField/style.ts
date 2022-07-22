import * as LabelPrimitive from '@radix-ui/react-label';
import { css, styled } from '~/global/config/stitches.config';

export const IconStyles = css({
  cursor: 'default',
  fontSize: '$xl2',
  stroke: '$gray800'
});

export const FormControl = styled('div', {
  alignItems: 'center',
  backgroundColor: '$fields',
  border: '2px solid $fields',
  borderRadius: '$lg',
  cursor: 'text',
  display: 'flex',
  flexDirection: 'row',
  height: '64px',
  padding: '$0 $6 0 $6',

  '&:focus-within': {
    border: '2px solid $secondary',
    outline: '5px solid $outline'
  },
  '&:focus-within span': {
    transform: 'translate(0, -20px) scale(0.8)',
    color: '$secondary'
  }
});

export const InnerBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  height: '100%',
  justifyContent: 'center',
  paddingTop: '$4',
  position: 'relative'
});

export const Input = styled('input', {
  all: 'unset',
  alignItems: 'center',
  color: 'white',
  display: 'inline-flex',
  fontSize: '$lg',
  justifyContent: 'center',
  lineHeight: 1,
  width: '$full'
});

export const Label = styled(LabelPrimitive.Root, {
  fontSize: '$base',
  fontWeight: 500,
  position: 'absolute',
  pointerEvents: 'none',
  transformOrigin: 'top left',
  transition: '200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  userSelect: 'none',
  variants: {
    state: {
      empty: {
        color: '$gray800',
        transform: 'translate(0, -8px) scale(1)'
      },
      filled: {
        color: '$gray900',
        transform: 'translate(0, -20px) scale(0.8)'
      }
    }
  },
  defaultVariants: {
    state: 'empty'
  }
});
