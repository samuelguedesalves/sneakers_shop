import Image from "next/image";
import Modal from "react-modal";
import { useModalProductDetailsContext } from "../../contexts/ModalProductDetailsContext";
import { ImageContainer, InfoContainer, ModalContainer } from "./styles";
import { MdClose } from "react-icons/md";
import { ProductSlider } from "../ProductSlider";
import { useCartContext } from "../../contexts/CartContext";
import { useEffect, useState } from "react";

Modal.setAppElement("#modal-root");

export const ModalProductDetails = () => {
  const { isOpen, closeModal, product } = useModalProductDetailsContext();
  const { addProduct, cartItems } = useCartContext();

  const [amountInCart, setAmountInCart] = useState<number | null>(null);

  useEffect(() => {
    console.log("disparou");
    if (product) {
      const cartItemIndex = cartItems.findIndex((item) => {
        return item.product.id == product.id ? true : false;
      });

      const cartItem = cartItemIndex != -1 ? cartItems[cartItemIndex] : null;

      if (cartItem) setAmountInCart(cartItem.amount);
    } else {
      setAmountInCart(null);
    }
  }, [cartItems, product]);

  function formatPrice(price: number) {
    const integer = price.toString().slice(0, -2);
    const decimals = price.toString().slice(-2);
    return `${integer},${decimals}`;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-product-details-overlayer"
      className="modal-product-details"
    >
      <button className="close-modal" onClick={closeModal}>
        <MdClose />
      </button>
      {!product ? (
        <span>carregando...</span>
      ) : (
        <ModalContainer>
          <div className="left-side">
            <ImageContainer>
              <ProductSlider medias={product.gallery} />
            </ImageContainer>
          </div>

          <div className="right-side">
            <InfoContainer>
              <span className="name">{product.name}</span>

              <span className="label">Marca: {product.label}</span>
              <span className="inventory">
                {product.inventory} unidades disponíveis
              </span>

              <span className="price">R$ {formatPrice(product.price)}</span>

              {amountInCart && (
                <span className="amount-into-cart">
                  Amount into cart: {amountInCart}
                </span>
              )}

              <button
                className="add-to-cart"
                onClick={() => addProduct(product)}
              >
                Adicionar ao carrinho
              </button>
            </InfoContainer>
          </div>
        </ModalContainer>
      )}
    </Modal>
  );
};
