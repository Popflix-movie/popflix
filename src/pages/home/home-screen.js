import { Fragment } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/horizontal-menu/menu";
import movies from "../../service/movies.json";
import "./home-style.css";

const HomeScreen = () => {
  return (
    <Fragment>
      <Header />
      <div className="container-body-home">
        <div className="container-lancamentos">
          <h1>Lançamentos</h1>
          <Menu movies={movies} />
        </div>
        <div className="container-filmes-alta">
          <h1>Filmes em Alta</h1>
          <Menu movies={movies} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default HomeScreen;
