import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/rickAndMortyLogo.png";

function Header() {
  const menuContent = [
    { name: "Dasboard", url: "/" },
    { name: "Loacations", url: "locations" },
  ];
  return (
    <>
      <div className={s.headerWrapper}>
        <div className={s.titleBlock}>
          <img className={s.imgItem} src={logo} alt="Rick And Morty logo" />
          <p className={s.titleText}>Rick And Morty [App]</p>
        </div>
      </div>
      <div className={s.sideNav}>
        <ul className={s.menu}>
          {menuContent.map((item, index) => {
            return (
              <li key={index} className={s.menuItem}>
                <a href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Header;
