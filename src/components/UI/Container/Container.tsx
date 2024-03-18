import "./Container.scss";

function Container({
  children,
  top,
}: {
  children: React.ReactNode;
  top?: number;
}) {
  return (
    <div className="container" style={{ marginTop: top + "px" }}>
      {children}
    </div>
  );
}

export default Container;
