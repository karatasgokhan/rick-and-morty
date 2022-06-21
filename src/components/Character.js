import React from "react";
import { Col } from "react-grid-system";
import s from "./Character.module.css";

function Character(props) {
  return (
    <>
      {props.characterData?.map((item, index) => {
        return (
          <Col key={index} sm={4}>
            <div className={s.residentCartBlock}>
              <div className={s.imgBlock}>
                <img src={item.image} alt={`character avatar ${index}`} />
              </div>
              <div className={s.textBlock}>
                <div className={s.textItem}>
                  <h2>{item.name}</h2>
                  <div className={s.statusItem}>
                    <span
                      className={`${s.circle} ${
                        item.status === "Dead"
                          ? s.dead
                          : item.status === "Alive"
                          ? s.alive
                          : s.unknown
                      }`}
                    ></span>
                    {item.status}
                  </div>
                  <span>{item.species}</span>
                  <span>{item.type}</span>
                  <span>{item.genter}</span>
                  <span>{item.origin.name}</span>
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
}

export default Character;
