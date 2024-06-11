import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomePage from "./screens/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Container>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
     </Routes>
      </Container>
      <main className="py-3"></main>
     
      <Footer />
    </>
  );
};

export default App;
