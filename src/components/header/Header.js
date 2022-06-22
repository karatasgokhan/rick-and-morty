import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../assets/rickAndMortyLogo.png";
import * as ROUTES from "../../constans/routePath";

function Header() {
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
        {menuContent.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.url}
              className={({ isActive }) =>
                `nav-link ${s.menuItem} ${isActive ? s.active : ""}`
              }
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default Header;
