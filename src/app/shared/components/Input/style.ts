import * as LabelPrimitive from '@radix-ui/react-label';
import { styled } from '~/global/config/stitches.config';

export const FormControl = styled('div', {
  backgroundColor: '$fields',
  borderRadius: '$lg',
  cursor: 'text',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '64px',
  padding: '$4 $6 $0 $6',
  position: 'relative',
  // width: '$md',

  '&:focus-within span': {
    transform: 'translate(0, -20px) scale(0.8)',
    color: '$gray900'
  }
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
        color: '$gray600',
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
