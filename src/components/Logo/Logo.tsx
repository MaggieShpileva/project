import { Link } from "react-router-dom";
import logo_img from "../../images/logo.png";
import style from "./style.module.css";

const Logo = () => {
  return (
    <Link to="/project" className={style.logo}>
      <img src={logo_img} alt="" />
      <span>Jelly Belly</span>
    </Link>
  );
};

export default Logo;
