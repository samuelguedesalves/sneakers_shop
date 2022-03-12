import { createStitches } from '@stitches/react';

const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      blue: "#496DDB",
      gray50: "#EEEEEE",
      gray200: "#888888",
      gray900: "#222222",
    },
    fonts: {
      untitled: "Roboto, sans-serif",
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    space: {
      "containerPadding": "0 24px",
    },
    sizes: {
      "full": "100%",
      "container": "1080px",
    },
  }
});

export { styled, getCssText, globalCss };