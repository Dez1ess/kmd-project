import "./InfoListItem.scss";

function InfoListItem({
  subhead,
  description,
}: {
  subhead: string;
  description: string;
}) {
  return (
    <div className="info-item">
      <p className="subhead">{subhead}</p>
      <p className="item-description">{description}</p>
    </div>
  );
}

export default InfoListItem;
