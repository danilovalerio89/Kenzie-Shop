import { FooterStyled } from "./styles";
import formatValue from "../../utils/formatValue";

function Footer({ openModal = false, handleClick }) {
  const productsCart = JSON.parse(localStorage.getItem("cartItens")) || [];
  const priceTotal = productsCart.reduce((acc, cur) => acc + cur.price, 0);
  const displayTotal = formatValue(priceTotal);

  return (
    <>
      {openModal ? (
        <FooterStyled>
          <header onClick={handleClick}>
            <h3>Finalizar pedido</h3>
          </header>
          <div>
            <p>Quantidade: {productsCart.length}</p>
            <p>Preço Total: {displayTotal}</p>
          </div>
          <button> Finalizar Pedido </button>
        </FooterStyled>
      ) : (
        <FooterStyled>
          <header onClick={handleClick}>
            <h3>Finalizar pedido</h3>
          </header>
        </FooterStyled>
      )}
    </>
  );
}
export default Footer;
