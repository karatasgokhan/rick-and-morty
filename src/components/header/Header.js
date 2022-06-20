import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/rickAndMortyLogo.png";

function Header() {
  return (
    <>
      <div className={s.headerWrapper}>
        <div className={s.titleBlock}>
          <img className={s.imgItem} src={logo} alt="Rick And Morty logo" />
          <p className={s.titleText}>Rick And Morty [App]</p>
        </div>
      </div>
    </>
  );
}

export default Header;
