import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { ModalCart } from "../components/ModalCart";
import { ModalProductDetails } from "../components/ModalProductDetails/Index";
import { ProductsListage } from "../components/ProductsListage";
import { CartProvider } from "../contexts/CartContext";
import { ModalProductDetailsProvider } from "../contexts/ModalProductDetailsContext";
import { loadProducts } from "../services/products";
import { Product } from "../types/Product";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <Head>
        <title>Sneakers Shop</title>
        <meta name="description" content="The best sneakers of internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CartProvider>
          <Header />

          <ModalProductDetailsProvider>
            <ProductsListage products={products} />
            <ModalProductDetails />
          </ModalProductDetailsProvider>
          <ModalCart />
        </CartProvider>
      </main>
    </div>
  );
};

Home.getInitialProps = () => {
  const products = loadProducts();
  return { products };
};

export default Home;
