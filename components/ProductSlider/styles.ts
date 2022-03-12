import { styled } from "../../styles/theme";

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: 400,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '& img.principal-image': {
    width: '100%',
    maxWidth: 400,

    borderRadius: 6,
  },

  '& .images-list': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
})

export const ImageButton = styled('button', {
  width: 80,
  height: 80,

  border: 'none',
  borderRadius: 6,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  background: 'transparent',

  '& .image-overlayer': {
    width: 76,
    height: 76,

    background: 'rgba(0, 0, 0, 0.1)',

    borderRadius: 4,

    position: 'absolute',
    top: 0,
    left: 0,

    zIndex: 2,
  },

  '& img': {
    width: 76,
    height: 76,

    borderRadius: 4,

    position: 'absolute',
  },
})