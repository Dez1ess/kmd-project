import "./Breadcrubms.scss";

function Breadcrumbs({ top }: { top: number }) {
  return (
    <div style={{ marginTop: top + "px" }}>
      <ul className="breadcrumbs">
        <li>
          <a href="#!">головна</a>
        </li>
        <li>
          <a href="#!">чоловіки</a>
        </li>
        <li>
          <a href="#!">одяг</a>
        </li>
        <li>
          <a href="#!">термобілизна</a>
        </li>
        <li>
          <a href="#!">atlantic</a>
        </li>
        <li>
          <a className="active-link" href="#!">
            чоловічий термокостюм atlantic MW0MW32780
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
