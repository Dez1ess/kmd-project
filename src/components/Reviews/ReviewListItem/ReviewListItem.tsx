import "./ReviewListItem.scss";
import addReviewIcon from "../../../assets/icons/plus-add.png";
import customerReviewLogo from "../../../assets/images/customer.png";
import reviewStar from "../../../assets/icons/review-star.png";
import reviewStarFilled from "../../../assets/icons/review-star-filled.png";

function ReviewListItem({ newReview }: { newReview: boolean }) {
  return newReview ? (
    <div className="review-list-item add-review">
      <img src={addReviewIcon} alt="add-review-plus-icon" />
    </div>
  ) : (
    <div className="review-list-item">
      <div className="user-data">
        <div className="customer-logo">
          <img src={customerReviewLogo} alt="customer logo" />
        </div>
        <div className="customer-info">
          <div className="stars">
            <img src={reviewStarFilled} alt="filled review star" />
            <img src={reviewStarFilled} alt="filled review star" />
            <img src={reviewStarFilled} alt="filled review star" />
            <img src={reviewStarFilled} alt="filled review star" />
            <img src={reviewStar} alt="review star" />
          </div>
          <p className="username">Жора Ремінгтон</p>
        </div>
      </div>
      <p className="customer-review">
        Дуже задоволений якістю обслуговування і самою продукцією. Купували
        термобілизну у подарунок, друзі...
      </p>
    </div>
  );
}

export default ReviewListItem;
