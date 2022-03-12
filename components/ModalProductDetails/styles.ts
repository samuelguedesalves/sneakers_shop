import { CSS } from '@stitches/react';
import { styled } from '../../styles/theme';

interface ModalStyles {
  [K: string]: CSS;
}

export const modalStyles: ModalStyles = {
  '.modal-product-details-overlayer': {
    position: 'fixed',
    top: 0,
    left: 0,

    width: '$full',
    height: '$full',
    minHeight: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'rgba(0,0,0,0.4)',
  },

  '.modal-product-details': {
    display: 'block',

    width: '$full',
    height: '$full',
    maxWidth: 1000,
    maxHeight: 700,

    borderRadius: 8,
    padding: '50px 20px',

    margin: '0 20px',

    background: '$gray50',

    outline: 'none',

    position: 'relative',

    '& button.close-modal': {
      width: 24,
      height: 24,

      background: 'transparent',
      border: 'transparent',
      borderRadius: 6,

      fontSize: 24,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      cursor: 'pointer',

      position: 'absolute',
      top: 12,
      right: 12,
    },
  },
}

export const ModalContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  '& .left-side': {
    width: '50%',
    height: '100%',
  },

  '& .right-side': {
    width: '50%',
    height: '100%',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: 6,

  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'center',
})

export const InfoContainer = styled('div', {
  width: '100%',
  height: '100%',
  // paddingTop: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& span.name': {
    display: 'block',

    fontWeight: '$bold',
    fontSize: 24,
    textAlign: 'center'
  },

  '& span.label, & span.inventory': {
    display: 'block',

    marginTop: 8,

    fontWeight: '$regular',
    fontSize: 18,
    textAlign: 'center',

    color: '$gray200'
  },

  '& span.price': {
    display: 'block',

    marginTop: 20,

    fontSize: 24,
    textAlign: 'center',
    fontWeight: '$bold',

    color: '$blue'
  },

  '& span.amount-into-cart': {
    display: 'block',

    marginTop: 20,

    fontSize: 18,
    textAlign: 'center',
    fontWeight: '$regular',

    color: '$gray900'
  },

  '& button.add-to-cart': {
    width: '100%',
    maxWidth: 300,
    height: 40,

    marginTop: 30,

    background: '$blue',
    color: '$gray50',
    border: 'solid 2px $blue',
    borderRadius: 6,

    fontSize: 18,
    fontWeight: '$bold',

    cursor: 'pointer',

    outline: 'none',

    transition: 'ease 0.8',
  }
})
