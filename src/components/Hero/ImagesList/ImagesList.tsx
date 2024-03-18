import "./ImagesList.scss";
import productFrontImg from "../../../assets/images/product-image-front.png";
import productFrontSmallImg from "../../../assets/images/product-image-front-small.png";
import productSideImg from "../../../assets/images/product-image-side.png";

function ImagesList() {
  return (
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
  )
}

export default ImagesList;