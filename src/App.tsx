import "./styles/main.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";
import Suggestions from "./components/Suggestions/Suggestions";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main>
        <Breadcrumbs top={20} />
        <Hero />
        <Reviews />
        <Suggestions />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
