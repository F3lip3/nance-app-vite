import * as ToastPrimitive from '@radix-ui/react-toast';
import { FiX } from 'react-icons/fi';
import { keyframes, styled } from '~/global/config/stitches.config';

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' }
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
});

export const IconClose = styled(FiX, {
  cursor: 'pointer',
  fontSize: '$xl',
  stroke: '$gray200'
});

export const ToastAction = styled(ToastPrimitive.Action, {
  gridArea: 'action'
});

export const ToastButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '0 10px',
        lineHeight: '25px',
        height: 25
      }
    },
    variant: {
      violet: {
        backgroundColor: 'white',
        color: '$purple100',
        boxShadow: '0 2px 10px #141516',
        '&:hover': { backgroundColor: '$purple200' },
        '&:focus': { boxShadow: `0 0 0 2px black` }
      },
      green: {
        backgroundColor: '$secondary',
        color: '$foreground',
        boxShadow: `inset 0 0 0 1px #141516`,
        '&:hover': { boxShadow: 'inset 0 0 0 1px black' },
        '&:focus': { boxShadow: `0 0 0 2px black` }
      }
    }
  },

  defaultVariants: {
    variant: 'violet'
  }
});

export const ToastClose = styled(ToastPrimitive.Close, {
  border: 'none',
  backgroundColor: 'transparent',
  variants: {
    type: {
      default: { gridRow: '1/1' },
      merged: { gridRow: '1/3' }
    }
  },
  defaultVariants: {
    type: 'default'
  }
});

export const ToastContainer = styled(ToastPrimitive.Root, {
  borderRadius: 6,
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out'
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    }
  },

  variants: {
    variant: {
      error: { backgroundColor: '$errorBox' },
      info: { backgroundColor: '$blue' },
      success: { backgroundColor: '$success' }
    }
  },
  defaultVariants: {
    variant: 'success'
  }
});

export const ToastDescription = styled(ToastPrimitive.Description, {
  color: '$gray700',
  fontSize: '$sm',
  fontWeight: 400,
  gridArea: 'description',
  lineHeight: 1.3,
  margin: 0
});

export const ToastTitle = styled(ToastPrimitive.Title, {
  color: '$foreground',
  fontSize: '$base',
  fontWeight: 500,
  gridArea: 'title'
});

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none'
});
