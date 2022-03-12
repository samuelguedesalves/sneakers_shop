import { styled } from "../../styles/theme";

export const Container = styled('section', {
  width: '$full',
  background: '$gray50',
  padding: '12px',
  borderRadius: '6px',
  marginBottom: '20px',
  position: 'relative',

  '& .image-canvas': {
    width: "$full",
    marginBottom: 12,
  },

  '& .image-canvas img': {
    width: "$full",
    borderRadius: 6,
  },

  '& h2': {
    fontSize: '20px',
    marginBottom: '12px'
  },

  '& .label': {
    display: 'block',
    color: '$gray200',
    marginBottom: '6px',
    lineHeight: '100%',
  },

  '& .available': {
    display: 'block',
    color: '$gray200',
    marginBottom: '6px',
    lineHeight: '100%',
  },

  '& .price': {
    display: 'block',
    color: '$blue',
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '6px',
    lineHeight: '100%',
  },

  '& button.see-details': {
    width: '100%',
    height: '40px',
    fontSize: '16px',
    border: 'solid 2px $blue',
    color: '$blue',
    fontWeight: 'bold',
    borderRadius: '6px',
    marginTop: '12px',
    transition: '0.2s',
    cursor: 'pointer',
    '&:hover': {
      background: '$blue',
      color: '$gray50'
    }
  },

  '& button.add-to-cart': {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 30,
    height: 30,
    background: 'transparent',
    border: 'solid 2px $blue',
    borderRadius: 6,
    color: '$blue',
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'ease 0.2s',
  },

  '& button.add-to-cart:hover': {
    background: '$blue',
    color: '$gray50',
  },
});