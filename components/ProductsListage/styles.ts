import { styled } from "../../styles/theme";

export const Container = styled('article', {
  width: '$full',
})

export const Content = styled('div', {
  width: '$full',
  maxWidth: '$container',
  padding: '$containerPadding',
  margin: '0 auto',

  '& h1': {
    color: '$gray900',
    marginTop: '32px',
    marginBottom: '32px',
  }
})

export const ProductsGrid = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fit, minmax(300px, 1fr) )',
  columnGap: '20px',
})