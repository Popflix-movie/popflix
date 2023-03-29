import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./menu-style.css";

const Menu = (movies) => {
  const array_movies = movies.movies;
  const navigate = useNavigate();

  return (
    <div className="container-menu">
      <div className="container-items">
        {array_movies.map((movie, index) => (
          <div className="item" key={index}>
            {index <= 5 && (
              <div className="item-card">
                <div className="info-card">
                  <button onClick={() => navigate("/movie")}>
                    <BsFillPlayFill size={20} color="#fff" />
                  </button>
                  <span>{movie.title}</span>
                </div>
                <img
                  className="image-poster"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
