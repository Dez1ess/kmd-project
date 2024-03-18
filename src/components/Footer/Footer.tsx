import "./Footer.scss";
import Container from "../UI/Container/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-links">
          <div className="contact-us-main">
            <p className="links-subheader">Контакт - центр</p>
            <div className="links">
              <p>
                <a href="#!">098 900 09 09</a>
              </p>
              <p>
                <a href="#!">Пн - Пт 09:00 - 21:00</a>
              </p>
              <p>
                <a href="#!">Пн - Пт 09:00 - 21:00</a>
              </p>
            </div>
          </div>
          <div className="contact-us-links">
            <div className="contact-us">
              <p className="links-subheader">Покупцям</p>
              <div className="links">
                <p>
                  <a href="#!">Оплата і доставка</a>
                </p>
                <p>
                  <a href="#!">Повернення</a>
                </p>
                <p>
                  <a href="#!">Питання та відповіді</a>
                </p>
              </div>
            </div>
            <div className="contact-us">
              <p className="links-subheader">Особистий кабінет</p>
              <div className="links">
                <p>
                  <a href="#!">Мої дані</a>
                </p>
                <p>
                  <a href="#!">Історія замовлень</a>
                </p>
                <p>
                  <a href="#!">Улюблені</a>
                </p>
                <p>
                  <a href="#!">Розсилки</a>
                </p>
              </div>
            </div>
            <div className="contact-us">
              <p className="links-subheader">Про компанію</p>
              <div className="links">
                <p>
                  <a href="#!">Про нас</a>
                </p>
                <p>
                  <a href="#!">Новини</a>
                </p>
                <p>
                  <a href="#!">Стати партнером</a>
                </p>
                <p>
                  <a href="#!">Угода користувача</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer-bottom-container">
        <Container>
          <div className="footer-bottom">
            <ul className="footer-nav">
              <li>
                <a href="#!"></a>новинки
              </li>
              <li>
                <a href="#!"></a>чоловіки
              </li>
              <li>
                <a href="#!"></a>жінки
              </li>
              <li>
                <a href="#!"></a>аксесуари
              </li>
              <li>
                <a href="#!"></a>акції
              </li>
            </ul>
            <p className="copyright">
              © 2022 — 2023 IGNAT. Усі права захищені.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
