import { createContext, useContext, useState } from "react";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";

interface ContextProps {
  modalStatus: boolean;
  openModal: () => void;
  closeModal: () => void;
  cartItems: CartItem[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  removeCartItem: (productId: number) => void;
}

const initialContextState: ContextProps = {
  modalStatus: false,
  openModal: () => {},
  closeModal: () => {},
  cartItems: [],
  addProduct: () => {},
  removeProduct: () => {},
  removeCartItem: () => {},
};

const CartContext = createContext<ContextProps>(initialContextState);

export const CartProvider: React.FC = ({ children }) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addProduct(product: Product) {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.product.id == product.id ? true : false;
    });

    if (cartItemIndex != -1) {
      const cartItem = cartItems[cartItemIndex];

      const updateCartItem: CartItem = {
        ...cartItem,
        amount: cartItem.amount + 1,
      };

      const newCartItemsList = [...cartItems];

      newCartItemsList[cartItemIndex] = { ...updateCartItem };

      setCartItems(newCartItemsList);
    } else {
      setCartItems([
        ...cartItems,
        {
          amount: 1,
          product: product,
        },
      ]);
    }
  }

  function removeProduct(productId: number) {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.product.id == productId ? true : false;
    });

    const cartItem = cartItems[cartItemIndex];

    if (cartItem.amount == 1) {
      setCartItems([
        ...cartItems.filter((item, index) => index != cartItemIndex),
      ]);
    } else {
      const updateCartItem: CartItem = {
        ...cartItem,
        amount: cartItem.amount - 1,
      };

      const newCartItemsList = [...cartItems];

      newCartItemsList[cartItemIndex] = { ...updateCartItem };

      setCartItems(newCartItemsList);
    }
  }

  function removeCartItem(productId: number) {
    const cartItemIndex = cartItems.findIndex((item) => {
      return item.product.id == productId ? true : false;
    });

    if (cartItemIndex != -1) {
      setCartItems(
        cartItems.filter((cartItem, index) => {
          return index != cartItemIndex ? true : false;
        })
      );
    }
  }

  function openModal() {
    setModalStatus(true);
  }

  function closeModal() {
    setModalStatus(false);
  }

  return (
    <CartContext.Provider
      value={{
        modalStatus,
        openModal,
        closeModal,
        cartItems,
        addProduct,
        removeProduct,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
