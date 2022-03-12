import { CSS } from "@stitches/react";
import { styled } from "../../styles/theme";

interface ModalStyles {
  [K: string]: CSS;
}

export const modalStyles: ModalStyles = {
  '.modal-cart-overlayer': {
    position: 'fixed',
    top: 0,
    left: 0,

    width: '100%',
    height: '100vh',

    background: 'rgba(0,0,0,0.4)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  '.modal-cart': {
    width: '100%',
    maxWidth: 1000,
    minHeight: 600,

    background: '#EEEEEE',

    borderRadius: 8,
    padding: '20px',

    outline: 'none',
    margin: '0 20px',
  }
}

export const Header = styled('div', {
  width: '$full',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginBottom: 30,

  'span': {
    display: 'block',
    fontSize: 24,
    fontWeight: '$bold',
    color: '$gray900'
  },

  'button': {
    padding: 0,
    fontSize: 26,

    border: 'transparent',
    background: 'transparent',

    color: '$gray900',

    cursor: 'pointer'
  }
})

export const Container = styled('div', {
  width: '$full',
})

export const ProductItem = styled('div', {
  width: '$full',
  height: 80,

  display: 'flex',

  marginBottom: 20,

  '.media img': {
    width: 80,
    height: 80,
    borderRadius: 6,
  },

  '.details': {
    width: '$full',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    marginLeft: 20,
  },

  '.details span': {
    display: "block",
  },

  '.details span.product-name': {
    fontSize: 22,
    fontWeight: '$bold',
  },

  '.details span.product-amount': {
    fontSize: 20,
    fontWeight: '$regular',
  },



  '.options': {
    display: 'flex',
    alignItems: 'center',

    columnGap: 20,
  },

  '.options button.remove-item': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '$full',
    height: 40,

    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '$gray200',
    borderRadius: 6,

    paddingInline: 12,

    color: '$gray900',
    fontSize: 16,
    fontWeight: '$bold',

    marginTop: 20,

    cursor: 'pointer',

    transition: 'ease 0.2s',

    '&:hover': {
      color: '$gray50',
      background: '$blue',
      borderColor: '$blue',
    }
  },
})

export const ControlAmount = styled('div', {
  width: '$full',
  maxWidth: 300,
  height: '$full',

  '.heading': {
    width: '$full',
    paddingBlockEnd: 8,
  },

  '.heading span': {
    display: 'block',

    fontSize: 18,
    textAlign: 'center',
    fontWeight: '$bold',
    color: '$gray900',

  },

  '.body': {
    width: '$full',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '.body span.amount-display': {
    marginInline: 12,

    fontSize: 22,

    color: '$gray900',
  },

  '.body button': {
    width: 40,
    height: 40,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'transparent',
    color: '$gray900',

    borderStyle: 'solid',
    borderColor: '$gray200',

    fontSize: 22,

    borderRadius: 6,

    cursor: 'pointer',

    transition: 'ease 0.2s',
  },

  '.body button:hover': {
    background: '$blue',
    color: '$gray50',
    borderColor: '$blue',
  }
})