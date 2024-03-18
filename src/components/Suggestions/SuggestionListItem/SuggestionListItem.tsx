import "./SuggestionListItem.scss";
import favoritesSmall from "../../../assets/icons/favorites-sm.svg";

function SuggestionListItem({img}: {img: string}) {
  return (
    <div className="suggestion-list-item">
      <div className="add-to-favorites">
        <img src={favoritesSmall} alt="add to favorites" />
      </div>
      <div className="suggestion-img">
        <img src={img} alt="suggestion 1" />
      </div>
      <h4>Термобілизна для бодібілдерів</h4>
      <div className="audience">
        <p>Для чоловіків</p>
        <p>2 кольори</p>
      </div>
      <p className="price">
        4000 <span>грн.</span>
      </p>
    </div>
  );
}

export default SuggestionListItem;
