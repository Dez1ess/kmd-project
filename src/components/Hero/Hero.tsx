import "./Hero.scss";
import Container from "../Container/Container";
import productFrontImg from "../../assets/images/product-image-front.png";
import productFrontSmallImg from "../../assets/images/product-image-front-small.png";
import productSideImg from "../../assets/images/product-image-side.png";
import favorites from "../../assets/icons/favorites.svg";
import cart from "../../assets/icons/cart.svg";

function Hero() {
  return (
    <Container top={20}>
      <div className="hero">
        <div className="product-images">
          <div className="main-image">
            <img src={productFrontImg} alt="Product Image"/>
          </div>
          <div className="thumbnail">
            <img src={productSideImg} alt="Thumbnail 1" />
          </div>  
          <div className="thumbnail">
            <img src={productFrontSmallImg} alt="Thumbnail 2" />
          </div>
          <div className="thumbnail">
            <img src={productSideImg} alt="Thumbnail 3" />
          </div>
        </div>
        <div className="product-info">
          <div className="product-name">
            <h3>чоловічий термокостюм atlantic</h3>
            <p>термокостюм</p>
          </div>
          <h3 className="price">3700 <span>ГРН.</span></h3>
          <div className="product-size">
            <p>оберіть розмір</p>
            <div className="sizes">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="selected-size"></div>
              <div></div>
            </div>
          </div>
          <div className="product-color">
            <p>оберіть колір</p>
            <div className="colors">
              <div className="selected-color"></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="product-description">
            <h4>інформація про товар</h4>
            <div className="info-list">
              <div className="info-item">
                <p className="subhead">Терморегуляція забезпечить вам тепло в будь-якій ситуації.</p>
                <p className="item-description">Сучасні технології дозволяють нашому термокостюму адаптуватися до вашого тіла та навколишнього середовища.</p>
              </div>
              <div className="info-item">
                <p className="subhead">Легкість та еластичність для максимальної свободи рухів.</p>
                <p className="item-description">Забудьте про невигоди - наш термокостюм розроблений з урахуванням вашої активності.</p>
              </div>
              <div className="info-item">
                <p className="subhead">Дихаючі тканини для оптимальної вентиляції.</p>
                <p className="item-description">Забудьте про  потовиділення - наш термокостюм дозволяє шкірі "дихати", забезпечуючи вам комфорт під час активної діяльності.</p>
              </div>
            </div>
          </div>
          <div className="product-interact">
            <div className="product-buttons">
              <button className="btn-purchase">оформити замовлення</button>
              <button className="btn-credit">купити у кредит</button>
            </div>
            <div className="product-interact-icons">
              <img src={favorites} alt="favorites" />
              <img src={cart} alt="cart" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero;