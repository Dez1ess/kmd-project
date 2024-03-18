import "./Suggestions.scss";
import suggestionSideLeftImg from "../../assets/images/suggestion-side-left.png";
import suggestionSideRightImg from "../../assets/images/suggestion-side-right.png";
import suggestionFrontImg from "../../assets/images/suggestion-front.png";
import showMoreIcon from "../../assets/icons/arrow-get-more-down.svg";
import SuggestionListItem from "./SuggestionListItem/SuggestionListItem";

function Suggestions() {
  return (
    <section className="suggestions">
      <h3>Ще може сподобатись</h3>
      <div className="suggestion-list">
        <SuggestionListItem img={suggestionSideLeftImg} />
        <SuggestionListItem img={suggestionFrontImg} />
        <SuggestionListItem img={suggestionSideRightImg} />
      </div>
      <div className="show-more">
        <p>дивитись більше</p>
        <div className="show-more-icon">
          <img src={showMoreIcon} alt="show more" />
        </div>
      </div>
    </section>
  );
}

export default Suggestions;
