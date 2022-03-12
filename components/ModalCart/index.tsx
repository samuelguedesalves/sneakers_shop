import { Container, ControlAmount, Header, ProductItem } from "./styles";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { useCartContext } from "../../contexts/CartContext";

export const ModalCart: React.FC = () => {
  const {
    modalStatus,
    closeModal,
    cartItems,
    addProduct,
    removeProduct,
    removeCartItem,
  } = useCartContext();

  return (
    <Modal
      isOpen={modalStatus}
      onRequestClose={closeModal}
      overlayClassName="modal-cart-overlayer"
      className="modal-cart"
    >
      <Header>
        <span>Your cart</span>
        <button onClick={() => closeModal()}>
          <MdClose />
        </button>
      </Header>
      <Container>
        {cartItems.map((cartItem, index) => {
          const image = cartItem.product.gallery[0].thumbnail;

          return (
            <ProductItem key={index}>
              <div className="media">
                <img src={image.url} alt={image.alt} />
              </div>

              <div className="details">
                <span className="product-name">{cartItem.product.name}</span>

                <span className="product-amount">
                  amount: {cartItem.amount}
                </span>
              </div>

              <div className="options">
                <ControlAmount>
                  <div className="heading">
                    <span>Amount</span>
                  </div>

                  <div className="body">
                    <button onClick={() => addProduct(cartItem.product)}>
                      +
                    </button>

                    <span className="amount-display">{cartItem.amount}</span>

                    <button onClick={() => removeProduct(cartItem.product.id)}>
                      -
                    </button>
                  </div>
                </ControlAmount>

                <button
                  className="remove-item"
                  onClick={() => removeCartItem(cartItem.product.id)}
                >
                  Remove
                </button>
              </div>
            </ProductItem>
          );
        })}
      </Container>
    </Modal>
  );
};
