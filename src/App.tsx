import 'normalize.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <>
      <Header />
      <Container>
        <Breadcrumbs top={20}/>
        <Hero />
      </Container>
    </>
  )
}

export default App