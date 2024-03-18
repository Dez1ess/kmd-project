import "./Button.scss";

function Button({
  color,
  bgColor,
  text,
}: {
  color: string;
  bgColor: string;
  text: string;
}) {
  return (
    <button
      style={{ color: color, backgroundColor: bgColor}}
      className="interact-btn"
    >
      {text}
    </button>
  );
}

export default Button;
