import { createContext, useContext, useState } from "react";
import { Product } from "../types/Product";

interface ContextProps {
  isOpen: boolean;
  product: Product | null;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

const ModalProductDetailsContext = createContext<ContextProps>({
  isOpen: false,
  product: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProductDetailsProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);

  function openModal(product: Product) {
    setProduct(product);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setProduct(null);
  }

  return (
    <ModalProductDetailsContext.Provider
      value={{
        isOpen,
        product,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalProductDetailsContext.Provider>
  );
};

export const useModalProductDetailsContext = () => {
  return useContext(ModalProductDetailsContext);
};
