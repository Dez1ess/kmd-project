import "./ColorBox.scss";

function ColorBox({
  color,
  selected,
  onClick,
}: {
  color: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`color-box ${selected ? "selected-color" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
}

export default ColorBox;
