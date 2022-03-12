import { styled } from "../../styles/theme";

export const Container = styled('div', {
  width: '$full',
  background: '$blue',
})

export const Content = styled('div', {
  width: '$full',
  maxWidth: '$container',
  margin: '0 auto',
  padding: '$containerPadding',
  paddingTop: '24px',
  paddingBottom: '24px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& h1': {
    color: '$gray50',
    fontSize: '24px',
    cursor: 'pointer',
  },

  '& button': {
    background: 'none',
    border: 'transparent',
    color: '$gray50',
    fontSize: '24px',
    cursor: 'pointer'
  }
})