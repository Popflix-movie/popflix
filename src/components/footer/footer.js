import { Fragment } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import logo from "../../images/logo192.png";
import "./footer-style.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="container-footer">
        <div className="container-footer-social">
          <img src={logo} alt="logo" className="footer-logo" />
          <div className="container-social-media">
            <FaFacebook size={20} color="#a8e7ca" className="icon-social" />
            <AiOutlineInstagram
              size={20}
              color="#a8e7ca"
              className="icon-social"
            />
          </div>
        </div>
        <div className="container-footer-info">
          <label>Informações:</label>
          <div className="footer-information">
            <label>Desenvolvedores</label>
            <label>Suporte</label>
          </div>
        </div>
      </div>
      <label className="copyright-popflix">Copyright @ Popflix 2023</label>
    </Fragment>
  );
};

export default Footer;
