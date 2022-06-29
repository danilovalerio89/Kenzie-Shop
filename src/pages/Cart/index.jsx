import { Container } from "./styles";
import CardProduct from "../../components/CardProduct";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const [openModal, setOpenModal] = useState(false);
  const productsCart = useSelector(({ cart }) => cart);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Container>
        <section>
          {productsCart.map((product, index) => (
            <CardProduct product={product} key={index} isCart index={index} />
          ))}
        </section>
      </Container>
      <Footer handleClick={handleClick} openModal={openModal}>
        Finalizar pedido
      </Footer>
    </>
  );
}
export default Cart;
