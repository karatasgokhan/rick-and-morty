import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import s from "./SubPageHeader.module.css";

function Character(props) {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {props.back && (
          <div onClick={() => navigate(-1)} className={s.IconItem}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        )}
        <h2>{props.title}</h2>
      </div>
    </>
  );
}

export default Character;
