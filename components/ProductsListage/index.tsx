import { Product } from "../../types/Product";
import { ProductCard } from "../ProductCard";
import { Container, Content, ProductsGrid } from "./styles";

interface Props {
  products: Product[];
}

export const ProductsListage: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <Content>
        <h1>Products listage</h1>
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductsGrid>
      </Content>
    </Container>
  );
};
