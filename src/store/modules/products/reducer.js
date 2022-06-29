import Galaxy_M12 from "../../../assets/img/Galaxy_M12.png";
import Galaxy_S20 from "../../../assets/img/Galaxy_S20.png";
import Motorola_Moto_E20 from "../../../assets/img/Motorola_Moto_E20.png";
import LG_K62 from "../../../assets/img/LG_K62.png";
import Galaxy_S21 from "../../../assets/img/Galaxy_S21.png";
import Galaxy_S20_FE from "../../../assets/img/Galaxy_S20_FE.png";

const defaultProducts = [
  {
    id: 1,
    name: "Smartphone Samsung Galaxy M12 64GB Azul 4G",
    description: "4GB RAM Tela 6,5” Câm. Quádrupla + Selfie 8MP",
    price: 899.1,
    img: Galaxy_M12,
  },
  {
    id: 2,
    name: "Smartphone Samsung Galaxy S20 FE 128GB Cloud Navy",
    description: "4G 6GB RAM Tela 6,5” Câm. Tripla + Selfie 32MP",
    price: 1979.0,
    img: Galaxy_S20,
  },
  {
    id: 3,
    name: "Smartphone Motorola Moto E20 32GB Cinza 4G ",
    description: "2GB RAM Tela 6,5” Câm. Dupla + Selfie 5MP",
    price: 809.1,
    img: Motorola_Moto_E20,
  },
  {
    id: 4,
    name: "Smartphone LG K62 64GB Vermelho 4G Octa-Core",
    description: "4GB RAM Tela 6,59” Câm. Quádrupla + Selfie 13MP",
    price: 1399.0,
    img: LG_K62,
  },
  {
    id: 5,
    name: "Smartphone Samsung Galaxy S21+ 256GB Violeta 5G",
    description: "8GB RAM Tela 6,7” Câm. Tripla + Selfie 10MP",
    price: 4299.0,
    img: Galaxy_S21,
  },
  {
    id: 6,
    name: "Smartphone Samsung Galaxy S20 FE 256GB Cloud White",
    description: "4G 8GB RAM Tela 6,5” Câm. Tripla + Selfie 32MP",
    price: 5224.0,
    img: Galaxy_S20_FE,
  },
];
const productsReducer = (state = defaultProducts, action) => {
  return state;
};
export default productsReducer;
