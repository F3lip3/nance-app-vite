import * as LabelPrimitive from '@radix-ui/react-label';
import { css, styled } from '~/global/config/stitches.config';

export const IconStyles = css({
  cursor: 'default',
  fontSize: '$xl2',
  position: 'absolute',
  right: '$6',
  stroke: '$gray800',
  variants: {
    cursor: {
      default: { cursor: 'default' },
      pointer: { cursor: 'pointer' }
    }
  },
  defaultVariants: {
    cursor: 'default'
  }
});

export const FormControl = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '$full',

  variants: {
    state: {
      valid: {
        color: 'white',
        '&:focus-within input': {
          border: '2px solid $secondary',
          outline: '5px solid $outline'
        },
        '&:focus-within span': {
          transform: 'translate(calc($space-6 + 0.1rem), -$space-3) scale(0.8)',
          color: '$secondary'
        }
      },
      error: {
        color: '$error',
        '& input': {
          border: '2px solid $error',
          outline: '5px solid $errorOutline'
        },
        '& span': {
          transform: 'translate(calc($space-6 + 0.1rem), -$space-3) scale(0.8)',
          color: '$error'
        }
      }
    }
  },
  defaultVariants: {
    state: 'valid'
  }
});

export const HelperText = styled('div', {
  color: 'inherit',
  padding: '$2 $1 $3'
});

export const InnerContent = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative'
});

export const Input = styled('input', {
  all: 'unset',
  alignItems: 'center',
  backgroundColor: '$fields',
  border: '2px solid $fields',
  borderRadius: '$xl',
  color: '$foreground',
  display: 'inline-flex',
  fontSize: '$lg',
  height: '$xs5',
  justifyContent: 'center',
  lineHeight: 1,
  padding: '$6 $6 $2 $6',
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
        transform: 'translate(calc($space-6 + 0.1rem), 0) scale(1)'
      },
      filled: {
        color: '$gray900',
        transform: 'translate(calc($space-6 + 0.1rem), -$space-3) scale(0.8)'
      }
    }
  },
  defaultVariants: {
    state: 'empty'
  }
});
