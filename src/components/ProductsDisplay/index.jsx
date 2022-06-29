import CardProduct from "../CardProduct";
import formatValue from "../../utils/formatValue";
import { Container } from "../ProductsDisplay/styles";
import { useSelector } from "react-redux";
function ProductsDisplay() {
  const products = useSelector(({ products }) => products).map((item) => ({
    ...item,
    priceDisplay: formatValue(item.price),
  }));
  console.log(products);
  return (
    <Container>
      <section>
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </section>
    </Container>
  );
}
export default ProductsDisplay;
