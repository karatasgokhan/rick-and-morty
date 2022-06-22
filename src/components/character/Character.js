import React from "react";
import { Col } from "react-grid-system";
import s from "./Character.module.css";
import { checkStatus, checkStatusText } from "../../helper/index";

function Character(props) {
  return (
    <>
      <Col md={6} xxl={4}>
        <div className={s.residentCartBlock}>
          <div className={s.imgBlock}>
            <img
              src={props.item.image}
              alt={`character avatar ${props.index}`}
            />
          </div>
          <div className={s.textBlock}>
            <div className={s.textItem}>
              <p className={s.locationName}>{props.item.name}</p>
              <div className={s.statusItem}>
                <span
                  className={`${s.circle} ${checkStatus(props.item.status, s)}`}
                ></span>
                <span className={`${checkStatusText(props.item.status, s)}`}>
                  {props.item.status}
                </span>
              </div>
              <p>{props.item.species}</p>
              <p>{props.item.type}</p>
              <p>{props.item.gender}</p>
              <p>{props.item.origin.name}</p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Character;
