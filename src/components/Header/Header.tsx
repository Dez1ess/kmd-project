import "./Header.scss";
import Container from "../Container/Container";
import logo from "../../assets/images/logo.svg";
import favorites from "../../assets/icons/favorites.svg";
import cart from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";

function Header() {
  
  return (
    <>
      <div className="header-container">
        <Container>
          <div className="header-top-bar">
            <div className="get-help">
              <p>098 900 09 09</p>
              <p>Допомога</p>
            </div>
            <div className="login">
              <p>Увійти / Зареєструватися</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="header-container">
        <Container>
          <header className="header">
            <a className="logo" href="#!">
              <img src={logo} alt="logo" />
            </a>
            <div className="header-nav">
              <ul>
                <li>
                  <a href="#!">Новинки</a>
                </li>
                <li className="selected-nav-item">
                  <a href="#!">Чоловіки</a>
                </li>
                <li>
                  <a href="#!">Жінки</a>
                </li>
                <li>
                  <a href="#!">Аксесуари</a>
                </li>
                <li>
                  <a href="#!">Акції</a>
                </li>
              </ul>
            </div>
            <div className="header-interact">
              <div className="search">
                <img src={search} alt="search" />
                <input type="text" name="search" />
              </div>
              <img src={favorites} alt="favorites" />
              <img src={cart} alt="cart" />
            </div>
          </header>
        </Container>
      </div>
    </>
  );
}

export default Header;
