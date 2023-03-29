import { Fragment } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./movie-style.css";

const MovieScreen = () => {
  return (
    <Fragment>
      <Header />
      <div className="container-movies">
        <img
          className="image-backdrop-movie"
          src={`https://image.tmdb.org/t/p/w500${res.backdrop_path}`}
          alt={res.original_title}
        />
        <h1>{res.title}</h1>
        <div className="container-detail">
          <div className="container-detail-poster">
            <img
              className="image-poster-movie"
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              alt={res.original_title}
            />
            <span>{res.release_date}</span>
          </div>
          <div className="container-overview">
            <label>{res.overview}</label>
            <div className="info-overview">
              <span>Categoria: Ação </span> <span>Duração: 2h</span>
            </div>
          </div>
        </div>
        <div className="container-buttons">
          <button>Trailer</button>
          <button>Assistir</button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default MovieScreen;

const res = {
  adult: false,
  backdrop_path: "/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
  genre_ids: [28, 12, 878],
  id: 76341,
  original_language: "en",
  original_title: "Mad Max: Fury Road",
  overview:
    "Em um mundo apocalíptico, Max Rockatansky acredita que a melhor forma de sobreviver é não depender de ninguém. Porém, após ser capturado pelo tirano Immortan Joe e seus rebeldes, Max se vê no meio de uma guerra mortal, iniciada pela imperatriz Furiosa que tenta salvar um grupo de garotas. Também tentando fugir, Max aceita ajudar Furiosa. Dessa vez, o tirano Joe está ainda mais implacável pois teve algo insubstituível roubado.",
  popularity: 76.764,
  poster_path: "/tH64gzAHDFg7EFcgfkkZyHdGM5P.jpg",
  release_date: "2015-05-13",
  title: "Mad Max: Estrada da Fúria",
  video: false,
  vote_average: 7.573,
  vote_count: 20377,
};
