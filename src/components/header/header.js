import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./header-style.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container-header">
      <div className="container-title" onClick={() => navigate("/")}>
        <h1>Pop</h1>
        <h1>flix</h1>
      </div>
      <div className="container-menu-header">
        <label>Filmes</label>
        <label>Séries</label>
        <AiOutlineSearch size={20} color="#a8e7ca" className="icon-search" />
      </div>
    </div>
  );
};

export default Header;
