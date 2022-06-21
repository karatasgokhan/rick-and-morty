import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/rickAndMortyLogo.png";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constans/routePath";

function Header() {
  const navigate = useNavigate();
  const menuContent = [
    { name: "Dasboard", url: ROUTES.HOME },
    { name: "Locations", url: ROUTES.LOCATIONS },
  ];
  return (
    <>
      <div className={s.headerWrapper}>
        <div className={s.titleBlock}>
          <a href={ROUTES.HOME}>
            <img className={s.imgItem} src={logo} alt="Rick And Morty logo" />
          </a>
          <p className={s.titleText}>Rick And Morty [App]</p>
        </div>
      </div>
      <div className={s.sideNav}>
        <ul className={s.menuBlock}>
          {menuContent.map((item, index) => {
            return (
              <li
                onClick={() => navigate(item.url)}
                key={index}
                className={s.menuItem}
              >
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Header;
