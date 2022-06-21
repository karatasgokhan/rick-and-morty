import React from "react";
import { Col } from "react-grid-system";
import s from "./Character.module.css";

function Character(props) {
  return (
    <>
      <Col key={props.index} md={6} xxl={4}>
        <div className={s.residentCartBlock}>
          <div className={s.imgBlock}>
            <img
              src={props.item.image}
              alt={`character avatar ${props.index}`}
            />
          </div>
          <div className={s.textBlock}>
            <div className={s.textItem}>
              <p>{props.item.name}</p>
              <div className={s.statusItem}>
                <span
                  className={`${s.circle} ${
                    props.item.status === "Dead"
                      ? s.dead
                      : props.item.status === "Alive"
                      ? s.alive
                      : s.unknown
                  }`}
                ></span>
                <span
                  className={`${
                    props.item.status === "Dead"
                      ? s.deadText
                      : props.item.status === "Alive"
                      ? s.aliveText
                      : s.unknownText
                  }`}
                >
                  {props.item.status}
                </span>
              </div>
              <span>{props.item.species}</span>
              <span>{props.item.type}</span>
              <span>{props.item.genter}</span>
              <span>{props.item.origin.name}</span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Character;
