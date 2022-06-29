import { Container, ContainerCart } from "./styles";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunk";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function CardProduct({ product, isCart = false, index }) {
  const { name, description, priceDisplay, img } = product;
  const dispatch = useDispatch();

  const handleClick = (product) => {
    toast.success("Produto adicionado");
    dispatch(addToCartThunk(product));
  };
  const handleClickDelete = (index) => {
    toast.success("Produto removido");
    dispatch(removeFromCartThunk(index));
  };

  return (
    <>
      {isCart ? (
        <ContainerCart>
          <figure>
            <img src={img} alt={name} />
          </figure>
          <h4>{name}</h4>
          <h3>{priceDisplay}</h3>
          <button onClick={() => handleClickDelete(index)}>
            Remover Produto
          </button>
        </ContainerCart>
      ) : (
        <Container>
          <figure>
            <img src={img} alt={name} />
          </figure>
          <h4>{name}</h4>
          <p>{description}</p>
          <h3>{priceDisplay}</h3>
          <button onClick={() => handleClick(product)}>
            Adicionar produto
          </button>
        </Container>
      )}
    </>
  );
}
export default CardProduct;
