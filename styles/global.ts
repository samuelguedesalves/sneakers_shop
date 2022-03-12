import { modalStyles as modalStylesProductDetails } from "../components/ModalProductDetails/styles";
import { modalStyles as modalStylesCart } from "../components/ModalCart/styles";
import { globalCss } from "./theme";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  "body": {
    fontFamily: '$untitled',
  },

  ...modalStylesProductDetails,
  ...modalStylesCart,
})