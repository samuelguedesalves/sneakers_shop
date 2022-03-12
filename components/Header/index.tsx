import { Container, Content } from "./styles";
import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "../../contexts/CartContext";

export const Header: React.FC = () => {
  const { openModal: openCartModal } = useCartContext();

  return (
    <Container>
      <Content>
        <h1>Sneakers Shop</h1>

        <button onClick={() => openCartModal()}>
          <MdShoppingCart />
        </button>
      </Content>
    </Container>
  );
};
