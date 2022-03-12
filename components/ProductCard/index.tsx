import { Product } from "../../types/Product";
import { Container } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { useModalProductDetailsContext } from "../../contexts/ModalProductDetailsContext";
import { useCartContext } from "../../contexts/CartContext";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { openModal } = useModalProductDetailsContext();
  const { addProduct } = useCartContext();

  function handleOpenModalProductDetails() {
    openModal(product);
  }

  function formatPrice(price: number) {
    const integer = price.toString().slice(0, -2);
    const decimals = price.toString().slice(-2);
    return `${integer},${decimals}`;
  }

  return (
    <Container>
      <div className="image-canvas">
        <img
          src={product.gallery[0].image.url}
          alt={product.gallery[0].image.alt}
        />
      </div>
      <h2>{product.name}</h2>
      <span className="label">{product.label}</span>
      <span className="available">Available: {product.inventory}</span>
      <span className="price">R$ {formatPrice(product.price)}</span>
      <button
        className="see-details"
        onClick={() => handleOpenModalProductDetails()}
      >
        Ver mais
      </button>
      <button className="add-to-cart" onClick={() => addProduct(product)}>
        <MdAddShoppingCart />
      </button>
    </Container>
  );
};
