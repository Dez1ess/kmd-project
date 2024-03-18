import "./ProductInfo.scss";
import favorites from "../../../assets/icons/favorites.svg";
import cart from "../../../assets/icons/cart.svg";
import SizeBox from "../../UI/SizeBox/SizeBox";
import ColorBox from "../../UI/ColorBox/ColorBox";
import InfoList from "./InfoList/InfoList";
import Button from "../../UI/Button/Button";
import { useState } from "react";

function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState<string>("#fff");
  const [selectedSize, setSelectedSize] = useState<string>("XL");

  const handleColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-info">
      <div className="product-name">
        <h3>чоловічий термокостюм atlantic</h3>
        <p>термокостюм</p>
      </div>
      <h3 className="price">
        3700 <span>ГРН.</span>
      </h3>
      <div className="product-size">
        <p>оберіть розмір</p>
        <div className="sizes">
          <SizeBox
            selected={selectedSize === "S"}
            onClick={() => handleSize("S")}
          />
          <SizeBox
            selected={selectedSize === "M"}
            onClick={() => handleSize("M")}
          />
          <SizeBox
            selected={selectedSize === "L"}
            onClick={() => handleSize("L")}
          />
          <SizeBox
            selected={selectedSize === "XL"}
            onClick={() => handleSize("XL")}
          />
          <SizeBox
            selected={selectedSize === "XXL"}
            onClick={() => handleSize("XXL")}
          />
        </div>
      </div>
      <div className="product-color">
        <p>оберіть колір</p>
        <div className="colors">
          <ColorBox
            selected={selectedColor === "#fff"}
            color="#fff"
            onClick={() => handleColor("#fff")}
          />
          <ColorBox
            selected={selectedColor === "#959595"}
            color="#959595"
            onClick={() => handleColor("#959595")}
          />
          <ColorBox
            selected={selectedColor === "#343434"}
            color="#343434"
            onClick={() => handleColor("#343434")}
          />
        </div>
      </div>
      <div className="product-description">
        <h4>інформація про товар</h4>
        <InfoList />
      </div>
      <div className="product-interact">
        <div className="product-buttons">
          <Button color="#fff" bgColor="#000" text="оформити замовлення" />
          <Button color="#000" bgColor="#fff" text="купити у кредит" />
        </div>
        <div className="product-interact-icons">
          <img src={favorites} alt="favorites" />
          <img src={cart} alt="cart" />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
