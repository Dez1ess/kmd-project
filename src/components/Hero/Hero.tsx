import "./Hero.scss";
import Container from "../UI/Container/Container";
import ImagesList from "./ImagesList/ImagesList";
import ProductInfo from "./ProductInfo/ProductInfo";

function Hero() {
  return (
    <Container top={20}>
      <section className="hero">
        <ImagesList />
        <ProductInfo />
      </section>
    </Container>
  );
}

export default Hero;
