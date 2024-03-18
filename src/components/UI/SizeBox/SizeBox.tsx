import "./SizeBox.scss";

function SizeBox({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`size-box ${selected ? "selected-size" : ""}`}
      onClick={onClick}
    ></div>
  );
}

export default SizeBox;
