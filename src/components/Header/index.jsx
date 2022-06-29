import { useHistory } from "react-router-dom";
import { HeaderStyled } from "./styles";

function Header() {
  const history = useHistory();
  return (
    <HeaderStyled>
      <h1 onClick={() => history.push("/")}>Kenzie Shop</h1>
      <div>
        <button onClick={() => history.push("/cart")}>Carrinho</button>
        <button>Sair</button>
      </div>
    </HeaderStyled>
  );
}
export default Header;
