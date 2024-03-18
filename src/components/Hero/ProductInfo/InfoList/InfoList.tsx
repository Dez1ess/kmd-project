import "./InfoList.scss";
import InfoListItem from "./InfoListItem/InfoListItem";

function InfoList() {
  return (
    <div className="info-list">
      <InfoListItem
        subhead="Терморегуляція забезпечить вам тепло в будь-якій ситуації."
        description="Сучасні технології дозволяють нашому термокостюму адаптуватися до
          вашого тіла та навколишнього середовища."
      />
      <InfoListItem
        subhead="Легкість та еластичність для максимальної свободи рухів."
        description="Забудьте про невигоди - наш термокостюм розроблений з урахуванням
          вашої активності."
      />
      <InfoListItem
        subhead="Дихаючі тканини для оптимальної вентиляції."
        description={`Забудьте про потовиділення - наш термокостюм дозволяє шкірі "дихати",
          забезпечуючи вам комфорт під час активної діяльності.`}
      />
    </div>
  );
}

export default InfoList;
