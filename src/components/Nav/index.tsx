import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";

const Nav = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <nav className={style.container}>
      <Link to="/beans">Beans</Link>
      <Link to="/facts">Facts</Link>
      <a>Recipies</a>
      <a>Combinations</a>
      <a>History</a>
      <SwitchTheme />
      <Modal isModal={isModal} onClick={() => setIsModal(false)} />
    </nav>
  );
};

export default Nav;
