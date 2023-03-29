import { Route, Routes } from "react-router-dom";
import App from "../App";
import MovieScreen from "../pages/movie/movie-screen";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie" element={<MovieScreen />} />
    </Routes>
  );
};
//<Route path="/movie" element={}/>

export default Path;
