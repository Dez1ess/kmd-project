import "./Main.scss";
import Container from "../UI/Container/Container";

function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <main className="main">{children}</main>
    </Container>
  );
}

export default Main;
